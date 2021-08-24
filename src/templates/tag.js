import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { LayoutWithoutConstraints } from "../components/Layout"
import List from "../components/Articles/List"

const Articles = ({ edges }) => {
  return <List edges={edges} />
}

const TagTemplate = ({ pageContext, data }) => {
  const { allMarkdownRemark, site } = data
  const edges = allMarkdownRemark.edges
  const { tag } = pageContext

  return (
    <LayoutWithoutConstraints meta={site.siteMetadata}>
      <div className="bg-default text-default-script">
        <div className="mx-auto pb-5 pt-10">
          <h1 className="text-center text-5xl font-bold mb-0 mt-5">
            All things <span className="text-color-1">{tag}</span>
          </h1>
          <Articles edges={edges} />
        </div>
      </div>
    </LayoutWithoutConstraints>
  )
}

TagTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,

    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

Articles.propTypes = {
  edges: PropTypes.array.isRequired,
}

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
          excerpt(truncate: true, pruneLength: 250, format: PLAIN)
          fields {
            slug
            date(formatString: "LL")
            number
            component
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

export default TagTemplate
