import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import Connect from "../Connect"
import {
  bp,
  getAllFromTheme,
  getFromTheme,
  KEY,
  NESTED_KEY,
  TOP_LEVEL_KEY,
} from "../Theme"

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
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9998;
  overflow: auto;
  top: ${bp.space.betweenHeaderAndPage};
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: ${(props) =>
    getFromTheme(props, [
      TOP_LEVEL_KEY.navigation,
      NESTED_KEY.sidebar,
      KEY.base,
    ])};
  border-left: solid 0.5rem
    ${(props) =>
      getFromTheme(props, [
        TOP_LEVEL_KEY.navigation,
        NESTED_KEY.sidebar,
        KEY.shadow,
      ])};
`

const MenuItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`

const Item = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`

const Link = styled(Anchor)`
  margin: 0;
  padding: 0.5rem 1.5rem;
  display: block;
  border-radius: 0;
  width: 100%;
  ${(props) =>
    getAllFromTheme(props, [TOP_LEVEL_KEY.menuItem, NESTED_KEY.default])};

  &:hover {
    ${(props) =>
      getAllFromTheme(props, [TOP_LEVEL_KEY.menuItem, NESTED_KEY.hover])};
  }

  &.active {
    ${(props) =>
      getAllFromTheme(props, [TOP_LEVEL_KEY.menuItem, NESTED_KEY.active])};

    &:hover {
      ${(props) =>
        getAllFromTheme(props, [TOP_LEVEL_KEY.link, NESTED_KEY.hover])};
    }
  }
`

const Menu = ({ isOpen, switcher, route }) => (
  <Container isOpen={isOpen}>
    <MenuItems>
      {items.map((item, i) => (
        <Item key={i}>
          <Link
            to={item.to}
            title={item.title}
            className={route === item.to ? "active" : ""}
          >
            {item.anchor}
          </Link>
        </Item>
      ))}
    </MenuItems>
    <Connect switcher={switcher} />
  </Container>
)

export default Menu

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  route: PropTypes.string.isRequired,
  switcher: PropTypes.node.isRequired,
}
