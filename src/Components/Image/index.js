import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  getAllFromTheme,
  getFromTheme,
  KEY,
  NESTED_KEY,
  TOP_LEVEL_KEY,
} from "../Theme"

const Container = styled.div`
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem auto;
  width: 100%;
  text-align: center;
  max-width: ${(props) => props.width};
  transform: rotate(${(props) => props.rotate || "0"}deg);
  ${(props) => getAllFromTheme(props, TOP_LEVEL_KEY.card, props.nestedKey)};
  box-shadow: 0 7px 29px 0
    ${(props) =>
      getFromTheme(props, TOP_LEVEL_KEY.card, props.nestedKey, KEY.shadow)};

  p {
    font-size: 80%;
    line-height: 1.5rem;
    text-align: center;
    color: ${(props) =>
      getFromTheme(props, TOP_LEVEL_KEY.card, props.nestedKey, KEY.color)};
  }

  img {
    border-radius: 10px;
  }

  @media screen and (max-width: 840px) {
    &,
    & img {
      width: 100%;
      margin: 0;
      transform: none;
    }
  }
`

const Image = ({ ribbon, image, rotate, width, type, children }) => (
  <Container width={width} rotate={rotate} nestedKey={type}>
    {ribbon}
    {image}
    <div>{children}</div>
  </Container>
)

export default Image

Image.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  ribbon: PropTypes.node,
  rotate: PropTypes.number,
  type: PropTypes.oneOf([NESTED_KEY.default, NESTED_KEY.contrast]).isRequired,
  width: PropTypes.number,
}
