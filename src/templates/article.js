// TODO: do this "tag slug identifier" thing in a central place
// https://trello.com/c/hNcLLGKR
import _ from "lodash"
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import config from "../config/pages"
import Anchor from "../components/Anchor"
import Ribbon from "../components/Ribbon"

export const query = graphql`
  query ArticleTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      html
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

const Container = styled.div`
  padding-top: 1rem;
  padding-bottom: 6rem;
`

const Header = styled.div`
  text-align: center;
  padding: 0;
  /* Pushes the ribbon to the top of the element for some reason */
  border: solid 1px transparent;
`

const ArticleTemplate = ({ data, pageContext }) => {
  console.log(data, pageContext)
  const node = data.markdownRemark
  const { html, timeToRead } = node
  const { date } = node.fields
  const { title, tags } = node.frontmatter
  return (
    <Layout
      config={{
        ...config,
        title: "",
        description: "",
        keywords: "",
      }}
      header={
        <Header>
          <Ribbon>#{number}</Ribbon>
          <span>Est. {timeToRead} minute read.</span>
          <div>
            {tags.map((tag) => {
              return (
                <Anchor key={tag} to={`/${_.kebabCase(tag)}`} title={tag}>
                  {tag}
                </Anchor>
              )
            })}
          </div>
        </Header>
      }
    >
      <Container>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default ArticleTemplate
