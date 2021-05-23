import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import { bp, getAllFromTheme, NESTED_KEY, TOP_LEVEL_KEY } from "../Theme"

const Container = styled.footer`
  padding: 2rem;
  font-size: 0.85rem;
  ${(props) => getAllFromTheme(props, TOP_LEVEL_KEY.root, NESTED_KEY.footer)};

  section {
    max-width: ${bp.space.footer};
    line-height: 1.75rem;
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

  button {
    font-size: 0.95rem;
    margin-right: 0.5rem;

    ${(props) =>
      getAllFromTheme(props, TOP_LEVEL_KEY.bland, NESTED_KEY.default)};

    &:hover {
      ${(props) =>
        getAllFromTheme(props, TOP_LEVEL_KEY.bland, NESTED_KEY.hover)};
    }
  }

  a {
    display: inline-block;
    padding: 0;
    padding-right: 1rem;
    background-color: transparent;
    font-weight: 600;

    ${(props) =>
      getAllFromTheme(props, TOP_LEVEL_KEY.bland, NESTED_KEY.default)};

    &:hover {
      ${(props) =>
        getAllFromTheme(props, TOP_LEVEL_KEY.bland, NESTED_KEY.hover)};
    }
  }
`

const Footer = ({ switcher }) => (
  <Container>
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
      <Links>
        {switcher}
        <Anchor to="/about" title="About Clarice Bouwer">
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
}

export default Footer
