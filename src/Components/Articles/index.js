import React from "react"
import PropTypes from "prop-types"
import Article from "../Article"

const Articles = ({ edges, limit }) => {
  if (edges && edges.length > 0) {
    return edges.map(({ node }, index) => {
      return <Article key={index} node={node} limit={limit} />
    })
  }

  return <div>Sorry, there are no articles.</div>
}

Articles.propTypes = {
  edges: PropTypes.array.isRequired,
  limit: PropTypes.number,
}

export default Articles
