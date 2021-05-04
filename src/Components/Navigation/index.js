import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Hamburger from "../Hamburger"
import Menu from "../Menu"
import { getBase, getAlternate, getText, getShadow } from "../GlobalStyles"

const Bar = styled.div`
  z-index: 9999;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => getAlternate(props, "navigation")};
  border-bottom: solid 10px ${(props) => getBase(props, "navigation")};
`

const Logo = styled.div`
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 1.75rem;
  color: ${(props) => getText(props, "navigation")};
  text-shadow: 1px 1px 1px ${(props) => getShadow(props, "navigation")};
`

const Navigation = ({ theme, switcher }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <Fragment>
      <Bar theme={theme}>
        <Logo theme={theme}>
          <span>{`{ :curious `}</span>
          <strong>{` "programmer" `}</strong>
          <span>{`}`}</span>
        </Logo>
        <Hamburger theme={theme} isOpen={isMenuOpen} toggle={toggleMenu} />
      </Bar>
      <Menu isOpen={isMenuOpen} theme={theme} switcher={switcher} />
    </Fragment>
  )
}

export default Navigation

Navigation.propTypes = {
  switcher: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
}
