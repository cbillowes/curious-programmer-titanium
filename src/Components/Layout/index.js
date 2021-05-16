import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { CookiesProvider, useCookies } from "react-cookie"
import Head from "../Head"
import Navigation from "../Navigation"
import Footer from "../Footer"
import Theme, {
  COOKIE_NAME,
  DEFAULT_THEME,
  KEY,
  NESTED_KEY,
  TOP_LEVEL_KEY,
  bp,
  getAllFromTheme,
  getFromTheme,
  GlobalStyle,
  toggle,
} from "../Theme"

const Wrapper = styled.div`
  background-color: ${(props) =>
    getFromTheme(props, [TOP_LEVEL_KEY.root, NESTED_KEY.page, KEY.base])};
  padding-top: ${bp.space.betweenHeaderAndPage};
`

const Header = styled.div`
  padding-bottom: 0;
`

const FullWidth = styled.div`
  width: 100vw;
`

const Page = styled.main`
  max-width: ${bp.space.readingPane};
  margin: 0 auto;
  padding: 0 3rem;
`

const Switcheroo = styled.button`
  display: inline-block;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.25rem;
  padding: 0.5rem;
  padding-bottom: 0.25rem;
  border-radius: 8px;
  ${(props) =>
    getAllFromTheme(props, [TOP_LEVEL_KEY.switcheroo, NESTED_KEY.default])};

  &:hover {
    ${(props) =>
      getAllFromTheme(props, [TOP_LEVEL_KEY.switcheroo, NESTED_KEY.hover])};
  }
`

const Stickyroo = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1.5rem 2rem;
`

const Layout = ({ header, wideContent, config, children }) => {
  const [cookie, setCookie] = useCookies([COOKIE_NAME])
  const [theme, setTheme] = useState(Theme(cookie.theme || DEFAULT_THEME))
  const { route, title, description, keywords, image, crawl } = config

  const switcher = (
    <Switcheroo
      onClick={() => {
        const toggled = toggle(theme)
        setCookie(COOKIE_NAME, toggled.name, { path: "/" })
        setTheme(toggled)
      }}
    >
      {theme.icon}
    </Switcheroo>
  )

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head
          title={title}
          description={description}
          keywords={keywords}
          image={image}
          crawl={crawl}
        />
        <Navigation route={route} switcher={switcher} />
        <Wrapper>
          <Header>{header}</Header>
          <FullWidth>{wideContent}</FullWidth>
          <Page>{children}</Page>
        </Wrapper>
        <Stickyroo>{switcher}</Stickyroo>
        <Footer switcher={switcher} />
      </ThemeProvider>
    </CookiesProvider>
  )
}

Layout.defaultTypes = {
  wideContent: <Fragment />,
  header: <Fragment />,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.object.isRequired,
  wideContent: PropTypes.node,
  header: PropTypes.node,
  meta: PropTypes.shape({
    crawl: PropTypes.bool,
    description: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.string,
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Layout
