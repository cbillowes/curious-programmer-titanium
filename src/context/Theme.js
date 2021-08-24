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
  const themeOrDefault = theme || DEFAULT
  return themeOrDefault === "light" ? "dark" : "light"
}

const getTheme = () => localStorage.getItem(KEY) || DEFAULT

const saveTheme = (theme) => localStorage.setItem(KEY, theme)

const ThemeContextProvider = ({ children }) => {
  const initialTheme = getTheme()
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    const loadedTheme = getTheme()
    setTheme(loadedTheme)
  }, [])

  useEffect(() => {
    saveTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
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
