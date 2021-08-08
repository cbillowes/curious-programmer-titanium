import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

export const query = graphql`
  query ArticleTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      html
      excerpt
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
`

const ArticleTemplate = ({ data }) => {
  const node = data.markdownRemark
  const { html } = node
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArticleTemplate
