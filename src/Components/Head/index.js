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
  brand,
  description,
  image,
  keywords,
  lang,
  siteTitle,
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
    </Helmet>

    <Title page={title} site={siteTitle} />

    <Description
      keywords={keywords}
      author={author && author.name}
      description={description}
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
      description={description}
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
  image: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
})

Head.defaultProps = {
  type: "WebSite",
}

Head.propTypes = {
  author: author.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  social: social.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
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
            {...data.site.siteMetadata}
            {...props}
            siteTitle={data.site.siteMetadata.title}
            location={location}
          />
        )}
      </Location>
    )}
  />
)

export default HeadWithQuery
