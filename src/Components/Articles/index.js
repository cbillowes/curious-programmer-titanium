import React from "react"
import PropTypes from "prop-types"
import Article from "../Article"

const Articles = ({ edges, limit, theme }) => {
  if (edges && edges.length > 0) {
    return edges.map(({ node }, index) => {
      return <Article key={index} node={node} limit={limit} theme={theme} />
    })
  }

  return <div>Sorry, there are no articles.</div>
}

Articles.propTypes = {
  edges: PropTypes.array,
  theme: PropTypes.string.isRequired,
  limit: PropTypes.number,
}

export default Articles
