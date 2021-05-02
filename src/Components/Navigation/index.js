import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { getBase, getAlternate, getText, getShadow } from "../GlobalStyles"

const BURGER_WIDTH = 40
const BURGER_HEIGHT = 24
const BAR_HEIGHT = 4

const Bar = styled.nav`
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => getAlternate(props, "primary")};
  border-bottom: solid 10px ${(props) => getBase(props, "primary")};
`

const Logo = styled.div`
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 1.75rem;
  color: ${(props) => getText(props, "primary")};
  text-shadow: 1px 1px 1px ${(props) => getShadow(props, "primary")};
`

/*!
 * Hamburgers: hamburger--spin
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
const Burger = styled.button`
  width: ${BURGER_WIDTH}px;
  height: ${BURGER_HEIGHT}px;
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  position: absolute;
  top: 0.5rem;
  right: 5rem;

  .hamburger:hover {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: ${(props) => getText(props, "primary")};
      opacity: 1;
    }
  }
  .hamburger.is-active:hover {
    opacity: 0.7;
  }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: ${(props) => getText(props, "primary")};
  }

  .hamburger-box {
    width: ${BURGER_WIDTH}px;
    height: ${BURGER_HEIGHT}px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    background-color: ${(props) => getText(props, "primary")};
    width: ${BURGER_WIDTH}px;
    height: ${BAR_HEIGHT}px;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger--spin .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spin .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }
  .hamburger--spin .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--spin.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--spin.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }
  .hamburger--spin.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out,
      transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  /*
   * Spin Reverse
   */
  .hamburger--spin-r .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spin-r .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }
  .hamburger--spin-r .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--spin-r.is-active .hamburger-inner {
    transform: rotate(-225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--spin-r.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }
  .hamburger--spin-r.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(90deg);
    transition: bottom 0.1s ease-out,
      transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`

const burgerState = (isMenuOpen) => (isMenuOpen ? "is-active" : "")

const Navigation = ({ theme }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <Bar theme={theme}>
      <Logo theme={theme}>
        <strong>{`{ `}</strong>
        <span>:curious</span>
        <strong>{` programmer }`}</strong>
      </Logo>
      <Burger
        aria-label="Menu"
        onClick={() => toggleMenu(!isMenuOpen)}
        theme={theme}
      >
        <div className={`hamburger hamburger--spin ${burgerState(isMenuOpen)}`}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </Burger>
    </Bar>
  )
}

export default Navigation

Navigation.propTypes = {
  theme: PropTypes.string.isRequired,
}
