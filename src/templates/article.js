import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { LayoutWithoutConstraints } from "../components/Layout"
import Tags from "../components/Tags"
import "./article.scss"
// gatsby-remark-embed-gist
import "../styles/gist/common.scss"
import "../styles/gist/solarized-dark.scss"
import "../styles/gist/solarized-light.scss"
// gatsby-remark-interactive-gifs
import "../styles/interactive-gifs.scss"
// gatsby-remark-prismjs
import "../styles/prismjs/dark.scss"
import "../styles/prismjs/light.scss"

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
    site {
      siteMetadata {
        title
        description
        keywords
        url
        lang
        brand
      }
    }
  }
`

const ArticleTemplate = ({ data }) => {
  const { excerpt, timeToRead, html, fields, frontmatter } = data.markdownRemark
  const { description } = data.site.siteMetadata

  return (
    <LayoutWithoutConstraints
      meta={{
        pageTitle: frontmatter.title,
        description: excerpt || description,
        image: frontmatter.photo,
        ...data.site.siteMetadata,
      }}
    >
      <div id="article" className="pt-14 px-4 pb-24">
        <h1 className="text-center font-bold px-4 md:px-10">
          {frontmatter.title}
        </h1>
        <div className="text-center text-neutral">
          {fields.date} | Estimated {timeToRead} minute read
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
