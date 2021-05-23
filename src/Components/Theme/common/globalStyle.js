import { createGlobalStyle } from "styled-components"
import bp from "./breakpoints"
import {
  getFromTheme,
  getAllFromTheme,
  TOP_LEVEL_KEY,
  NESTED_KEY,
  KEY,
} from "../index"

require("../prismjs/material-dark.scss")
require("../prismjs/material-light.scss")

/*
  FONTS:
  Open+Sans:wght@300;700
  Courier+Prime
  Raleway:ital,wght@0,300;0,600;1,300
  Zilla+Slab:wght@700
*/

export const Style = createGlobalStyle`
  html, body {
    font-family: Raleway, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 14pt;
    min-height: 100vh;
    max-width: 100%;
    margin: 0;
    ${(props) => getAllFromTheme(props, [TOP_LEVEL_KEY.root, NESTED_KEY.body])};
  }

  *::selection {
    ${(props) =>
      getAllFromTheme(props, [TOP_LEVEL_KEY.palette, NESTED_KEY.primary])};
  }

  a {
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: 0 0.15rem;
    font-weight: 200;
    transition: all ease-in 0.5s;
    border-radius: 4px;
    ${(props) =>
      getAllFromTheme(props, [TOP_LEVEL_KEY.link, NESTED_KEY.default])};

    &:hover {
      ${(props) =>
        getAllFromTheme(props, [TOP_LEVEL_KEY.link, NESTED_KEY.hover])};
    }

    &.bland {
      font-weight: bold;
      padding: 0;
      margin: 0;

      ${(props) =>
        getAllFromTheme(props, [TOP_LEVEL_KEY.bland, NESTED_KEY.default])};

      &:hover {
        ${(props) =>
          getAllFromTheme(props, [TOP_LEVEL_KEY.bland, NESTED_KEY.hover])};
      }
    }
  }

  b, strong {
    font-weight: 600;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Zilla Slab", Georgia, 'Times New Roman', Times, serif;
    font-weight: 800;
    margin: 0;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
    line-height: 150%;
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

  div, p, blockquote, code, pre, li {
    line-height: 2.5rem;
  }

  code, pre {
    font-family: 'Courier Prime', monospace;
    overflow-x: auto;
    padding: 0.3rem 0.4rem;
    border-radius: 5px;
    ${(props) => getAllFromTheme(props, [TOP_LEVEL_KEY.root, NESTED_KEY.code])};
  }

  blockquote {
    margin: 0;
    padding-left: 1.5rem;
    border-left: solid 0.5rem ${(props) =>
      getFromTheme(props, [
        TOP_LEVEL_KEY.palette,
        NESTED_KEY.tertiary,
        KEY.base,
      ])};
  }

  ul, ol {
    padding-left: 0.25rem;

    li {
      padding-left: 0.25rem;
      line-height: 2.5rem;
    }
  }

  img {
    max-width: 100%;
  }

  ${(props) => generateStylesFromColors(props)};

  /**
    gatsby-remark-code-titles
  */
  .gatsby-remark-code-title {
    ${(props) =>
      getAllFromTheme(props, [TOP_LEVEL_KEY.palette, NESTED_KEY.primary])};
    display: inline-block;
    padding: 0 1rem;
  }

  /**
    gatsby-plugin-twitter
  */
  .twitter-tweet {
    margin: 0 auto;
  }

  /**
    gatsby-remark-embed-gist
  */
  .gist {
    text-shadow: none;
  }

  /**
    gatsby-remark-responsive-iframe
  */
  .video-wrapper {
    margin: 0 auto;
    width: ${bp.space.readingPane};

    iframe {
      width: 100%;
    }
  }

  /**
    gatsby-remark-interactive-gifs
  */
  .interactive-gif {}

  /* Responsive flicker-less display */
  .interactive-gif .embedded {
    position: relative;
    width: 100%;
    height: auto;
  }

  .interactive-gif .loading,
  .interactive-gif .still-container,
  .interactive-gif .gif-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .interactive-gif .still,
  .interactive-gif .gif {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  /* Loading indicator */
  .interactive-gif .loading .indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    filter: contrast(0.5);
  }

  /* Play button */
  .interactive-gif .still-container .play {
    cursor: pointer;
    filter: grayscale(100%);
    width: 20%;
    position: absolute;
    opacity: 0.9;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  /* Text underneath the gif */
  .interactive-gif .caption {
    font-size: 90%;
    font-style: italic;
  }

  /* Image displayed when the gif cannot be found */
  .interactive-gif .placeholder {
    filter: grayscale(100%);
    text-align: center;
  }

  .interactive-gif .placeholder img {
    width: 200px;
  }
`

const generateStylesFromColors = (props) => {
  const colorInTheme = props.theme.color
  return Object.keys(colorInTheme)
    .map((key) => {
      return generateCssStyles(colorInTheme[key], key)
    })
    .filter((value) => value)
    .join("")
}

const generateCssStyles = (prop, id) => {
  return [
    generatePureCss(prop, id, "base", "background-color"),
    generatePureCss(prop, id, "color", "color"),
    generatePureCss(prop, id, "shadow", "text-shadow"),
  ].join("")
}

const getPropertyValue = (key, value) => {
  switch (key) {
    case "shadow":
      return value ? `1px 1px 1px ${value}` : ``
    default:
      return value
  }
}

const generatePureCss = (prop, id, key, css) => {
  return Object.keys(prop)
    .map((color) => {
      const value = getPropertyValue(key, prop[color][key])
      return value
        ? `.-${id ? id : ""}-${color}-${key}-${css} {${css}: ${value}}`
        : ``
    })
    .filter((color) => color)
    .join(";")
}
