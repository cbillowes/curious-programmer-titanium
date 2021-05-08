import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Hero from "./Hero"
import Slogan from "./Slogan"
import Featured from "./Featured"
import Content from "./Content"
import { Top as BreakFeatured, Bottom as BreakSomething } from "./Separator"
import { getBase, Things } from "../Themes"

const Container = styled.div`
  background-color: ${(props) => getBase(props.theme, Things.STANDARD)};
`

const Header = ({ theme }) => {
  return (
    <Container theme={theme}>
      <Hero theme={theme} />
      <Slogan theme={theme} />
      <Featured theme={theme} />
      <BreakFeatured
        top={getBase(theme, Things.STANDARD)}
        bottom={getBase(theme, Things.ABOUT)}
      />
      <Content theme={theme} />
      <BreakSomething
        top={getBase(theme, Things.ABOUT)}
        bottom={getBase(theme, Things.FOOTER)}
      />
    </Container>
  )
}

export default Header

Header.propTypes = {
  theme: PropTypes.string.isRequired,
}
