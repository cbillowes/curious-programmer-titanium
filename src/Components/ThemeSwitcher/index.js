import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  Things,
  switchTheme,
  persistTheme,
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

const ThemeSwitcher = ({ theme, toggle }) => {
  const switcheroo = () => {
    const newTheme = switchTheme(theme)
    toggle(newTheme)
    persistTheme(newTheme)
  }

  return (
    <Container theme={theme} onClick={switcheroo}>
      {getIcon(theme, Icons.THEME)}
    </Container>
  )
}

export default ThemeSwitcher

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
}
