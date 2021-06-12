import React from "react"
import PropTypes from "prop-types"
import SimpleArticle from "../SimpleArticle"

const Everything = ({ edges }) => {
  if (edges && edges.length > 0) {
    return edges.map(({ node }, index) => {
      return <SimpleArticle key={index} node={node} />
    })
  }

  return <div>Sorry, there are no articles.</div>
}

Everything.propTypes = {
  edges: PropTypes.array.isRequired,
}

export default Everything
