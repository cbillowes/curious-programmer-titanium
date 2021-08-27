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

const SetConsoleEggScript = () => {
  const javascript = `
(function() {
  // https://stackoverflow.com/questions/36885562/google-chrome-console-print-image
  console.image = function(url, size = 100) {
    var image = new Image();
    image.onload = function() {
      var style = [
        'font-size: 1px;',
        'padding: ' + this.height/100*size + 'px ' + this.width/100*size + 'px;',
        'background: url('+ url +') no-repeat;',
        'background-size: contain;',
      ].join(' ');
      console.log('%c ', style);
      console.log('Be curious, always.');
    };
    image.src = url;
  };
  console.image("https://curiousprogrammer.dev/static/webps/all-the-things.webp", 25);
})()
`
  return <script dangerouslySetInnerHTML={{ __html: javascript }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(
    <>
      <SetColorModeScript />
      <SetConsoleEggScript />
    </>,
  )
}
