import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import Connect from "../Connect"
import { SPACE_BETWEEN_HEADER_AND_PAGE, getBase } from "../GlobalStyles"

const items = [
  {
    anchor: "Home",
    to: "/",
    title: "Pinned and latest articles",
  },
  {
    anchor: "Blog",
    to: "/blog",
    title: "A collection of all my articles",
  },
  {
    anchor: "About",
    to: "/about",
    title: "More about who I am",
  },
  {
    anchor: "Tags",
    to: "/tags",
    title: "The tags that are associated to my blog posts",
  },
  {
    anchor: "Credits & Resources",
    to: "/credits",
    title: "What I used to make this site",
  },
  {
    anchor: "Privacy Policy",
    to: "https://www.iubenda.com/privacy-policy/7895922",
    title: "What I do with your personal information",
  },
]

const Container = styled.nav`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  right: 0;
  bottom: 0;
  top: ${SPACE_BETWEEN_HEADER_AND_PAGE}px;
  padding-right: 4rem;
  background-color: ${(props) => getBase(props, "menu")};

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
  }
`

const Link = styled(Anchor)`
  margin: 0;
  padding: 1rem 2rem;
  display: block;
  border-radius: 0;
  width: 100%;
`

const Menu = ({ isOpen, theme, switcher }) => (
  <Container isOpen={isOpen} theme={theme}>
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <Link to={item.to} title={item.title}>
            {item.anchor}
          </Link>
        </li>
      ))}
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
