import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Anchor = ({ className, to, title, children }) => {
  if (to.startsWith("/")) {
    return (
      <Link className={className} to={to} title={title}>
        {children}
      </Link>
    )
  }

  return (
    <a className={className} href={to} title={title} rel="noreferrer noopener">
      {children}
    </a>
  )
}

Anchor.defaultProps = {
  className: "",
}

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Anchor
