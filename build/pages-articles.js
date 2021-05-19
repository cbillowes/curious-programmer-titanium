const path = require("path")
const config = require("./const")
const template = `./src/templates/article.js`
const createPages = true

const landingPage = "./src/pages/index.js"
const landingPageSlug = "/blog"
const DEMO_PAGE = config.DEMO_PAGE

const query = async (graphql) => {
  return await graphql(`
    query ArticlesBuildQuery {
      allMarkdownRemark(sort: { order: ASC, fields: fields___date }) {
        edges {
          node {
            html
            excerpt
            timeToRead
            fields {
              slug
              date
              number
            }
            frontmatter {
              title
              photo
              credit
              creditLink
              creditSource
              tags
            }
          }
        }
      }
    }
  `)
}

const getPreviousNode = (edges, index) => {
  const i = index === 0 ? edges.length - 1 : index - 1
  return edges[i].node
}

const getNextNode = (edges, index) => {
  const i = index === edges.length - 1 ? 0 : index + 1
  return edges[i].node
}

const getArticle = (edges, index) => {
  const node = edges[index].node
  return {
    number: index + 1,
    slug: node.fields.slug,
    date: node.fields.date,
    previous: getPreviousNode(edges, index),
    next: getNextNode(edges, index),
  }
}

const createThePage = (createPage, edges, index, reporter) => {
  const article = getArticle(edges, index)
  const { number, slug, date, previous, next } = article

  createPage({
    path: slug,
    component: path.resolve(template),
    context: {
      slug,
      date,
      number,
      previous,
      next,
    },
  })
  reporter.verbose(`article: [${number}] ${slug}`)
}

const createBlogPages = (createPage, result, reporter) => {
  const edges = result.data.allMarkdownRemark.edges.filter(
    (edge) => edge.node.fields.slug !== DEMO_PAGE,
  )
  edges.forEach((_, index) => {
    createThePage(createPage, edges, index, reporter)
  })
}

const createDemoPage = (createPage, result, reporter) => {
  const edges = result.data.allMarkdownRemark.edges
  const index = edges.map((edge) => edge.node.fields.slug).indexOf(DEMO_PAGE)

  if (index) {
    createThePage(createPage, edges, index, reporter)
  }
}

const createLandingPage = (createPage, reporter) => {
  const slug = landingPageSlug
  createPage({
    path: slug,
    component: path.resolve(landingPage),
    context: {
      slug,
    },
  })
  reporter.verbose(`article: ${slug}`)
}

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create articles`)
    return
  }
  await query(graphql).then((result) => {
    if (result.errors) {
      reporter.error(`create articles: ${result.errors}`)
    }

    const { createPage } = actions
    createBlogPages(createPage, result, reporter)
    createDemoPage(createPage, result, reporter)
    createLandingPage(createPage, reporter)
  })
}
