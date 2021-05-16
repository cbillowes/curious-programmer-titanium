import React from "react"
import styled from "styled-components"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite"
import { TOP_LEVEL_KEY, NESTED_KEY, KEY, getFromTheme } from "../../Theme"
import Anchor from "../../Anchor"

const Container = styled.div``

// https://codepen.io/olam/pen/zcqea
const Pulse = styled.div`
  background-color: ${(props) =>
    getFromTheme(props, [TOP_LEVEL_KEY.icon, NESTED_KEY.default, KEY.base])};
  position: relative;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  width: 2.85rem;
  height: 2.85rem;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  animation: none;

  a {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-58%);
    padding: 0;
    background-color: transparent;
    line-height: 0;
    font-size: 1.95rem;
    color: ${(props) =>
      getFromTheme(props, [TOP_LEVEL_KEY.icon, NESTED_KEY.default, KEY.color])};
  }

  &:hover {
    animation: pulse 2s infinite;
    background-color: ${(props) =>
      getFromTheme(props, [TOP_LEVEL_KEY.icon, NESTED_KEY.hover, KEY.base])};

    a {
      color: ${(props) =>
        getFromTheme(props, [TOP_LEVEL_KEY.icon, NESTED_KEY.hover, KEY.color])};
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0
        ${(props) =>
          getFromTheme(props, [
            TOP_LEVEL_KEY.pulse,
            NESTED_KEY.shade1,
            KEY.base,
          ])};
    }
    70% {
      box-shadow: 0 0 0 10px
        ${(props) =>
          getFromTheme(props, [
            TOP_LEVEL_KEY.pulse,
            NESTED_KEY.shade2,
            KEY.base,
          ])};
    }
    100% {
      box-shadow: 0 0 0 0
        ${(props) =>
          getFromTheme(props, [
            TOP_LEVEL_KEY.pulse,
            NESTED_KEY.shade3,
            KEY.base,
          ])};
    }
  }
`

const Contact = () => (
  <Container>
    <Pulse className="">
      <Anchor
        to="https://github.com/cbillowes"
        title="Check out my code on GitHub"
      >
        <FaGithub />
      </Anchor>
    </Pulse>

    <Pulse>
      <Anchor to="https://twitter.com/cbillowes" title="Follow me on Twitter">
        <FaTwitter />
      </Anchor>
    </Pulse>

    <Pulse>
      <Anchor
        to="https://www.linkedin.com/in/cbouwer/"
        title="Squizz through my resume on LinkedIn"
      >
        <FaLinkedin />
      </Anchor>
    </Pulse>

    <Pulse>
      <Anchor
        to="https://stackoverflow.com/users/849986/clarice-bouwer"
        title="Look at my profile on StackOverflow"
      >
        <FaStackOverflow />
      </Anchor>
    </Pulse>

    <Pulse>
      <Anchor
        to="https://clarice.bouwer.dev"
        title="Check out my portfolio website"
      >
        <CgWebsite />
      </Anchor>
    </Pulse>
  </Container>
)

export default Contact
