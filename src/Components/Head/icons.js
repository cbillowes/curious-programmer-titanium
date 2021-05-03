import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const Icons = ({ themeColor }) => (
  <Helmet>
    <meta content={themeColor} name="theme-color" />
    <meta content={themeColor} name="msapplication-TileColor" />
    <meta content="/icons/mstile-70x70.png" name="msapplication-square70x70" />
    <meta
      content="/icons/mstile-144x144.png"
      name="msapplication-square144x144"
    />
    <meta
      content="/icons/mstile-150x150.png"
      name="msapplication-square150x150"
    />
    <meta
      content="/icons/mstile-310x150.png"
      name="msapplication-wide310x150"
    />
    <meta
      content="/icons/mstile-310x310.png"
      name="msapplication-square310x310"
    />

    <link
      href="/icons/apple-touch-icon-57x57.png"
      rel="apple-touch-icon"
      sizes="57x57"
    />
    <link
      href="/icons/apple-touch-icon-60x60.png"
      rel="apple-touch-icon"
      sizes="60x60"
    />
    <link
      href="/icons/apple-touch-icon-72x72.png"
      rel="apple-touch-icon"
      sizes="72x72"
    />
    <link
      href="/icons/apple-touch-icon-76x76.png"
      rel="apple-touch-icon"
      sizes="76x76"
    />
    <link
      href="/icons/apple-touch-icon-114x114.png"
      rel="apple-touch-icon"
      sizes="114x114"
    />
    <link
      href="/icons/apple-touch-icon-120x120.png"
      rel="apple-touch-icon"
      sizes="120x120"
    />
    <link
      href="/icons/apple-touch-icon-144x144.png"
      rel="apple-touch-icon"
      sizes="144x144"
    />
    <link
      href="/icons/apple-touch-icon-152x152.png"
      rel="apple-touch-icon"
      sizes="152x152"
    />
    <link
      href="/icons/apple-touch-icon-167x167.png"
      rel="apple-touch-icon"
      sizes="167x167"
    />
    <link
      href="/icons/apple-touch-icon-180x180.png"
      rel="icon"
      sizes="180x180"
      type="image/png"
    />

    <link
      href="/icons/favicon-32x32.png"
      rel="icon"
      sizes="32x32"
      type="image/png"
    />
    <link
      href="/icons/favicon-16x16.png"
      rel="icon"
      sizes="16x16"
      type="image/png"
    />
  </Helmet>
)

Icons.defaultProps = {
  themeColor: "transparent",
}

Icons.propTypes = {
  themeColor: PropTypes.string,
}

export default Icons
