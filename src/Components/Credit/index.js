import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"

const Container = styled.div``

const Credit = ({ to, title, children }) => (
  <Container>
    <Anchor to={to} title={title}>
      {title}
    </Anchor>
    {children}
  </Container>
)

Credit.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default Credit
