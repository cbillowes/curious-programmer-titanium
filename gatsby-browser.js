import "./src/styles/global.css"
import React from "react"
import { ThemeProvider } from "./src/context/Theme"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
