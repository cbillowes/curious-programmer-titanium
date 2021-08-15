import React, { useState } from "react"
import PropTypes from "prop-types"
import Hamburger from "./Hamburger"

const Logo = () => {
  return (
    <div className="text-2xl -mt-1">
      <span className="mr-2">{`{`}</span>
      <span className="mr-2">curious</span>
      <span className="font-bold">programmer</span>
      <span className="ml-2">{`}`}</span>
    </div>
  )
}

const Navigation = ({ layout }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <div className="bg-color-2 text-color-2-script py-2 px-4">
      <div
        className={`flex justify-between items-center ${
          layout === "fluid" ? "" : "max-w-screen-md mx-auto w-full"
        }`}
      >
        <Logo />
        <Hamburger isOpen={isMenuOpen} toggle={toggleMenu} />
      </div>
    </div>
  )
}

Navigation.propTypes = {
  layout: PropTypes.string,
}

export default Navigation
