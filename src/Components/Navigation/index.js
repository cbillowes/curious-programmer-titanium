import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import Hamburger from "../Hamburger"
import Connect from "../Connect"
import {
  SPACE_BETWEEN_HEADER_AND_PAGE,
  getBase,
  getAlternate,
  getText,
  getShadow,
} from "../GlobalStyles"

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
        <Connect theme={theme} switcher={switcher} />
      </Menu>
    </Fragment>
  )
}

export default Navigation

Navigation.propTypes = {
  switcher: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
}
