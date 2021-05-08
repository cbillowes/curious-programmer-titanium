import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { getBase, getShadow, getText, Things } from "../Themes"

const Container = styled.div`
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem auto;
  width: 100%;
  text-align: center;
  max-width: ${(props) => props.width};
  box-shadow: ${(props) => getShadow(props.theme, props.shadow || Things.CARD)}
    0px 7px 29px 0px;
  background-color: ${(props) => getBase(props.theme, Things.CARD)};
  transform: rotate(${(props) => props.rotate || "0"}deg);
  color: ${(props) => getText(props.theme, Things.CARD)};
  text-shadow: 1px 1px 1px ${(props) => getShadow(props.theme, Things.CARD)};

  p {
    font-size: 80%;
    line-height: 1.5rem;
    text-align: center;
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

const Image = ({ ribbon, image, rotate, width, shadow, theme, children }) => (
  <Container theme={theme} width={width} rotate={rotate} shadow={shadow}>
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
  shadow: PropTypes.string,
  theme: PropTypes.string.isRequired,
  width: PropTypes.number,
}
