import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import {
  getAllFromTheme,
  bp,
  NESTED_KEY,
  TOP_LEVEL_KEY,
  KEY,
  getFromTheme,
} from "../Theme"
import { Cloud } from "../Tags"

const Container = styled.div`
  max-width: ${bp.space.readingPane};
  position: relative;
  margin: 0 auto;
  margin-top: 2rem;
`

const Meta = styled.div`
  a {
    background-color: transparent;
    text-transform: lowercase;
    padding: 0;
    font-weight: bold;

    &::before {
      content: "#";
    }

    color: ${(props) =>
      getFromTheme(
        props,
        TOP_LEVEL_KEY.palette,
        NESTED_KEY.secondary,
        KEY.base,
      )};

    text-shadow: ${(props) =>
      getFromTheme(
        props,
        TOP_LEVEL_KEY.palette,
        NESTED_KEY.secondary,
        KEY.shadow,
      )};
  }
`

const Heading = styled.h2`
  font-size: 1.5rem;
  width: 100%;
  margin: 0;
  padding: 0;

  a {
    padding: 0;

    ${(props) =>
      getAllFromTheme(props, TOP_LEVEL_KEY.bland, NESTED_KEY.default)};

    &:hover {
      ${(props) =>
        getAllFromTheme(props, TOP_LEVEL_KEY.bland, NESTED_KEY.hover)};
    }
  }
`

const Article = ({ node }) => (
  <Container>
    <Heading>
      <Anchor to={node.fields.slug} title={node.frontmatter.title}>
        {node.frontmatter.title}
      </Anchor>
    </Heading>
    <Meta>
      {node.fields.number} | {node.fields.date} | Est. {node.timeToRead} minute
      read.
      <Cloud tags={node.frontmatter.tags} />
    </Meta>
  </Container>
)

Article.propTypes = {
  node: PropTypes.object.isRequired,
}

export default Article
