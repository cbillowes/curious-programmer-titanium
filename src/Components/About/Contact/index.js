import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite"
import Anchor from "../../Anchor"
import { getBase, Things, device } from "../../Themes"

const Container = styled.div`
  margin-top: 4rem;
  text-align: right;

  a {
    font-size: 2rem;
    padding: 1rem;
    background-color: transparent;
    color: ${(props) => getBase(props.theme, Things.CONNECT)};

    &:hover {
      color: ${(props) => getBase(props.theme, Things.PRIMARY)};
    }

    &:last-child {
      padding-right: 0;
    }
  }

  @media ${device.laptop} {
    margin-top: 1rem;
  }
`

const Contact = ({ theme }) => (
  <Container theme={theme}>
    <Anchor
      to="https://github.com/cbillowes"
      title="Check out my code on GitHub"
    >
      <FaGithub />
    </Anchor>

    <Anchor to="https://twitter.com/cbillowes" title="Follow me on Twitter">
      <FaTwitter />
    </Anchor>

    <Anchor
      to="https://www.linkedin.com/in/cbouwer/"
      title="Squizz through my resume on LinkedIn"
    >
      <FaLinkedin />
    </Anchor>

    <Anchor
      to="https://stackoverflow.com/users/849986/clarice-bouwer"
      title="Look at my profile on StackOverflow"
    >
      <FaStackOverflow />
    </Anchor>

    <Anchor
      to="https://clarice.bouwer.dev"
      title="Check out my portfolio website"
    >
      <CgWebsite />
    </Anchor>
  </Container>
)

export default Contact

Contact.propTypes = {
  theme: PropTypes.string.isRequired,
}
