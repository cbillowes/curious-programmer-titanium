import React from "react"
import PropTypes from "prop-types"
import Title from "./title"
import Description from "./description"
import Icons from "./icons"
import Social from "./social"
import Schema from "./schema"
import Font from "./font"
import { Helmet } from "react-helmet"

const removeWhitespace = (text) => {
  return text
    ?.trim()
    ?.split(" ")
    ?.filter((word) => word)
    ?.join(" ")
}

const Head = ({
  author,
  brand,
  description,
  image,
  keywords,
  lang,
  pageTitle,
  pageType,
  social,
  siteTitle,
  type,
  url,
}) => (
  <React.Fragment>
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="Content-Type" content="text/html; charset=UTF-8" />
      <meta
        content="width=device-width,initial-scale=1.0,user-scalable=yes"
        name="viewport"
      />

      <meta
        httpEquiv="Content-Security-Policy"
        content="base-uri 'self'; default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; object-src 'none'; form-action 'self'; font-src 'self' fonts.googleapis.com fonts.gstatic.com; connect-src 'self'; img-src 'self' data:; frame-src 'self' www.youtube.com;"
      />

      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />

      <meta name="robots" content="index" />
    </Helmet>

    <Title page={pageTitle} site={siteTitle} />

    <Description
      keywords={keywords}
      author={author && author.name}
      description={removeWhitespace(description)}
    />

    <Font />

    <Icons themeColor={brand} />

    <Social
      url={url}
      twitter={social && social.twitter}
      imagePath={image || (social && social.image)}
      pageType={pageType}
    />

    <Schema
      type={type}
      url={url}
      name={pageTitle}
      description={removeWhitespace(description)}
      author={{
        name: author && author.name,
        url: author && author.url,
      }}
      image={image || (social && social.image)}
    />
  </React.Fragment>
)

const author = PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
})

const social = PropTypes.shape({
  image: PropTypes.string,
  twitter: PropTypes.string.isRequired,
})

Head.defaultProps = {
  type: "WebSite",
}

Head.propTypes = {
  author: author.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  keywords: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  social: social.isRequired,
  pageTitle: PropTypes.string,
  pageType: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default Head
