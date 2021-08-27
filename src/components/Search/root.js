import React from "react"
import PropTypes from "prop-types"

const Search = ({ children }) => {
  return (
    <div className="fixed top-16 left-0 right-0 bottom-0 overflow-scroll bg-default text-default-script z-10">
      {children}
    </div>
  )
}

Search.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Search
