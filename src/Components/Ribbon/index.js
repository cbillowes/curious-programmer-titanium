import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { getAllFromTheme, NESTED_KEY, TOP_LEVEL_KEY } from "../Theme"

const Container = styled.div`
  position: absolute;
  right: 0;
`

const Backdrop = styled.div`
  height: 188px;
  width: 150px;
  position: absolute;
  top: -20px;
  right: -8px;
  overflow: hidden;
  display: inline-block;

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    width: 40px;
    height: 8px;
    right: 100px;
    border-radius: 8px 8px 0px 0px;
  }

  &::after {
    width: 8px;
    height: 40px;
    right: 0px;
    top: 100px;
    border-radius: 0px 8px 8px 0px;
  }
`

const Body = styled.div`
  width: 200px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 30px;
  right: -50px;
  z-index: 2;
  overflow: hidden;
  transform: rotate(45deg);
  border: 1px dashed;
  text-align: center;
  font-weight: bold;
  ${(props) =>
    getAllFromTheme(props, [TOP_LEVEL_KEY.palette, NESTED_KEY.primary])};
`

const Ribbon = ({ color, children }) => {
  if (!children) return <></>

  return (
    <Container>
      <Backdrop>
        <Body color={color}>{children}</Body>
      </Backdrop>
    </Container>
  )
}

Ribbon.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
}

export default Ribbon
