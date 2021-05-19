import React from "react"
import PropTypes from "prop-types"
import Article from "../Article"

const ArticlesByTag = ({ edges }) => {
  if (edges && edges.length > 0) {
    return edges.map(({ node }, index) => {
      return <Article key={index} node={node} />
    })
  }

  return <div>Sorry, there are no tags.</div>
}

ArticlesByTag.propTypes = {
  edges: PropTypes.array.isRequired,
}

export default ArticlesByTag
