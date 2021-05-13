import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { getBase, getText, Things } from "../Themes"

const Fixed = styled.div`
  background-color: ${(props) => getBase(props.theme, Things.STANDARD)};
  color: ${(props) => getText(props.theme, Things.STANDARD)};
  position: fixed;
  bottom: 0;
  right: 1rem;
  border-radius: 10px 10px 0 0;
  padding: 0.25rem;
  padding-bottom: 0;
`

const Icon = ({ theme, switcher }) => <Fixed theme={theme}>{switcher}</Fixed>

Icon.propTypes = {
  switcher: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
}

export default Icon
