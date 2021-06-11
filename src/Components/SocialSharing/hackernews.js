import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { HackerNews } from "react-social-sharing"
import metadata from "../../../gatsby-site"

const Container = styled.div`
  display: inline-block;

  a {
    background-color: transparent;
    font-size: 1.5rem;
    margin: 0;

    div {
      border-radius: 50%;
      padding: 0.3rem;
    }
  }
`

const getMessage = (title) => {
  return `I just read ${title} on ${metadata.title}.`
}

const Button = ({ title, url }) => (
  <Container>
    <HackerNews small message={getMessage(title)} link={url} />
  </Container>
)

export default Button

Button.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
