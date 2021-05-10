import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import {
  Things,
  getBase,
  getText,
  getShadow,
  MAX_FOOTER_WIDTH,
} from "../Themes"

const Container = styled.footer`
  padding: 2rem;
  background-color: ${(props) => getBase(props.theme, Things.FOOTER)};
  color: ${(props) => getText(props.theme, Things.FOOTER)};
  text-shadow: 1px 1px 1px ${(props) => getShadow(props.theme, Things.FOOTER)};
  font-size: 0.85rem;

  section {
    line-height: 1.75rem;
    max-width: ${MAX_FOOTER_WIDTH};
    margin: 0 auto;
  }
`

const Copyright = styled.div``

const Slogan = styled.span`
  font-weight: bold;
`

const Credits = styled.span``

const Links = styled.div`
  display: flex;
  align-items: bottom;
  justify-content: flex-start;
  margin-top: 0.5rem;

  button {
    padding-left: 0;
  }

  a {
    display: inline-block;
    margin-top: -4px;
    padding-top: 0;
    padding-bottom: 0;
    background-color: transparent;
    color: ${(props) => getText(props.theme, Things.FOOTER)};
    text-shadow: 1px 1px 1px ${(props) => getShadow(props.theme, Things.FOOTER)};

    &:hover {
      color: ${(props) => getBase(props.theme, Things.PRIMARY)} !important;
      text-shadow: 1px 1px 1px
        ${(props) => getText(props.theme, Things.PRIMARY)};
    }
  }
`

const Footer = ({ theme, switcher }) => (
  <Container theme={theme}>
    <section>
      <Copyright>
        Copyright &copy; {new Date().getFullYear()}. Curious Programmer.{" "}
        <Slogan>A curious place for a curious mind.</Slogan>{" "}
        <Credits>
          Built with{" "}
          <Anchor to="https://www.gatsbyjs.org/" title="Gatsby">
            Gatsby
          </Anchor>{" "}
          and other{" "}
          <Anchor to="/credits" title="Credits">
            cool stuff
          </Anchor>
        </Credits>
      </Copyright>
      <Links theme={theme}>
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
      </Links>
    </section>
  </Container>
)

Footer.propTypes = {
  switcher: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
}

export default Footer
