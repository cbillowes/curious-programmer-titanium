import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { LayoutWithoutConstraints } from "../components/Layout"
import Tags from "../components/Tags"
import "./article.scss"
import "../styles/gist/common.scss"
import "../styles/gist/solarized-dark.scss"
import "../styles/gist/solarized-light.scss"

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
  const { html, fields, frontmatter } = node

  return (
    <LayoutWithoutConstraints>
      <div id="article" className="pt-14 px-4 pb-60">
        <h1 className="text-center font-bold mb-8 text-4xl">
          {frontmatter.title}
        </h1>
        <div className="text-center text-gray-500">
          {fields.date} | Estimated {node.timeToRead} minute read
        </div>
        <div className="text-center">
          <Tags tags={frontmatter.tags} isButton={true} />
        </div>
        <div
          className="max-w-3xl mx-auto mt-8"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </LayoutWithoutConstraints>
  )
}

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArticleTemplate
