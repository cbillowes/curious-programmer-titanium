import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query TagsPageQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { nin: "/blog/example/" } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`

const TagsPage = () => {
  return <div></div>
}

export default TagsPage
