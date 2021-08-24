import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const KEY = "theme"
const DEFAULT = "light"

const setTheme = (theme) => {
  localStorage.setItem(KEY, theme)
}

export const ThemeContext = React.createContext({
  theme: DEFAULT,
  setTheme: () => setTheme(DEFAULT),
})

export const getToggled = (theme) => {
  return theme === "light" ? "dark" : "light"
}

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT)

  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem(KEY)
      return theme || DEFAULT
    }
    setTheme(loadTheme())
  }, [theme])

  useEffect(() => {
    setTheme(theme)
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
