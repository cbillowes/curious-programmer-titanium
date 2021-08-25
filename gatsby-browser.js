import "./src/styles/global.css"
import "./src/styles/print.scss"
import React from "react"
import { ThemeProvider } from "./src/context/Theme"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
