import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import { ThemeContext, toggleColorMode } from "../context/Theme"
import { MdWbSunny } from "@react-icons/all-files/md/MdWbSunny"
import { MdBrightness2 } from "@react-icons/all-files/md/MdBrightness2"
import Head from "../components/Head"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { SearchIcon } from "./Search/icon"
import Search from "./Search"
const searchIndices = [{ name: "Pages", title: "Pages" }]

const Toggler = ({ colorMode, setColorMode }) => {
  const handleThemeToggle = () => {
    const toggled = toggleColorMode(colorMode)
    setColorMode(toggled)
  }

  return (
    <button
      onClick={handleThemeToggle}
      className="hover:text-color-2 hover:animate-wiggle animate"
    >
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

export const Layout = ({ crawl = false, meta, children }) => {
  const { colorMode, setColorMode } = useContext(ThemeContext)
  const [showSearch, toggleSearchMode] = useState(false)
  return (
    <div
      className={`${colorMode} bg-color-1 text-color-1-script m-0 px-0 py-1 min-h-screen`}
      onKeyUp={(e) => {
        if (e.key === "Escape") {
          toggleSearchMode(!showSearch)
        }
      }}
    >
      <Head crawl={crawl} {...meta} />
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="text-right text-lg bg-color-1 text-color-1-script">
          <div className="mr-3 pt-1 inline-block">
            <SearchIcon
              show={showSearch}
              toggle={() => toggleSearchMode(!showSearch)}
            />
          </div>
          <div className="mr-4 pt-1 inline-block">
            <Toggler colorMode={colorMode} setColorMode={setColorMode} />
          </div>
        </div>
        <Navigation layout="fluid" />
      </div>

      <main className="pt-14 bg-default text-default-script">{children}</main>
      {showSearch && (
        <Search
          indices={searchIndices}
          toggle={() => toggleSearchMode(!showSearch)}
        />
      )}

      <Footer
        toggler={<Toggler colorMode={colorMode} setColorMode={setColorMode} />}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  crawl: PropTypes.bool,
  meta: PropTypes.object.isRequired,
}
