import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { IoIosMail } from "@react-icons/all-files/io/IoIosMail"
import { getAlternate, getBase } from "../GlobalStyles"
import Anchor from "../Anchor"

const items = [
  {
    anchor: <FaGithub />,
    to: "https://github.com/cbillowes",
    title: "GitHub account",
  },

  {
    anchor: <FaTwitter />,
    to: "https://twitter.com/cbillowes",
    title: "Twitter account",
  },

  {
    anchor: <FaLinkedin />,
    to: "https://www.linkedin.com/in/cbouwer/",
    title: "LinkedIn account",
  },

  {
    anchor: <IoIosMail />,
    to: "/contact",
    title: "Get in touch with me",
  },
]

const Container = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;

  li {
    padding: 1.5rem 0.75rem;
    display: inline-block;
  }

  .switcher button {
    color: ${(props) => getBase(props, "connect")};
    font-size: 1.5rem;
    margin-top: -2px;

    &:hover {
      background-color: transparent;
      color: ${(props) => getAlternate(props, "connect")};
      opacity: 0.5;
    }
  }
`

const Link = styled(Anchor)`
  background-color: transparent;
  padding: 0;
  color: ${(props) => getBase(props, "connect")};
  font-size: 1.25rem;

  &:hover {
    background-color: transparent;
    color: ${(props) => getAlternate(props, "connect")};
    opacity: 0.5;
  }
`

const Connect = ({ theme, switcher }) => (
  <Container theme={theme}>
    <li className="switcher">{switcher}</li>
    {items.map((item, i) => (
      <li key={i}>
        <Link to={item.to} title={item.title} theme={theme}>
          {item.anchor}
        </Link>
      </li>
    ))}
  </Container>
)

export default Connect

Connect.propTypes = {
  switcher: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
}
