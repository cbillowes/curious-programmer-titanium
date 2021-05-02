import { createGlobalStyle } from "styled-components"
import LightTheme from "../Themes/Light"
import DarkTheme from "../Themes/Dark"

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

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: Raleway, Helvetica, Arial, sans-serif;
    font-size: 14pt;
    font-weight: 300;
    min-height: 100vh;
    max-width: 100%;
    margin: 0;
    text-shadow: 1px 1px 1px ${(props) => getShadow(props, "standard")};
    background-color: ${(props) => getBase(props, "accent")};
    color: ${(props) => getText(props, "standard")};
  }

  *::selection {
    background-color: ${(props) => getBase(props, "primary")};
    color: ${(props) => getText(props, "primary")};
    text-shadow: 1px 1px 1px ${(props) => getShadow(props, "primary")};
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

    text-shadow: 1px 1px 1px ${(props) => getShadow(props, "primary")};
    background-color: ${(props) => getBase(props, "primary")};
    color: ${(props) => getText(props, "primary")};

    &:hover {
      text-shadow: 1px 1px 1px ${(props) => getShadow(props, "secondary")};
      background-color: ${(props) => getBase(props, "secondary")};
      color: ${(props) => getText(props, "secondary")};
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

  p, blockquote, code, pre {
    line-height: 2.5rem;
  }

  code, pre {
    font-family: 'Courier Prime', monospace;
    overflow-x: auto;
  }

  blockquote {
    margin: 0;
    padding-left: 1.5rem;
    border-left: solid 0.5rem ${(props) => getAlternate(props, "primary")};
  }
`

export default GlobalStyles

/*
  HUES:
  standard | primary | secondary | tertiary | neutral
*/

const getTheme = (props) => Themes[props.theme] || {}

const getColor = (props, hue, category) => getTheme(props)[hue][category]

export const getBase = (props, hue) => getColor(props, hue, "base")

export const getAlternate = (props, hue) => getColor(props, hue, "alternate")

export const getShadow = (props, hue) => getColor(props, hue, "shadow")

export const getText = (props, hue) => getColor(props, hue, "text")

export const Themes = {
  dark: DarkTheme,
  light: LightTheme,
}
