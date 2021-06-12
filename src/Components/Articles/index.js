import React from "react"
import PropTypes from "prop-types"
import Article from "../Article"

const Articles = ({ edges, wordCount }) => {
  if (edges && edges.length > 0) {
    return edges.map(({ node }, index) => {
      return <Article key={index} node={node} wordCount={wordCount} />
    })
  }

  return <div>Sorry, there are no articles.</div>
}

Articles.propTypes = {
  edges: PropTypes.array.isRequired,
  wordCount: PropTypes.number,
}

export default Articles
