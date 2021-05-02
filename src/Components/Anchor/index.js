import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Anchor = ({ to, title, children }) => {
  if (to.startsWith("/")) {
    return (
      <Link to={to} title={title}>
        {children}
      </Link>
    )
  }

  return (
    <a href={to} title={title} rel="noreferrer noopener">
      {children}
    </a>
  )
}

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Anchor
