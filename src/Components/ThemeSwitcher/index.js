import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  THEME_COOKIE_NAME,
  Things,
  getBase,
  getText,
  getIcon,
  Icons,
} from "../Themes"

const Container = styled.button`
  display: inline-block;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.25rem;
  color: ${(props) => getText(props.theme, Things.FOOTER)};

  &:hover {
    color: ${(props) => getBase(props.theme, Things.PRIMARY)};
  }
`

const switcheroo = (toggle, theme, setCookie) => {
  const toggledTheme = toggle(theme)
  setCookie(THEME_COOKIE_NAME, toggledTheme, { path: "/" })
}

const ThemeSwitcher = ({ theme, setCookie, toggle }) => {
  return (
    <Container
      theme={theme}
      onClick={() => switcheroo(toggle, theme, setCookie)}
    >
      {getIcon(theme, Icons.THEME)}
    </Container>
  )
}

export default ThemeSwitcher

ThemeSwitcher.propTypes = {
  setCookie: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
}
