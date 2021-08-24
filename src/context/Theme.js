import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const KEY = "theme"
const DEFAULT = "light"

export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {},
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
