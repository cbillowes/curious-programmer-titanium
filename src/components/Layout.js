import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeContext, getToggled } from "../context/Theme"
import { MdWbSunny } from "@react-icons/all-files/md/MdWbSunny"
import { MdBrightness2 } from "@react-icons/all-files/md/MdBrightness2"
import Head from "../components/Head"
import Footer from "../components/Footer"

const Toggler = ({ theme, setTheme }) => {
  const handleThemeToggle = () => {
    setTheme(getToggled(theme))
  }

  return (
    <button onClick={handleThemeToggle}>
      {theme === "light" ? <MdBrightness2 /> : <MdWbSunny />}
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
      } bg-accent text-accent-script m-0 px-0 py-5 min-h-screen`}
    >
      <Head {...meta} />
      <Toggler theme={theme} setTheme={setTheme} />

      <main className="bg-primary text-primary-script">
        <div className="max-w-screen-md mx-auto py-16">{children}</div>
      </main>

      <Footer toggler={<Toggler theme={theme} setTheme={setTheme} />} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.object,
}

export default Layout
