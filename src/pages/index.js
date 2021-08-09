import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark, site } = data
  const edges = allMarkdownRemark.edges

  return (
    <Layout meta={site.siteMetadata}>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,

    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      limit: 10
      filter: { fields: { slug: { nin: "/blog/example/" } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 1000, format: HTML)
          fields {
            slug
            date(formatString: "LL")
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
    site {
      siteMetadata {
        author {
          name
          url
        }
        brand
        description
        keywords
        lang
        title
        url
        social {
          twitter
        }
      }
    }
  }
`

export default IndexPage
