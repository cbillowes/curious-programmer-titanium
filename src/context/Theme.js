import React, { useState, useEffect, createContext } from "react"
import PropTypes from "prop-types"

export const toggleColorMode = (colorMode) => {
  return colorMode === "dark" ? "light" : "dark"
}

export const ThemeContext = createContext({
  colorMode: "",
  setColorMode: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined)

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode",
    )
    rawSetColorMode(initialColorValue)
    localStorage.setItem("color-mode", initialColorValue)
  }, [])

  const setColorMode = (newValue) => {
    const root = window.document.documentElement
    rawSetColorMode(newValue)
    localStorage.setItem("color-mode", newValue)
    root.classList = newValue
  }

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
