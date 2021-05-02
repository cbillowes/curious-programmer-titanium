import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MdBrightness2 } from "@react-icons/all-files/md/MdBrightness2"
import { MdWbSunny } from "@react-icons/all-files/md/MdWbSunny"
import { getBase, getText } from "../GlobalStyles"

const Container = styled.div`
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.25rem;
  color: ${(props) => getText(props, "footer")};

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

const ThemeSwitcher = ({ theme, toggle }) => (
  <Container
    theme={theme}
    onClick={() => toggle(theme === "light" ? "dark" : "light")}
  >
    <LightThemeIcon visible={theme === "dark"} />
    <DarkThemeIcon visible={theme === "light"} />
  </Container>
)

export default ThemeSwitcher

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
}
