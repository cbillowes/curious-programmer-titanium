import React from "react"
import { CookiesProvider, useCookies } from "react-cookie"
import { THEME_COOKIE_NAME, getToggledTheme } from "../components/Themes"
import Layout from "../components/Layout"
import Header from "../components/About/Header"
import profile from "../components/About/profile.jpg"

const AboutPage = () => {
  const [cookie, setCookie] = useCookies([THEME_COOKIE_NAME])
  const theme = cookie.theme

  return (
    <CookiesProvider>
      <Layout
        route="about"
        title="About"
        description="My name is Clarice Bouwer and I love writing software."
        author={{
          name: "Clarice Bouwer",
          url: "https://clarice.bouwer.dev",
        }}
        image={profile}
        toggleTheme={(theme) => getToggledTheme(theme)}
        themeCookieSetter={setCookie}
        theme={theme}
        header={<Header theme={theme} />}
      />
    </CookiesProvider>
  )
}

export default AboutPage
