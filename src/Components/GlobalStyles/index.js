import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('//fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:ital,wght@0,300;0,600;1,300;1,600&family=Zilla+Slab:wght@600&display=swap');

  html, body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14pt;
    font-weight: 300;
    min-height: 100vh;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Crimson Text", Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
  }

  code, pre {
    font-family: 'Courier Prime', monospace;
  }
`

export default GlobalStyles
