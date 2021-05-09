import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import PostPage from "../components/pages/post"

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        url
        title
        author {
          name
          url
        }
        brand
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
        date
        number
      }
      frontmatter {
        title
        photo
        tags
      }
    }
  }
`

const ArticleTemplate = ({ data, pageContext }) => {
  const siteMetadata = data.site.siteMetadata
  const { slug, next, previous, number } = pageContext
  const { html, excerpt, timeToRead } = data.markdownRemark
  const { date } = data.markdownRemark.fields
  const { title, tags, photo } = data.markdownRemark.frontmatter
  const image = `/social-media/${photo}`

  return (
    <>
      <SEO
        title={title}
        type={`article`}
        crawl={true}
        siteMetadata={siteMetadata}
        image={image}
      >
        {excerpt}
      </SEO>
      <PostPage
        slug={slug}
        title={title}
        date={date}
        tags={tags}
        excerpt={excerpt}
        timeToRead={timeToRead}
        author={siteMetadata.author}
        html={html}
        next={next}
        previous={previous}
        number={number}
      />
    </>
  )
}

ArticleTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default ArticleTemplate
