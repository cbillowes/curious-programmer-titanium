import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Tags from "../components/Tags"
import config from "../config/pages"

export const query = graphql`
  query TagsPageQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { nin: "/blog/example/" } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`

const Container = styled.div`
  padding: 8rem 0;
`

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges

  return (
    <Layout config={{ ...config.tags }}>
      <Container>
        <Tags edges={edges} />
      </Container>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage
