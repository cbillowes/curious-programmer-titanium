import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "../GlobalStyles"

const Page = styled.main``

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    <Page>{children}</Page>
  </Fragment>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
