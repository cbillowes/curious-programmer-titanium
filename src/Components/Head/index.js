import React from "react"
import PropTypes from "prop-types"
import Title from "./title"
import Description from "./description"
import Icons from "./icons"
import Social from "./social"
import Schema from "./schema"
import Font from "./font"
import { StaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import { Helmet } from "react-helmet"

const Head = ({
  author,
  description,
  image,
  keywords,
  metadata,
  social,
  title,
  type,
  url,
}) => (
  <React.Fragment>
    <Helmet
      htmlAttributes={{
        lang: metadata.lang,
      }}
    >
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <link rel="manifest" href="/manifest.json" />

      <meta
        content="width=device-width,initial-scale=1.0,user-scalable=yes"
        name="viewport"
      />

      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />
    </Helmet>

    <Title page={title} site={metadata.title} />

    <Description
      keywords={keywords || metadata.keywords}
      author={
        (author && author.name) || (metadata.author && metadata.author.name)
      }
      description={description || metadata.description}
    />

    <Font />

    <Icons themeColor={metadata.brand} />

    <Social
      url={url}
      twitter={social && social.twitter}
      imagePath={image || (social && social.image)}
    />

    <Schema
      type={type}
      url={url}
      name={title || metadata.title}
      description={description || metadata.description}
      author={{
        name:
          (author && author.name) || (metadata.author && metadata.author.name),
        url: (author && author.url) || (metadata.author && metadata.author.url),
      }}
      image={image || (social && social.image)}
    />
  </React.Fragment>
)

const author = PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
})

const metadataSocial = PropTypes.shape({
  twitter: PropTypes.string.isRequired,
})

const metadata = PropTypes.shape({
  author: author.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  social: metadataSocial.isRequired,
})

const social = PropTypes.shape({
  image: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
})

Head.propTypes = {
  author: author.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  metadata: metadata.isRequired,
  social: social.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const HeadWithQuery = (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              url
            }
            brand
            description
            keywords
            lang
            title
            url
            social {
              image
              twitter
            }
          }
        }
      }
    `}
    render={(data) => (
      <Location>
        {({ location }) => (
          <Head
            {...props}
            metadata={data.site.siteMetadata}
            location={location}
          />
        )}
      </Location>
    )}
  />
)

export default HeadWithQuery
