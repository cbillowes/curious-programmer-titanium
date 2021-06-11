import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Twitter from "./twitter"
import Facebook from "./facebook"
import Linkedin from "./linkedin"
import Reddit from "./reddit"
import HackerNews from "./hackernews"
import metadata from "../../../gatsby-site"

const Container = styled.aside`
  text-align: center;
`

const getLink = (slug) => {
  return `${metadata.url}${slug}`
}

const SocialSharing = ({ title, slug }) => (
  <Container>
    <Twitter title={title} url={getLink(slug)} />
    <Linkedin title={title} url={getLink(slug)} />
    <Reddit title={title} url={getLink(slug)} />
    <Facebook title={title} url={getLink(slug)} />
    <HackerNews title={title} url={getLink(slug)} />
  </Container>
)

export default SocialSharing

SocialSharing.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
