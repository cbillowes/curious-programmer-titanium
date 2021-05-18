import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Blurb from "../Blurb"
import Ribbon from "../Ribbon"
import Anchor from "../Anchor"
import {
  getAllFromTheme,
  getFromTheme,
  bp,
  KEY,
  NESTED_KEY,
  TOP_LEVEL_KEY,
} from "../Theme"

const getColour = (number) => {
  if (number % 3 === 0) return "green"
  if (number % 2 === 0) return "red"
  return "blue"
}

const Container = styled.div`
  max-width: ${bp.space.readingPane};
  box-shadow: 0 7px 29px 0
    ${(props) =>
      getFromTheme(props, [
        TOP_LEVEL_KEY.card,
        NESTED_KEY.default,
        KEY.shadow,
      ])};
  background-color: ${(props) =>
    getFromTheme(props, [TOP_LEVEL_KEY.card, NESTED_KEY.default, KEY.base])};
  margin: 4rem auto;
  padding: 1rem 3rem;
  position: relative;
`

const TopMeta = styled.div`
  position: absolute;
  top: 0.25rem;
  left: 1rem;
  font-size: 80%;
`

const Thumbnail = styled.img`
  height: 380px;
  width: 100%;
  object-fit: cover;
`

const Heading = styled.h2`
  font-size: 2.5rem;
  max-width: 90%;
  line-height: 160%;
  text-align: center;

  a {
    padding: 0;
    margin: 0;
    background-color: transparent;
    color: ${(props) =>
      getFromTheme(props, [TOP_LEVEL_KEY.card, NESTED_KEY.default, KEY.color])};

    &:hover {
      ${(props) =>
        getAllFromTheme(props, [
          TOP_LEVEL_KEY.palette,
          NESTED_KEY.secondary,
          KEY.base,
        ])};
    }
  }
`

const Body = styled.div`
  max-width: 90%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  div,
  p {
    font-size: 1rem;
    display: inline;
    display: inline;
    border: 0;
    padding: 0;
    font-family: Raleway, Helvetica, Arial, sans-serif;
  }
`

const getThumbnailSrc = (photo) => {
  const resource = require(`../../images/articles/${photo || "default-10.jpg"}`)
  return resource ? resource.default : `../../images/articles/default-10.jpg`
}

const Article = ({ node, limit }) => (
  <Container>
    <Ribbon color={getColour(node.fields.number)}>{node.fields.number}</Ribbon>
    <TopMeta>
      {node.fields.date} | Est. {node.timeToRead} minute read.
    </TopMeta>
    <Heading>
      <Anchor to={node.fields.slug} title={node.frontmatter.title}>
        {node.frontmatter.title}
      </Anchor>
    </Heading>
    <Thumbnail
      src={getThumbnailSrc(node.frontmatter.photo)}
      alt={node.frontmatter.title}
    />
    <Body>
      <Blurb limit={limit}>{node.excerpt}</Blurb>
    </Body>
  </Container>
)

Article.defaultTypes = {
  limit: 100,
}

Article.propTypes = {
  limit: PropTypes.number,
  node: PropTypes.object.isRequired,
}

export default Article
