import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const supportsDarkMode =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

const getDefaultTheme = () => {
  return supportsDarkMode ? "dark" : "light"
}

const getTheme = () => {
  return (
    (typeof localStorage !== "undefined" && localStorage.getItem("theme")) ||
    getDefaultTheme()
  )
}

const saveTheme = (theme) => {
  typeof localStorage !== "undefined" && localStorage.setItem("theme", theme)
}

const defaultState = {
  theme: getTheme() || getDefaultTheme(),
  toggle: () => {},
}

export const isDark = (theme) => theme === "dark"

export const ThemeContext = React.createContext(defaultState)

export const ThemeProvider = ({ children }) => {
  console.log(getDefaultTheme())
  const currentTheme = getTheme()
  const [_, setTheme] = useState(currentTheme)

  const toggle = () => {
    const currentTheme = getTheme()
    const toggledTheme = currentTheme === "light" ? "dark" : "light"
    saveTheme(toggledTheme)
    return toggledTheme
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        toggle: () => {
          const theme = toggle()
          setTheme(theme)
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
