import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query EverythingPageQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { nin: "/blog/example/" } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      edges {
        node {
          timeToRead
          fields {
            slug
            date(formatString: "LL")
            number
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`

const EverythingPage = () => {
  return <div></div>
}

export default EverythingPage
