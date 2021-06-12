import _ from "lodash"
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Anchor from "../Anchor"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Tag = styled(Anchor)`
  margin: 0.5rem;
  padding: 0 1rem;
`

function getListOfTags(tags) {
  const flattened = [].concat(...(tags || []))
  return [...new Set(flattened)].sort()
}

export const Cloud = ({ tags }) => {
  return tags.map((tag) => {
    return (
      <Tag key={tag} to={`/tag/${_.kebabCase(tag.toLowerCase())}/`} title={tag}>
        {tag}
      </Tag>
    )
  })
}

Cloud.propTypes = {
  tags: PropTypes.array.isRequired,
}

const getTagsFromEdges = (edges) => {
  return (edges || [])
    .map((item) => item.node.frontmatter)
    .map((item) => item.tags)
    .map((item) => (item ? item : []))
}

const Tags = ({ edges }) => {
  const tags = getTagsFromEdges(edges)
  const listOfTags = getListOfTags(tags)
  return (
    <Container>
      <Cloud tags={listOfTags} />
    </Container>
  )
}

Tags.propTypes = {
  edges: PropTypes.array.isRequired,
}

export default Tags
