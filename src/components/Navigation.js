import React from "react"

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
  return (
    <div className="bg-accent-1 py-2">
      <div className="max-w-screen-md mx-auto">
        <Logo />
      </div>
    </div>
  )
}

export default Navigation
