const _ = require("lodash")
const path = require(`path`)
const constants = require("./build/const")
const images = require("./build/images")
const thumbnail = require("./build/thumbnail")
const articles = require("./build/pages-articles")
const tags = require("./build/pages-tags")
// const search = require("./build/search")

// The order of which nodes are processed is not guaranteed.
// To add numbers to each post, nodes need to be captured
// and processed sequentially by date
const nodes = []

// This is a page that contains examples of usage and what
// generated markdown content will look like.
const DEMO_PAGE = constants.DEMO_PAGE

/**
 * GATSBY API.
 * Events firing in the lifecycle
 * https://www.gatsbyjs.org/docs/actions/
 */

// Generates a bunch of images and creates nodes for markdown files.
// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
exports.onCreateNode = ({ node, actions, reporter }) => {
  const { createNodeField } = actions
  if (node.internal.type === `File`) {
    const absolutePath = node.absolutePath
    if (images.isResource(absolutePath)) {
      images.processHighRes(absolutePath, reporter)
      images.processLowRes(absolutePath, reporter)
      images.generateComponent(absolutePath, reporter)
      reporter.success(`Processed resource: ${absolutePath}\n`)
    }
  }

  if (node.internal.type === `MarkdownRemark`) {
    const { title } = node.frontmatter
    createNodes(node, createNodeField, reporter)
    reporter.success(`Created nodes: ${title}\n`)
  }
}

// Create the necessary dynamic pages required to make the blog delicious.
// https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions, reporter }) => {
  await articles.create(actions, graphql, reporter)
  await tags.create(actions, graphql, reporter)
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

exports.onPostBootstrap = ({ reporter }) => {
  images.generateComponentIndex(reporter)
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve("path-browserify"),
      },
    },
  })
}

const createNodes = (node, createNodeField, reporter) => {
  const { title, date, photo } = node.frontmatter
  const slug = path.join(`/blog`, _.kebabCase(title), `/`)
  const component =
    images.getComponentName(photo) || images.getRandomDefaultComponent()

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
    name: `component`,
    value: component,
  })

  reporter.info(`Created node fields: ${component}`)

  nodes.push(node)
}

const applyNumbers = (createNodeField) => {
  const numberable = nodes.filter((node) => node.fields.slug !== DEMO_PAGE)
  const sorted = numberable.sort(
    (a, b) => toTimestamp(a.fields.date) - toTimestamp(b.fields.date),
  )
  sorted.forEach((node, index) => {
    const number = index + 1

    createNodeField({
      node,
      name: `number`,
      value: number,
    })

    thumbnail.create(createNodeField, node, number)
  })
}

const toTimestamp = (date) => {
  return new Date(date).getTime()
}
