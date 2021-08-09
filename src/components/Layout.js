import React, { useContext } from "react"
import PropTypes from "prop-types"
import Toggle from "react-toggle"
import { ThemeContext, getToggled } from "../context/Theme"
import Head from "../components/Head"

const Layout = ({ meta, children }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeToggle = () => {
    setTheme(getToggled(theme))
  }

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } bg-primary text-main-text text-center transition-all duration-300 m-0 px-0 py-5 min-h-screen`}
    >
      <Head {...meta} />

      <Toggle
        id="theme-toggle"
        checked={theme === "light" ? true : false}
        onChange={handleThemeToggle}
        icons={{
          checked: <div></div>,
          unchecked: <div></div>,
        }}
      />
      <label htmlFor="theme-toggle" className="text-accent">
        Theme toggler
      </label>
      <main>{children}</main>
      <footer className="text-secondary-text">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.object,
}

export default Layout
