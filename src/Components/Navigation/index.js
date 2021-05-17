import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Hamburger from "../Hamburger"
import Menu from "../Menu"
import {
  getAllFromTheme,
  getFromTheme,
  bp,
  KEY,
  NESTED_KEY,
  TOP_LEVEL_KEY,
} from "../Theme"

const Container = styled.nav`
  ${(props) =>
    getAllFromTheme(props, [TOP_LEVEL_KEY.navigation, NESTED_KEY.bar])};

  z-index: 9999;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: solid 10px
    ${(props) =>
      getFromTheme(props, [
        TOP_LEVEL_KEY.navigation,
        NESTED_KEY.strip,
        KEY.base,
      ])};
  box-shadow: 1px 4px 6px
    ${(props) =>
      getFromTheme(props, [
        TOP_LEVEL_KEY.navigation,
        NESTED_KEY.strip,
        KEY.shadow,
      ])};
`

const Bar = styled.div`
  max-width: ${bp.space.navigation};
  margin: 0 auto;
  position: relative;
`

const Logo = styled.div`
  ${(props) =>
    getAllFromTheme(props, [TOP_LEVEL_KEY.navigation, NESTED_KEY.logo])};
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 1.75rem;
`

const Navigation = ({ switcher, route }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <Container>
      <Bar>
        <Logo>
          <span>{`{ `}</span>
          <span>{`:curious `}</span>
          <strong>{` "programmer" `}</strong>
          <span>{`}`}</span>
        </Logo>
        <Hamburger isOpen={isMenuOpen} toggle={toggleMenu} />
      </Bar>
      <Menu isOpen={isMenuOpen} switcher={switcher} route={route} />
    </Container>
  )
}

export default Navigation

Navigation.propTypes = {
  route: PropTypes.string.isRequired,
  switcher: PropTypes.node.isRequired,
}
