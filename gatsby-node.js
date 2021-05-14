const _ = require("lodash")
const path = require(`path`)
const constants = require("./build/const")
const blog = require("./build/pages-index")
// const tags = require("./build/pages-tags")
// const search = require("./build/search")

// The order of which nodes are processed is no guaranteed.
// To add numbers to each post, nodes need to be captured
// and processed sequentially by date
const nodes = []

const DEMO_PAGE = constants.DEMO_PAGE

/**
 * GATSBY API.
 * Events firing in the lifecycle
 * https://www.gatsbyjs.org/docs/actions/
 */

// Add the date field to the node.
// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    createNodes(node, createNodeField)
  }
}

// Create the necessary dynamic pages required to make the blog delicious.
// https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions, reporter }) => {
  // blog.create(actions, reporter)
  // await tags.create(actions, graphql, reporter)
  // await search.create(graphql, reporter)
}

// This is the part where numbers and any other graphql fields can be added.
// https://www.gatsbyjs.org/docs/node-apis/#setFieldsOnGraphQLNodeType
exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type
  const { createNodeField } = actions
  if (name === "MarkdownRemark") {
    applyNumbers(createNodeField)
  }
}

/**
 * CORE LOGIC.
 * 💪 Powerful worker functions.
 */
const createNodes = (node, createNodeField) => {
  const { title, date } = node.frontmatter
  const slug = path.join(`/blog`, _.kebabCase(title), `/`)

  createNodeField({
    node,
    name: `number`,
    value: 0,
  })

  createNodeField({
    node,
    name: `slug`,
    value: slug,
  })

  createNodeField({
    node,
    name: `date`,
    value: date,
  })

  createNodeField({
    node,
    name: `photo`,
    value: `logo.jpg`,
  })

  createNodeField({
    node,
    name: `source`,
    value: ``,
  })

  createNodeField({
    node,
    name: `credit`,
    value: `Clarice Bouwer`,
  })

  createNodeField({
    node,
    name: `link`,
    value: ``,
  })

  nodes.push(node)
}

const applyNumbers = (createNodeField) => {
  const numberable = nodes.filter((node) => node.fields.slug !== DEMO_PAGE)
  const sorted = numberable.sort(
    (a, b) => toTimestamp(a.fields.date) - toTimestamp(b.fields.date),
  )
  sorted.forEach((node, index) => {
    createNodeField({
      node,
      name: `number`,
      value: index + 1,
    })
  })
}

/**
 * HELPERS.
 * 🦄 The unicorns bringing everything magically together.
 */

const toTimestamp = (date) => {
  return new Date(date).getTime()
}
