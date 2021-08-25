import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const prefersDark = () => {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
}

const get = () => {
  return (typeof window.localStorage !== "undefined" &&
    window.localStorage.getItem("theme")) ||
    prefersDark()
    ? "dark"
    : "light"
}

const store = (theme) => {
  typeof window.localStorage !== "undefined" &&
    window.localStorage.setItem("theme", theme)
}

export const isDark = (theme) => {
  return theme === "dark"
}

export const toggle = (theme) => {
  return isDark(theme) ? "light" : "dark"
}

export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
  const initialTheme = get()
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    const loadedTheme = get()
    setTheme(loadedTheme)
  }, [])

  useEffect(() => {
    store(theme)
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

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
