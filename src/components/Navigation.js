import React, { useState } from "react"
import Hamburger from "./Hamburger"

const Logo = () => {
  return (
    <div className="text-2xl text-white">
      <span className="mr-2">{`{`}</span>
      <span className="mr-2">curious</span>
      <span className="font-bold">programmer</span>
      <span className="ml-2">{`}`}</span>
    </div>
  )
}

const Navigation = () => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <div className="bg-accent-1 py-2">
      <div className="max-w-screen-md mx-auto flex justify-between items-center">
        <Logo />
        <Hamburger isOpen={isMenuOpen} toggle={toggleMenu} />
      </div>
    </div>
  )
}

export default Navigation
