import React from "react"
import styled from "styled-components"
import { bp, getAllFromTheme, NESTED_KEY, TOP_LEVEL_KEY } from "../../Theme"

const Container = styled.div`
  max-width: ${bp.space.section};
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
    ${(props) =>
      getAllFromTheme(props, [TOP_LEVEL_KEY.root, NESTED_KEY.shade1])};
  }

  @media ${bp.query.laptopL} {
    margin-top: -3rem;
  }

  @media ${bp.query.tablet} {
    margin-top: 0;
  }
`

const Big = styled.h2`
  transform: rotate(-1deg);
  margin-top: -0.5rem;

  span {
    font-size: 5rem;
    line-height: 160%;
    ${(props) =>
      getAllFromTheme(props, [TOP_LEVEL_KEY.root, NESTED_KEY.shade2])};
  }
`

const Slogan = () => (
  <Container>
    <Baby>
      <span>I write code. I share code. I love code.</span>
    </Baby>
    <Big>
      <span>I am a curious programmer.</span>
    </Big>
  </Container>
)

export default Slogan
