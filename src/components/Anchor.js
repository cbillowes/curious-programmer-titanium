import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Anchor = ({ className, to, title, children }) => {
  if (!to)
    return (
      <span className={className} title={title}>
        {children}
      </span>
    )

  if (to && to.startsWith("/")) {
    return (
      <Link className={className} to={to} title={title}>
        {children}
      </Link>
    )
  }

  return (
    <OutboundLink
      className={className}
      href={to}
      title={title}
      rel="noreferrer noopener"
      target="_blank"
    >
      {children}
    </OutboundLink>
  )
}

Anchor.defaultProps = {
  className: "",
}

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default Anchor
