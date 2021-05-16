import { Style } from "./common/globalStyle"
import Breakpoints from "./common/breakpoints"
import Dark from "./themes/dark"
import Light from "./themes/light"

export const GlobalStyle = Style

export const bp = Breakpoints

export const COOKIE_NAME = "theme"

export const DEFAULT_THEME = "light"

export const TOP_LEVEL_KEY = {
  palette: "palette",
  root: "root",
  link: "link",
  bland: "bland",
  navigation: "navigation",
  menuItem: "menuItem",
  menuIcon: "menuIcon",
  icon: "icon",
  pulse: "pulse",
  card: "card",
  switcheroo: "switcheroo",
  page: "page",
}

export const NESTED_KEY = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  forth: "forth",
  fifth: "fifth",

  body: "body",
  page: "page",
  footer: "footer",
  code: "code",
  hero: "hero",

  default: "default",
  hover: "hover",
  active: "active",
  contrast: "contrast",

  bar: "bar",
  strip: "strip",
  sidebar: "sidebar",
  hamburger: "hamburger",
  logo: "logo",

  shade1: "shade1",
  shade2: "shade2",
  shade3: "shade3",

  about: "about",
}

export const KEY = {
  base: "base",
  color: "color",
  shadow: "shadow",
}

export const toggle = (theme) => {
  return Theme(theme.name === "light" ? "dark" : "light")
}

export const getFromTheme = (props, keys) => {
  const top = keys[0]
  const nested = keys[1]
  const key = keys[2]
  try {
    return props.theme.color[top][nested][key]
  } catch (e) {
    throw `Could not get [${top}, ${nested}, ${key}] from theme: ${e}`
  }
}

export const getAllFromTheme = (props, keys) => {
  const top = keys[0]
  const nested = keys[1]
  try {
    const items = props.theme.color[top][nested]
    return {
      backgroundColor: items[KEY.base],
      color: items[KEY.color],
      textShadow: `1px 1px 1px ${items[KEY.shadow]}`,
    }
  } catch (e) {
    throw `Could not get [${top}, ${nested}] from theme: ${e}`
  }
}

const Theme = (theme) => {
  return {
    ...Breakpoints,
    ...(theme === "light" ? Light : Dark),
  }
}

export default Theme
