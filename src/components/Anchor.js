import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Anchor = ({ className, to, title, children, useMarkdownStyles }) => {
  const classNames = useMarkdownStyles
    ? `${className} font-cursive text-color-1 px-1 text-xl hover:text-color-1-alternative hover:underline`
    : className

  if (!to)
    return (
      <span className={classNames} title={title || children}>
        {children}
      </span>
    )

  if (to && to.startsWith("/")) {
    return (
      <Link className={classNames} to={to} title={title || children}>
        {children}
      </Link>
    )
  }

  return (
    <OutboundLink
      className={classNames}
      href={to}
      title={title || children}
      rel="noreferrer noopener"
      target="_blank"
    >
      {children}
    </OutboundLink>
  )
}

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  useMarkdownStyles: PropTypes.bool,
}

export default Anchor
