import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navigation from "../Navigation"
import Footer from "../Footer"
import Head from "../Head"
import ThemeSwitcher from "../ThemeSwitcher"
import ThemeSwitcherIcon from "../ThemeSwitcher/icon"
import {
  Styles,
  Things,
  getBase,
  MAX_SECTION_WIDTH,
  SPACE_BETWEEN_HEADER_AND_PAGE,
} from "../Themes"

const Header = styled.div`
  padding-bottom: 0;
`

const Wrapper = styled.div`
  background-color: ${(props) => getBase(props.theme, Things.STANDARD)};
  padding-top: ${SPACE_BETWEEN_HEADER_AND_PAGE}px;
`

const Page = styled.main`
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto;
  padding: 0 3rem;
`

const Layout = ({
  crawl,
  title,
  description,
  keywords,
  image,
  header,
  maxWidth,
  children,
  theme,
  themeCookieSetter,
  toggleTheme,
}) => {
  return (
    <Fragment>
      <Head
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        crawl={crawl}
      />
      <Styles theme={theme} />
      <Navigation
        theme={theme}
        switcher={
          <ThemeSwitcher
            theme={theme}
            toggle={toggleTheme}
            setCookie={themeCookieSetter}
          />
        }
      />
      <Wrapper theme={theme}>
        <Header>{header}</Header>
        <Page maxWidth={maxWidth}>{children}</Page>
        <ThemeSwitcherIcon
          theme={theme}
          switcher={
            <ThemeSwitcher
              theme={theme}
              toggle={toggleTheme}
              setCookie={themeCookieSetter}
            />
          }
        />
      </Wrapper>
      <Footer
        theme={theme}
        switcher={
          <ThemeSwitcher
            theme={theme}
            toggle={toggleTheme}
            setCookie={themeCookieSetter}
          />
        }
      />
    </Fragment>
  )
}

export default Layout

Layout.defaultProps = {
  children: <Fragment />,
  crawl: false,
  description: "",
  header: <Fragment />,
  image: "",
  keywords: "",
  maxWidth: MAX_SECTION_WIDTH,
}

Layout.propTypes = {
  children: PropTypes.node,
  crawl: PropTypes.bool,
  description: PropTypes.string,
  header: PropTypes.node,
  image: PropTypes.string,
  keywords: PropTypes.string,
  maxWidth: PropTypes.string,
  title: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  themeCookieSetter: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}
