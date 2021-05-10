import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Hamburger from "../Hamburger"
import Menu from "../Menu"
import {
  Things,
  getBase,
  getAlternate,
  getText,
  getShadow,
  MAX_NAV_WIDTH,
} from "../Themes"

const Container = styled.nav`
  z-index: 9999;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => getAlternate(props.theme, Things.NAVIGATION)};
  border-bottom: solid 10px
    ${(props) => getBase(props.theme, Things.NAVIGATION)};
`

const Bar = styled.div`
  max-width: ${MAX_NAV_WIDTH};
  margin: 0 auto;
  position: relative;
`

const Logo = styled.div`
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 1.75rem;
  color: ${(props) => getText(props.theme, Things.NAVIGATION)};
  text-shadow: 1px 1px 1px
    ${(props) => getShadow(props.theme, Things.NAVIGATION)};
`

const Navigation = ({ theme, switcher }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <Container>
      <Bar theme={theme}>
        <Logo theme={theme}>
          <span>{`{ :curious `}</span>
          <strong>{` "programmer" `}</strong>
          <span>{`}`}</span>
        </Logo>
        <Hamburger theme={theme} isOpen={isMenuOpen} toggle={toggleMenu} />
      </Bar>
      <Menu isOpen={isMenuOpen} theme={theme} switcher={switcher} />
    </Container>
  )
}

export default Navigation

Navigation.propTypes = {
  switcher: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
}
