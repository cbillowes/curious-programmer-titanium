import React from "react"
import { ThemeProvider } from "./src/context/Theme"
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
