import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
const getResource = (url, resource) => `${url}${resource || "/"}`

const Social = ({ pageType, title, imagePath, url, route, twitter }) => {
  const canonical = getResource(url, route)
  const image = `${url}${
    require(`../../images/social-media/${imagePath}`).default ||
    require("../../images/share.jpg").default
  }`

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta name="image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content={pageType || "website"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />

      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:width" content="800" />
      <meta name="twitter:image:height" content="600" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${twitter}`} />
      <meta name="twitter:creator" content={`@${twitter}`} />
    </Helmet>
  )
}

Social.defaultProps = {
  imagePath: "",
  pageType: "",
  route: "",
  title: "",
  twitter: "",
  url: "",
}

Social.propTypes = {
  imagePath: PropTypes.string,
  pageType: PropTypes.string,
  route: PropTypes.string,
  title: PropTypes.string,
  twitter: PropTypes.string,
  url: PropTypes.string,
}

export default Social
