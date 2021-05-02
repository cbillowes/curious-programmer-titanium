import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Helmet from "react-helmet"
import Navigation from "../Navigation"
import Footer from "../Footer"
import GlobalStyles, { MAX_WIDTH } from "../GlobalStyles"

const Gap = styled.div`
  padding-top: 92px;
`

const Header = styled.div`
  padding: 3rem;
  padding-bottom: 0;
`

const Page = styled.main`
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
`

const Layout = ({ header, children }) => {
  const [theme, toggleTheme] = useState("light")

  return (
    <Fragment>
      <GlobalStyles theme={theme} />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="//fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Courier+Prime&family=Raleway:ital,wght@0,300;0,600;1,300&family=Zilla+Slab:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navigation theme={theme} />
      <Gap />
      <Header header={header}>{header}</Header>
      <Page>{children}</Page>
      <Footer
        theme={theme}
        switcher={
          <button
            onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
          >
            Toggle Theme
          </button>
        }
      />
    </Fragment>
  )
}

export default Layout

Layout.defaultProps = {
  header: <Fragment />,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
}
