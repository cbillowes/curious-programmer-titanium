import React, { Fragment, useState } from "react"
import { useCookies } from "react-cookie"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navigation from "../Navigation"
import Footer from "../Footer"
import Head from "../Head"
import ThemeSwitcher from "../ThemeSwitcher"
import GlobalStyles, {
  SPACE_BETWEEN_HEADER_AND_PAGE,
  MAX_WIDTH,
  getBase,
} from "../GlobalStyles"

const Header = styled.div`
  padding-bottom: 0;
`

const Wrapper = styled.div`
  background-color: ${(props) => getBase(props, "standard")};
  padding-top: ${SPACE_BETWEEN_HEADER_AND_PAGE}px;
  padding-bottom: 3rem;
`

const Page = styled.main`
  max-width: ${MAX_WIDTH}px;
  padding: 3rem;
  margin: 0 auto;
`

const Layout = ({ metadata, title, description, image, header, children }) => {
  const [cookie] = useCookies(["theme"])
  const [theme, toggleTheme] = useState(cookie.theme || "light")

  return (
    <Fragment>
      <Head
        {...metadata}
        title={title}
        description={description}
        image={image}
      />

      <GlobalStyles theme={theme} />
      <Navigation
        theme={theme}
        switcher={<ThemeSwitcher theme={theme} toggle={toggleTheme} />}
      />
      <Wrapper theme={theme}>
        <Header header={header}>{header}</Header>
        <Page>{children}</Page>
      </Wrapper>
      <Footer
        theme={theme}
        switcher={<ThemeSwitcher theme={theme} toggle={toggleTheme} />}
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
  description: PropTypes.string.isRequired,
  header: PropTypes.node,
  image: PropTypes.string.isRequired,
  metadata: PropTypes.shape({
    themeColor: PropTypes.object.isRequired,
    siteTitle: PropTypes.object.isRequired,
    keywords: PropTypes.object.isRequired,
    siteKeywords: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    siteTitleShort: PropTypes.object.isRequired,
    siteDescription: PropTypes.object.isRequired,
    siteUrl: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    social: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    canonical: PropTypes.object.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
}
