import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "../Image"
import { NESTED_KEY } from "../Theme"

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 4rem;
`

const Blurb = styled.div`
  width: ${(props) => props.width};
  margin: 0 6rem;
`

const Block = ({
  direction,
  rotate,
  width,
  blurb,
  ribbon,
  image,
  caption,
  shadow,
  type,
}) => (
  <Container>
    {direction && direction === "left" && (
      <Blurb width={width && width.blurb}>{blurb}</Blurb>
    )}
    {image && (
      <Image
        rotate={rotate}
        width={width && width.image}
        ribbon={ribbon}
        image={image}
        shadow={shadow}
        type={type}
      >
        {caption}
      </Image>
    )}
    {direction && direction === "right" && (
      <Blurb width={width && width.blurb}>{blurb}</Blurb>
    )}
  </Container>
)

export default Block

Block.propTypes = {
  blurb: PropTypes.node.isRequired,
  caption: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
  image: PropTypes.node,
  ribbon: PropTypes.node,
  rotate: PropTypes.number,
  shadow: PropTypes.string,
  type: PropTypes.oneOf([NESTED_KEY.default, NESTED_KEY.contrast]).isRequired,
  width: PropTypes.shape({
    blurb: PropTypes.string,
    image: PropTypes.string,
  }),
}
