import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import Connect from "../Connect"
import { SPACE_BETWEEN_HEADER_AND_PAGE } from "../GlobalStyles"

const Container = styled.nav`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  right: 0;
  bottom: 0;
  top: ${SPACE_BETWEEN_HEADER_AND_PAGE}px;
  padding-right: 3.5rem;
  background-color: black;

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

const Menu = ({ isOpen, theme, switcher }) => (
  <Container isOpen={isOpen} theme={theme}>
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
        <Anchor to="/privacy" title="What I do with your personal information">
          Privacy Policy
        </Anchor>
      </li>
    </ul>

    <Connect theme={theme} switcher={switcher} />
  </Container>
)

export default Menu

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  switcher: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
}
