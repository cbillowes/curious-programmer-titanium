/* eslint-disable react/no-danger */
/* eslint-disable react/react-in-jsx-scope */
// https://www.joshwcomeau.com/react/dark-mode/

import React from "react"

const SetColorModeScript = () => {
  const javascript = `
(function () {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem("theme")
    const hasPreference = typeof preference === "string"
    if (hasPreference) return preference

    const mediaPreference = window.matchMedia("(prefers-color-scheme: dark)")
    const hasMediaPreference = typeof mediaPreference.matches === "boolean"
    if (hasMediaPreference) return mediaPreference.matches ? "dark" : "light"

    return "light"
  }

  const colorMode = getInitialColorMode()
  const root = document.documentElement
  root.style.setProperty("--initial-color-mode", colorMode)
  root.classList = colorMode
})()
`
  return <script dangerouslySetInnerHTML={{ __html: javascript }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<SetColorModeScript />)
}
