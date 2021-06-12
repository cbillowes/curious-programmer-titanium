import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Articles from "../components/Everything"
import config from "../config/pages"

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

const Container = styled.div`
  padding-bottom: 2rem;
`

const EverythingPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges

  return (
    <Layout
      config={{ ...config.index }}
      wideContent={
        <Container>
          <Articles edges={edges} />
        </Container>
      }
    />
  )
}

EverythingPage.propTypes = {
  data: PropTypes.object,
}

export default EverythingPage
