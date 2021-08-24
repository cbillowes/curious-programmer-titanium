import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const KEY = "theme"
const DEFAULT =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"

export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {},
})

export const getToggled = (theme) => {
  return (theme || DEFAULT) === "light" ? "dark" : "light"
}

const ThemeContextProvider = ({ children }) => {
  const initialTheme = localStorage.getItem(KEY) || DEFAULT
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem(KEY) || DEFAULT
      return theme
    }
    setTheme(loadTheme())
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContextProvider
