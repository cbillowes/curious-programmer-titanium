import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"
import { CookiesProvider, useCookies } from "react-cookie"
import { getToggledTheme, THEME_COOKIE_NAME } from "../components/Themes"
import Layout from "../components/Layout"
import Articles from "../components/Articles"

export const query = graphql`
  query LandingPageQuery {
    allMarkdownRemark(
      limit: 10
      filter: { fields: { slug: { nin: "/blog/example/" } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 1000, format: HTML)
          fields {
            slug
            date
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

const Container = styled.div`
  padding: 2rem;
`

const IndexPage = ({ data }) => {
  const [cookie, setCookie] = useCookies([THEME_COOKIE_NAME])
  const theme = cookie.theme
  const edges = data.allMarkdownRemark.edges

  return (
    <CookiesProvider>
      <Layout
        title="Home"
        toggleTheme={(theme) => getToggledTheme(theme)}
        themeCookieSetter={setCookie}
        theme={theme}
      >
        <Container>
          <Articles edges={edges} limit={50} theme={theme} />
        </Container>
      </Layout>
    </CookiesProvider>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage
