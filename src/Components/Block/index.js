import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "../Image"
import { getShadow, Things } from "../Themes"

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 4rem;
`

const Blurb = styled.div`
  width: ${(props) => props.width};
  text-shadow: 1px 1px 1px ${(props) => getShadow(props.theme, Things.ABOUT)};
  margin: 0 6rem;
`

const Block = ({
  direction,
  rotate,
  width,
  theme,
  blurb,
  ribbon,
  image,
  caption,
  shadow,
}) => (
  <Container>
    {direction && direction === "left" && (
      <Blurb width={width && width.blurb} theme={theme}>
        {blurb}
      </Blurb>
    )}
    {image && (
      <Image
        theme={theme}
        rotate={rotate}
        width={width && width.image}
        ribbon={ribbon}
        image={image}
        shadow={shadow}
      >
        {caption}
      </Image>
    )}
    {direction && direction === "right" && (
      <Blurb width={width && width.blurb} theme={theme}>
        {blurb}
      </Blurb>
    )}
  </Container>
)

export default Block

Block.propTypes = {
  blurb: PropTypes.node,
  caption: PropTypes.node,
  direction: PropTypes.oneOf(["left", "right"]),
  image: PropTypes.node,
  ribbon: PropTypes.node,
  rotate: PropTypes.number,
  shadow: PropTypes.string,
  theme: PropTypes.string.isRequired,
  width: PropTypes.shape({
    blurb: PropTypes.string,
    image: PropTypes.string,
  }),
}
