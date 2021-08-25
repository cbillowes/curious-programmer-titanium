import "./src/styles/global.css"
import React from "react"
import ThemeContextProvider from "./src/context/Theme"

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>
}
