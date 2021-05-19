import _ from "lodash"
import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import ArticlesByTag from "../components/ArticlesByTag"
import config from "../config/pages"

export const query = graphql`
  query TagTemplateQuery($tag: String!) {
    allMarkdownRemark(
      limit: 10
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
  return (
    <Layout
      config={{
        ...config,
        route: `/${tag}`,
        title: tag,
        description: `All articles tagged with ${tag}.`,
        keywords: `curious programmer, articles, ${tag}`,
      }}
    >
      <ArticlesByTag edges={edges} />
    </Layout>
  )
}

TagTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default TagTemplate
