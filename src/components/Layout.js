import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeContext, toggleColorMode } from "../context/Theme"
import { MdWbSunny } from "@react-icons/all-files/md/MdWbSunny"
import { MdBrightness2 } from "@react-icons/all-files/md/MdBrightness2"
import Head from "../components/Head"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const Toggler = ({ colorMode, setColorMode }) => {
  const handleThemeToggle = () => {
    const toggled = toggleColorMode(colorMode)
    setColorMode(toggled)
  }

  return (
    <button onClick={handleThemeToggle}>
      <span className="dark-button">
        <MdBrightness2 />
      </span>
      <span className="light-button">
        <MdWbSunny />
      </span>
    </button>
  )
}

Toggler.propTypes = {
  colorMode: PropTypes.string.isRequired,
  setColorMode: PropTypes.func.isRequired,
}

export const Layout = ({ meta, children }) => {
  const { colorMode, setColorMode } = useContext(ThemeContext)
  return (
    <div
      className={`${colorMode} bg-color-1 text-color-1-script m-0 px-0 py-1 min-h-screen`}
    >
      <Head crawl={true} lang="en-US" {...meta} />
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="text-right text-lg bg-color-1 text-color-1-script">
          <div className="mr-4 pt-1">
            <Toggler colorMode={colorMode} setColorMode={setColorMode} />
          </div>
        </div>
        <Navigation layout="fluid" />
      </div>

      <main className="pt-14 bg-default text-default-script">{children}</main>

      <Footer
        toggler={<Toggler colorMode={colorMode} setColorMode={setColorMode} />}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.object.isRequired,
}
