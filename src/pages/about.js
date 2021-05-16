import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Hero from "../components/About/Hero"
import config from "../config/pages"
import Slogan from "../components/About/Slogan"
import Featured from "../components/About/Featured"
import Content from "../components/About/Content"
import { BottomSeparator, TopSeparator } from "../components/About/Separator"

const Container = styled.div``

const AboutPage = () => {
  return (
    <Layout
      config={{ ...config.about }}
      header={<Hero />}
      wideContent={
        <Container>
          <Slogan />
          <Featured />
          <TopSeparator />
          <Content />
          <BottomSeparator />
        </Container>
      }
    />
  )
}

export default AboutPage
