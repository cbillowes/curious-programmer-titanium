import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { IoIosMail } from "@react-icons/all-files/io/IoIosMail"

const Container = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;

  li {
    padding: 1.5rem 0.75rem;
    display: inline-block;
  }
`

const Connect = ({ theme, switcher }) => (
  <Container theme={theme}>
    <li>{switcher}</li>
    <li>
      <FaGithub />
    </li>

    <li>
      <FaTwitter />
    </li>

    <li>
      <FaLinkedin />
    </li>

    <li>
      <IoIosMail />
    </li>
  </Container>
)

export default Connect

Connect.propTypes = {
  switcher: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
}
