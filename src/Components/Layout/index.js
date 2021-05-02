import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Helmet from "react-helmet"
import Navigation from "../Navigation"
import Footer from "../Footer"
import { MdBrightness2 } from "@react-icons/all-files/md/MdBrightness2"
import { MdWbSunny } from "@react-icons/all-files/md/MdWbSunny"
import GlobalStyles, { MAX_WIDTH, getBase, getText } from "../GlobalStyles"

const Header = styled.div`
  padding: 3rem;
  padding-bottom: 0;
`

const Wrapper = styled.div`
  background-color: ${(props) => getBase(props, "standard")};
  padding-top: 92px;
  padding-bottom: 3rem;
`

const Page = styled.main`
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
`

const Switcher = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.25rem;
  color: ${(props) => getText(props, "accent")};

  &:hover {
    color: ${(props) => getBase(props, "primary")};
  }
`

const DarkThemeIcon = styled(MdBrightness2)`
  display: ${(props) => (props.visible ? "inline-block" : "none")};
`

const LightThemeIcon = styled(MdWbSunny)`
  display: ${(props) => (props.visible ? "inline-block" : "none")};
`

const Layout = ({ header, children }) => {
  const [theme, toggleTheme] = useState("light")

  return (
    <Fragment>
      <GlobalStyles theme={theme} />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="//fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&family=Courier+Prime&family=Raleway:ital,wght@0,300;0,600;1,300&family=Zilla+Slab:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navigation theme={theme} />
      <Wrapper theme={theme}>
        <Header header={header}>{header}</Header>
        <Page>{children}</Page>
      </Wrapper>
      <Footer
        theme={theme}
        switcher={
          <Switcher
            theme={theme}
            onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
          >
            <LightThemeIcon visible={theme === "dark"} />
            <DarkThemeIcon visible={theme === "light"} />
          </Switcher>
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
