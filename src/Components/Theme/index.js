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
  neutral: "neutral",

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

export const getFromTheme = (props, topLevelKey, nestedKey, key) => {
  try {
    return props.theme.color[topLevelKey][nestedKey][key]
  } catch (e) {
    throw `Could not get [${topLevelKey}, ${nestedKey}, ${key}] from theme: ${e} (color: ${props.theme.color})`
  }
}

export const getAllFromTheme = (props, topLevelKey, nestedKey) => {
  try {
    const items = props.theme.color[topLevelKey][nestedKey]
    return {
      backgroundColor: items[KEY.base],
      color: items[KEY.color],
      textShadow: `1px 1px 1px ${items[KEY.shadow]}`,
    }
  } catch (e) {
    throw `Could not get [${topLevelKey}, ${nestedKey}] from theme: ${e} (color: ${props.theme.color})`
  }
}

const Theme = (theme) => {
  return {
    ...Breakpoints,
    ...(theme === "light" ? Light : Dark),
  }
}

export default Theme
