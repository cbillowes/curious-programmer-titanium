import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeContext, getToggled } from "../context/Theme"
import { MdWbSunny } from "@react-icons/all-files/md/MdWbSunny"
import { MdBrightness2 } from "@react-icons/all-files/md/MdBrightness2"
import Head from "../components/Head"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const Toggler = ({ theme, setTheme }) => {
  const handleThemeToggle = () => {
    setTheme(getToggled(theme))
  }

  return (
    <button onClick={handleThemeToggle}>
      {theme === "dark" ? <MdBrightness2 /> : <MdWbSunny />}
    </button>
  )
}

Toggler.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
}

const Layout = ({ meta, children }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } bg-color-1 text-color-1-script m-0 px-4 py-1 min-h-screen`}
    >
      <Head {...meta} />
      <div className="text-right mr-4 text-lg">
        <Toggler theme={theme} setTheme={setTheme} />
      </div>

      <Navigation />

      <main className="bg-default text-default-script">
        <div className="max-w-screen-md mx-auto py-16">{children}</div>
      </main>

      <Footer toggler={<Toggler theme={theme} setTheme={setTheme} />} />
    </div>
  )
}

export const LayoutWithoutConstraints = ({ meta, children }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } bg-color-1 text-color-1-script m-0 px-0 py-1 min-h-screen`}
    >
      <Head {...meta} />
      <div className="text-right mr-4 text-lg">
        <Toggler theme={theme} setTheme={setTheme} />
      </div>

      <Navigation layout="fluid" />

      <main className="bg-default text-default-script">{children}</main>

      <Footer toggler={<Toggler theme={theme} setTheme={setTheme} />} />
    </div>
  )
}

LayoutWithoutConstraints.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.object,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.object,
}

export default Layout
