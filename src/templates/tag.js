import _ from "lodash"
import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

export const query = graphql`
  query TagTemplateQuery($tag: String!) {
    allMarkdownRemark(
      filter: {
        fields: { slug: { nin: "/blog/example/" } }
        frontmatter: { tags: { in: [$tag] } }
      }
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
  }
`

const TagTemplate = ({ data, pageContext }) => {
  const tag = _.upperFirst(pageContext.tag)
  const edges = data.allMarkdownRemark.edges
  return edges.map(({ node }, index) => {
    return (
      <div key={index}>
        {tag} ... {node}
      </div>
    )
  })
}

TagTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default TagTemplate
