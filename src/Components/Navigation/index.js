import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { IoIosMail } from "@react-icons/all-files/io/IoIosMail"
import {
  SPACE_BETWEEN_HEADER_AND_PAGE,
  getBase,
  getAlternate,
  getText,
  getShadow,
} from "../GlobalStyles"

const BURGER_WIDTH = 40
const BURGER_HEIGHT = 24
const BAR_HEIGHT = 4

const Bar = styled.div`
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

const Menu = styled.nav`
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  top: ${SPACE_BETWEEN_HEADER_AND_PAGE}px;
  padding-right: 3.5rem;
  background-color: black;

  &.active {
    display: block;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    padding: 1rem 2rem;
    display: block;
    border-radius: 0;
    width: 100%;
  }
`

const Connect = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;

  li {
    padding: 1.5rem 0.75rem;
  }
`

const burgerState = (isMenuOpen) => (isMenuOpen ? "is-active" : "")

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
        <Burger
          aria-label="Menu"
          onClick={() => toggleMenu(!isMenuOpen)}
          theme={theme}
        >
          <div
            className={`hamburger hamburger--spin ${burgerState(isMenuOpen)}`}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </Burger>
      </Bar>
      <Menu theme={theme}>
        <ul>
          <li>
            <Anchor
              to="/"
              title="A view of all my pinned posts and a few of my latest ones"
            >
              Home
            </Anchor>
          </li>
          <li>
            <Anchor to="/blog" title="A full list of all my articles">
              Blog
            </Anchor>
          </li>
          <li>
            <Anchor to="/about" title="More about who I am">
              About
            </Anchor>
          </li>
          <li>
            <Anchor
              to="/tags"
              title="The tags that are associated to my blog posts"
            >
              Tags
            </Anchor>
          </li>
          <li>
            <Anchor to="/credits" title="What I used to make this site">
              Credits &amp; Resources
            </Anchor>
          </li>
          <li>
            <Anchor
              to="/privacy"
              title="What I do with your personal information"
            >
              Privacy Policy
            </Anchor>
          </li>
        </ul>
        <Connect theme={theme}>
          <li>{switcher}</li>
          <li>
            <FaGithub />
          </li>

          <li>
            <FaTwitter />
          </li>

          <li>
            <FaLinkedin />
          </li>

          <li>
            <IoIosMail />
          </li>
        </Connect>
      </Menu>
    </Fragment>
  )
}

export default Navigation

Navigation.propTypes = {
  switcher: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
}
