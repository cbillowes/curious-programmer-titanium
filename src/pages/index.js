import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Articles from "../components/Articles"
import config from "../config/pages"

export const query = graphql`
  query LandingPageQuery {
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
`

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges

  return (
    <Layout
      config={{ ...config.index }}
      wideContent={<Articles edges={edges} limit={50} />}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage
