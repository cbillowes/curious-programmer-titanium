import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../Contact"
import {
  getAllFromTheme,
  getFromTheme,
  bp,
  KEY,
  NESTED_KEY,
  TOP_LEVEL_KEY,
} from "../../Theme"

const Container = styled.div`
  background-color: ${(props) =>
    getFromTheme(props, TOP_LEVEL_KEY.root, NESTED_KEY.hero, KEY.base)};
  position: relative;
  height: 100vh;
  width: 100vw;
`

const Cover = styled.div`
  .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Overlay = styled.div`
  background-color: ${(props) =>
    getFromTheme(props, TOP_LEVEL_KEY.root, NESTED_KEY.hero, KEY.base)};
  opacity: 0.7;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Greeting = styled.div`
  width: 30%;
  position: absolute;
  top: 5rem;
  right: 5rem;
  text-align: right;
  font-size: 1.35rem;
  ${(props) => getAllFromTheme(props, TOP_LEVEL_KEY.root, NESTED_KEY.hero)};
  background-color: transparent;

  h1 {
    text-align: right;

    @media ${bp.query.laptopL} {
      font-size: 2.5rem;
    }
  }

  @media ${bp.query.laptopL} {
    width: 40%;
    right: 2rem;
  }

  @media ${bp.query.mobileL} {
    width: 80%;
    right: 2rem;
  }
`

const Icons = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: flex-end;

  span {
    margin: 10px;
  }

  .logo {
    margin-top: 5px;
  }
`

const Hero = () => (
  <Container>
    <Cover>
      <StaticImage src="../profile.jpg" alt="Clarice Bouwer" />
    </Cover>
    <Overlay />
    <Greeting>
      <h1>{`< Hello World />`}</h1>
      <p>
        My name is <strong>Clarice Bouwer</strong>, a Senior{" "}
        <strong>Software Engineer</strong> from South Africa. I work at{" "}
        <strong>Cloudsure</strong> in Mauritius.
      </p>
      <p>
        I specialize in <strong>Clojure(Script)</strong> and other web
        technologies. I seriously love what I do!
      </p>
      <Icons>
        <span role="img" aria-label="South African flag emoji">
          🇿🇦
        </span>{" "}
        <span role="img" aria-label="Mauritian flag emoji">
          🇲🇺
        </span>{" "}
        <span role="img" aria-label="Island emoji">
          🏝️
        </span>
        <span className="logo">
          <StaticImage src="./cloudsure.png" alt="Cloudsure" width={48} />
        </span>
      </Icons>
      <Contact />
    </Greeting>
  </Container>
)

export default Hero
