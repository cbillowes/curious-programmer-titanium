import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { size, getText, Things, getShadow, getBase, device } from "../../Themes"

const Container = styled.div`
  max-width: ${size.desktop};
  position: relative;
  z-index: 3;
  margin-left: 2rem;
`

const Baby = styled.h3`
  margin-top: -11rem;
  transform: rotate(-2deg);
  span {
    font-size: 3rem;
    line-height: 180%;
    color: ${(props) => getText(props.theme, Things.HERO)};
    text-shadow: ${(props) => getShadow(props.theme, Things.HERO)};
    background-color: ${(props) => getBase(props.theme, Things.PRIMARY)};
  }

  @media ${device.laptopL} {
    margin-top: -3rem;
  }

  @media ${device.tablet} {
    margin-top: 0;
  }
`

const Big = styled.h2`
  transform: rotate(-1deg);
  margin-top: -0.5rem;
  span {
    font-size: 5rem;
    line-height: 160%;
    color: ${(props) => getText(props.theme, Things.HERO)};
    text-shadow: ${(props) => getShadow(props.theme, Things.HERO)};
    background-color: ${(props) => getBase(props.theme, Things.SECONDARY)};
  }
`

const Slogan = ({ theme }) => (
  <Container>
    <Baby>
      <span>I write code. I share code. I love code.</span>
    </Baby>
    <Big theme={theme}>
      <span>I am a curious programmer.</span>
    </Big>
  </Container>
)

export default Slogan

Slogan.propTypes = {
  theme: PropTypes.string.isRequired,
}
