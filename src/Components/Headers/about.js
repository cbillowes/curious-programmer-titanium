import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite"
import Anchor from "../Anchor"

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Overlay = styled.div`
  background-color: black;
  opacity: 0.6;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Container = styled.div`
  background-color: #303030;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Greetings = styled.div`
  position: absolute;
  right: 5rem;
  top: 2rem;
  max-width: 550px;
  padding-left: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    text-align: right;
    color: #ffffff;
    text-shadow: 1px 1px 5px #000000;
    margin-bottom: 0;
  }

  p {
    font-weight: 100;
    font-size: 1.25rem;
    line-height: 225%;
    text-align: right;
    color: #ffffff;
    text-shadow: 1px 1px 2px #000000;
  }

  div {
    font-size: 4rem;
    margin-top: 10%;
  }
`

const Contact = styled.div`
  position: absolute;
  right: 5rem;
  bottom: 10rem;
  max-width: 550px;
  padding-left: 3rem;
  font-size: 2.5rem;

  a {
    background-color: transparent;
    color: #ffffff99;

    &:hover {
      color: #00000099;
    }
  }
`

const Header = () => (
  <Wrapper>
    <Container>
      <StaticImage src="../images/profile.jpg" />
      <Overlay />
      <Greetings>
        <h1>Hello World!</h1>
        <p>
          <span>
            My name is <strong>Clarice Bouwer</strong>, a Senior Software
            Engineer from South Africa. I specialize in Clojure(Script) and
            other web technologies. I seriously love what I do!
          </span>
        </p>
        <p>
          <span>
            I work at <strong>Cloudsure</strong> in Mauritius. I&rsquo;m loving
            it!
          </span>{" "}
          <div>🇿🇦 🇲🇺 🏝️</div>
        </p>
      </Greetings>
      <Contact>
        <Anchor
          to="https://github.com/cbillowes"
          title="Check out my code on GitHub"
        >
          <FaGithub />
        </Anchor>

        <Anchor to="https://twitter.com/cbillowes" title="Follow me on Twitter">
          <FaTwitter />
        </Anchor>

        <Anchor
          to="https://www.linkedin.com/in/cbouwer/"
          title="Squizz through my resume on LinkedIn"
        >
          <FaLinkedin />
        </Anchor>

        <Anchor
          to="https://stackoverflow.com/users/849986/clarice-bouwer"
          title="Look at my profile on StackOverflow"
        >
          <FaStackOverflow />
        </Anchor>

        <Anchor
          to="https://clarice.bouwer.dev"
          title="Check out my portfolio website"
        >
          <CgWebsite />
        </Anchor>
      </Contact>
    </Container>
  </Wrapper>
)

export default Header
