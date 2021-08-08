import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const Title = ({ site, page }) => {
  const title = (page && site && `${page} - ${site}`) || page || site
  return (
    <Helmet>
      <title>{title}</title>

      <meta content={site} name="application-name" />
      <meta content={site} name="apple-mobile-web-app-title" />
      <meta content={site} property="og:site_name" />

      <meta content={title} property="og:title" />
      <meta content={title} name="twitter:title" />
      <meta content={title} name="twitter:text:title" />
    </Helmet>
  )
}

Title.defaultProps = {
  page: "",
  site: "",
}

Title.propTypes = {
  page: PropTypes.string,
  site: PropTypes.string,
}

export default Title
