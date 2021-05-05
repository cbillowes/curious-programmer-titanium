import { createGlobalStyle } from "styled-components"
import Light from "./Light"
import Dark from "./Dark"

/*
  PRIMARY COLORS:

  #f0f0f0 - White
  #d8d8d8 - Neutral
  #181c1f - Black
  #ee8e16 - Orange
  #cf09ae - Pink
  #c6c91c - Green
  #0b7acf - Blue
  #cf0949 - Red
  #f8ba0a - Yellow

*/

/*
  FONTS:

  Open+Sans:wght@300;700
  Courier+Prime
  Raleway:ital,wght@0,300;0,600;1,300
  Zilla+Slab:wght@700
*/

export const MAX_WIDTH = 840

export const SPACE_BETWEEN_HEADER_AND_PAGE = 92

export const Styles = createGlobalStyle`
  html, body {
    font-family: Raleway, Helvetica, Arial, sans-serif;
    font-size: 14pt;
    font-weight: 300;
    min-height: 100vh;
    max-width: 100%;
    margin: 0;
    text-shadow: 1px 1px 1px ${(props) =>
      getShadow(props.theme, Things.STANDARD)};
    background-color: ${(props) => getBase(props.theme, Things.FOOTER)};
    color: ${(props) => getText(props.theme, Things.STANDARD)};
  }

  *::selection {
    background-color: ${(props) => getBase(props.theme, Things.PRIMARY)};
    color: ${(props) => getText(props.theme, Things.PRIMARY)};
    text-shadow: 1px 1px 1px ${(props) =>
      getShadow(props.theme, Things.PRIMARY)};
  }

  b, strong {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: 0 0.15rem;
    font-weight: 600;
    transition: background-color ease-in 0.5s;
    border-radius: 4px;

    text-shadow: 1px 1px 1px ${(props) =>
      getShadow(props.theme, Things.PRIMARY)};
    background-color: ${(props) => getBase(props.theme, Things.PRIMARY)};
    color: ${(props) => getText(props.theme, Things.PRIMARY)};

    &:hover {
      text-shadow: 1px 1px 1px ${(props) =>
        getShadow(props.theme, Things.SECONDARY)};
      background-color: ${(props) => getBase(props.theme, Things.SECONDARY)};
      color: ${(props) => getText(props.theme, Things.SECONDARY)};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Zilla Slab", Georgia, 'Times New Roman', Times, serif;
    font-weight: 800;
    margin-bottom: 0;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2.25rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.75rem;
  }

  h6 {
    font-size: 1.25rem;
  }

  p, blockquote, code, pre, li {
    line-height: 2.5rem;
  }

  code, pre {
    font-family: 'Courier Prime', monospace;
    overflow-x: auto;
  }

  blockquote {
    margin: 0;
    padding-left: 1.5rem;
    border-left: solid 0.5rem ${(props) =>
      getAlternate(props.theme, Things.PRIMARY)};
  }

  ul, ol {
    padding-left: 0.25rem;

    li {
      padding-left: 0.25rem;
    }
  }
`

/*
  HUES:
  standard | primary | secondary | tertiary | neutral
*/

const Themes = {
  default: Dark,
  dark: Dark,
  light: Light,
}

const getTheme = (theme) => Themes[theme] || Themes["default"]

const getColor = (theme, thing, category) => {
  if (
    getTheme(theme) &&
    getTheme(theme)[thing] &&
    getTheme(theme)[thing][category]
  ) {
    return getTheme(theme)[thing][category]
  }

  throw Error(
    `Could not get "${theme}" theme color for "${thing}": "${category}".`,
  )
}

export const getBase = (theme, thing) => getColor(theme, thing, "base")

export const getAlternate = (theme, thing) =>
  getColor(theme, thing, "alternate")

export const getShadow = (theme, thing) => getColor(theme, thing, "shadow")

export const getText = (theme, thing) => getColor(theme, thing, "text")

export const getIcon = (theme, icon) => getTheme(theme)["icon"][icon]

export const getToggledTheme = (theme) => (theme === "dark" ? "light" : "dark")

export const THEME_COOKIE_NAME = "theme"

export const Icons = {
  THEME: "theme",
}

export const Things = {
  STANDARD: "standard",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",

  NAVIGATION: "navigation",
  CARD: "card",
  CONNECT: "connect",
  FOOTER: "footer",
  MENU: "menu",
}
