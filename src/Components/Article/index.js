import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Blurb from "../Blurb"
import Ribbon from "../Ribbon"
import Anchor from "../Anchor"
import {
  getBase,
  getShadow,
  getText,
  MAX_READING_PANE_WIDTH,
  Things,
} from "../Themes"

const getColour = (number) => {
  if (number % 3 === 0) return Things.TERTIARY
  if (number % 2 === 0) return Things.SECONDARY
  return Things.PRIMARY
}

const Container = styled.div`
  max-width: ${MAX_READING_PANE_WIDTH};
  box-shadow: ${(props) => getShadow(props.theme, props.shadow || Things.CARD)}
    0px 7px 29px 0px;
  background-color: ${(props) => getBase(props.theme, Things.CARD)};
  margin: 4rem auto;
  padding: 1rem 3rem;
  position: relative;
`

const Thumbnail = styled.div``

const Heading = styled.h2`
  font-size: 1.8rem;
  max-width: 90%;
  line-height: 160%;

  a {
    background-color: transparent;
    color: ${(props) => getText(props.theme, Things.CARD)};
    text-shadow: 1px 1px 1px ${(props) => getShadow(props.theme, Things.CARD)};
    padding: 0;
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

const Metadata = styled.div``

const Tags = styled.div``

const Article = ({ theme, node, limit }) => (
  <Container theme={theme}>
    <Ribbon color={getColour(node.fields.number)}>{node.fields.number}</Ribbon>
    <Thumbnail />
    <Heading theme={theme}>
      <Anchor to={node.fields.slug} title={node.frontmatter.title}>
        {node.frontmatter.title}
      </Anchor>
    </Heading>
    <Body>
      <Blurb limit={limit}>{node.excerpt}</Blurb>
    </Body>
    <Metadata></Metadata>
    <Tags></Tags>
  </Container>
)

Article.defaultTypes = {
  limit: 100,
}

Article.propTypes = {
  limit: PropTypes.number,
  node: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
}

export default Article
