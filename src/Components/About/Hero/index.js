import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { device, getBase, getShadow, getText, Things } from "../../Themes"
import Contact from "../Contact"

const Container = styled.div`
  background-color: ${(props) => getBase(props.theme, Things.HERO)};
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
  background-color: ${(props) => getBase(props.theme, Things.HERO)};
  opacity: 0.6;
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
  color: ${(props) => getText(props.theme, Things.HERO)};
  text-shadow: 1px 1px 1px ${(props) => getShadow(props.theme, Things.HERO)};

  h1 {
    text-align: right;

    @media ${device.laptopL} {
      font-size: 2.5rem;
    }
  }

  @media ${device.laptopL} {
    width: 40%;
    right: 2rem;
  }

  @media ${device.mobileL} {
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
`

const Hero = ({ theme }) => (
  <Container theme={theme}>
    <Cover>
      <StaticImage src="./profile.jpg" alt="Clarice Bouwer" />
    </Cover>
    <Overlay theme={theme} />
    <Greeting theme={theme}>
      <h1>{`< Hello World />`}</h1>
      <p>
        My name is <strong>Clarice Bouwer</strong>, a Senior Software Engineer
        from South Africa. I work at <strong>Cloudsure</strong> in Mauritius.
      </p>
      <p>
        I specialize in Clojure(Script) and other web technologies. I seriously
        love what I do!
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
        <span>
          <StaticImage src="./cloudsure.png" alt="Cloudsure" width={55} />
        </span>
      </Icons>
      <Contact />
    </Greeting>
  </Container>
)

export default Hero

Hero.propTypes = {
  theme: PropTypes.string.isRequired,
}
