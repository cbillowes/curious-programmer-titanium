import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navigation from "../Navigation"
import Footer from "../Footer"
import Head from "../Head"
import ThemeSwitcher from "../ThemeSwitcher"
import {
  SPACE_BETWEEN_HEADER_AND_PAGE,
  MAX_WIDTH,
  Styles,
  Things,
  getBase,
} from "../Themes"

const Header = styled.div`
  padding-bottom: 0;
`

const Wrapper = styled.div`
  background-color: ${(props) => getBase(props.theme, Things.STANDARD)};
  padding-top: ${SPACE_BETWEEN_HEADER_AND_PAGE}px;
`

const Page = styled.main`
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
`

const Layout = ({
  title,
  description,
  image,
  header,
  children,
  theme,
  themeCookieSetter,
  toggleTheme,
}) => {
  return (
    <Fragment>
      <Head title={title} description={description} image={image} />
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
        <Page>{children}</Page>
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
  header: <Fragment />,
}

Layout.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  header: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  themeCookieSetter: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}
