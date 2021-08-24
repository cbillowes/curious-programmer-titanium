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

export const LayoutWithoutConstraints = ({ meta, children }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } bg-color-1 text-color-1-script m-0 px-0 py-1 min-h-screen`}
    >
      <Head crawl={true} lang="en-US" {...meta} />
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="text-right text-lg bg-color-1 text-color-1-script">
          <div className="mr-4 pt-1">
            <Toggler theme={theme} setTheme={setTheme} />
          </div>
        </div>
        <Navigation layout="fluid" />
      </div>

      <main className="pt-14 bg-default text-default-script">{children}</main>

      <Footer toggler={<Toggler theme={theme} setTheme={setTheme} />} />
    </div>
  )
}

LayoutWithoutConstraints.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.object.isRequired,
}
