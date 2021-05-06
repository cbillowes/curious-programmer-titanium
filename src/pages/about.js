import React from "react"
import { CookiesProvider, useCookies } from "react-cookie"
import { THEME_COOKIE_NAME, getToggledTheme } from "../Components/Themes"
import Layout from "../Components/Layout"
import Header from "../Components/Headers/about"

const AboutPage = () => {
  const [cookie, setCookie] = useCookies([THEME_COOKIE_NAME])
  const theme = cookie.theme

  return (
    <CookiesProvider>
      <Layout
        title="About"
        description="My name is Clarice Bouwer and I love writing software."
        author={{
          name: "Clarice Bouwer",
          url: "https://clarice.bouwer.dev",
        }}
        image="about/profile.jpg"
        toggleTheme={(theme) => getToggledTheme(theme)}
        themeCookieSetter={setCookie}
        theme={theme}
        header={<Header theme={theme} />}
      />
    </CookiesProvider>
  )
}

export default AboutPage
