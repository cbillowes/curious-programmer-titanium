// TODO: do this "tag slug identifier" thing in a central place
// https://trello.com/c/hNcLLGKR
import _ from "lodash"
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import Anchor from "../components/Anchor"
import Ribbon from "../components/Ribbon"
import ArticleNavigationSimple from "../components/ArticleNavigationSimple"
import ArticleNavigationDetailed from "../components/ArticleNavigationDetailed"
import config from "../config/pages"

import { getAllFromTheme, NESTED_KEY, TOP_LEVEL_KEY } from "../components/Theme"

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

const Title = styled.h1`
  width: 75%;
  margin: 0 auto;
  margin-top: 2rem;
`

const Article = styled.article`
  a {
    font-weight: bold;
    padding: 0;
    margin: 0;
    transition: all ease-in 0.25s;

    ${(props) =>
      getAllFromTheme(props, TOP_LEVEL_KEY.bland, NESTED_KEY.default)};

    &:hover {
      ${(props) =>
        getAllFromTheme(props, TOP_LEVEL_KEY.bland, NESTED_KEY.hover)};
    }
  }
`

const getArticleDataForNavigation = (article) => {
  return {
    title: article.frontmatter.title,
    slug: article.fields.slug,
    excerpt: article.excerpt,
  }
}

const ArticleTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext
  const node = data.markdownRemark
  const { html, excerpt, timeToRead } = node
  const { date, number } = node.fields
  const { title, tags } = node.frontmatter
  return (
    <Layout
      config={{
        ...config,
        title,
        description: excerpt,
        keywords: "",
      }}
      header={
        <Header>
          <Ribbon>#{number}</Ribbon>
          <ArticleNavigationSimple
            previous={getArticleDataForNavigation(previous)}
            next={getArticleDataForNavigation(next)}
          />
          <Title>{title}</Title>
          <span>
            posted on {date} by{" "}
            <Anchor
              to="https://clarice.bouwer.dev"
              title="Clarice Bouwer"
              className="bland"
            >
              Clarice Bouwer
            </Anchor>
            .
          </span>{" "}
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
        <Article dangerouslySetInnerHTML={{ __html: html }} />
        <ArticleNavigationDetailed
          previous={getArticleDataForNavigation(previous)}
          next={getArticleDataForNavigation(next)}
        />
      </Container>
    </Layout>
  )
}

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default ArticleTemplate
