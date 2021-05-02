import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import { MAX_WIDTH, getBase, getText, getShadow } from "../GlobalStyles"

const Container = styled.footer`
  padding: 2rem;
  background-color: ${(props) => getBase(props, "accent")};
  color: ${(props) => getText(props, "accent")};
  text-shadow: 1px 1px 1px ${(props) => getShadow(props, "accent")};

  section {
    line-height: 1.75rem;
    max-width: ${MAX_WIDTH}px;
    margin: 0 auto;
  }
`

const Slogan = styled.strong``

const Copyright = styled.span`
  font-size: 1rem;
  margin: 0;

  a {
    font-size: 0.8rem;
  }
`

const Legal = styled.p`
  font-size: 0.8rem;
  margin: 0;
  margin-left: -0.5rem;

  button {
    vertical-align: middle;
    margin-top: 2px;
    margin-right: 1rem;
  }

  a {
    display: inline-block;
    padding: 0.25rem 1rem;
    margin: 0;
    margin-right: 1rem;
    font-weight: 800;
    background-color: transparent;
    color: ${(props) => getText(props, "accent")};
    text-shadow: 1px 1px 1px ${(props) => getShadow(props, "accent")};

    &:hover {
      color: ${(props) => getBase(props, "primary")};
      transition: background ease-in 0.25s;
    }
  }
`

const Footer = ({ theme, switcher }) => (
  <Container theme={theme}>
    <section>
      <Slogan>A curious place for a curious mind.</Slogan>{" "}
      <Copyright>
        Copyright &copy; {new Date().getFullYear()}. Built with{" "}
        <Anchor to="https://www.gatsbyjs.org/" title="Gatsby">
          Gatsby
        </Anchor>{" "}
        and other
        <Anchor to="/credits" title="Credits">
          cool stuff
        </Anchor>
      </Copyright>
      <Legal theme={theme}>
        {switcher}
        <Anchor to="/about`" title="About Clarice Bouwer">
          About me
        </Anchor>
        <Anchor to="/privacy" title="Privacy policy">
          Privacy policy
        </Anchor>
        <Anchor
          to="https://github.com/cbillowes/curious-programmer-titanium"
          title="Source code on GitHub"
        >
          Source code
        </Anchor>
        <Anchor to="https://www.flaticon.com" title="Icons from Flaticon">
          Icons
        </Anchor>
      </Legal>
    </section>
  </Container>
)

Footer.propTypes = {
  switcher: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
}

export default Footer
