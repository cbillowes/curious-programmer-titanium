import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import Intro from "../components/About/Intro"
import Brands from "../components/About/Brands"
import Achievements from "../components/About/Achievements"
import Attributes from "../components/About/Attributes"
import Articles from "../components/About/Articles"

const AboutPage = ({ data }) => {
  const { allMarkdownRemark, site } = data
  const { title } = site.siteMetadata
  const edges = allMarkdownRemark.edges

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: "My name is Clarice Bouwer",
        siteTitle: title,
        route: "/about",
      }}
    >
      <div className="pt-16 pb-16">
        <Intro />
        <Brands />
        <Achievements />
        <Attributes />
        <Articles edges={edges} />
      </div>
    </Layout>
  )
}

AboutPage.propTypes = {
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
  query AboutPageQuery {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
          fields {
            slug
            date(formatString: "LL")
            number
            component
            photo
            credit
            source
            link
          }
          frontmatter {
            title
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

export default AboutPage
