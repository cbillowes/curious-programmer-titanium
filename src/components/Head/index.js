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
  crawl,
  description,
  image,
  keywords,
  lang,
  pageTitle,
  social,
  title,
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
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <link rel="manifest" href={`${url}/manifest.json`} />

      <meta
        content="width=device-width,initial-scale=1.0,user-scalable=yes"
        name="viewport"
      />

      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />

      {crawl ? (
        <meta name="robots" content="index" />
      ) : (
        <meta name="robots" content="noindex" />
      )}
    </Helmet>

    <Title page={pageTitle} site={title} />

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
    />

    <Schema
      type={type}
      url={url}
      name={title}
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
  crawl: false,
  type: "WebSite",
}

Head.propTypes = {
  author: author.isRequired,
  brand: PropTypes.string.isRequired,
  crawl: PropTypes.bool,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  keywords: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  social: social.isRequired,
  pageTitle: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default Head
