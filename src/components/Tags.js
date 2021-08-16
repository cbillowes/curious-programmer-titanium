import React from "react"
import PropTypes from "prop-types"
import Anchor from "./Anchor"
import _ from "lodash"

export const Tag = ({ tag, prefix, className }) => {
  if (!tag) return <span></span>

  return (
    <Anchor
      to={`/tag/${_.kebabCase(tag)}`}
      title={tag.toLowerCase()}
      className={className}
    >
      {prefix}
      {tag.toLowerCase()}
    </Anchor>
  )
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  className: PropTypes.string,
}

const Tags = ({ tags, isButton }) => {
  if (tags.length === 0) return <span></span>

  const className = isButton
    ? "bg-color-1 text-color-1-script py-1 px-4 rounded leading-loose mx-1 mt-4 inline-block"
    : "ml-2 text-gray-500 leading-loose"

  const prefix = isButton ? "" : "#"

  return tags.map((tag, index) => {
    return <Tag key={index} tag={tag} className={className} prefix={prefix} />
  })
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  isButton: PropTypes.bool,
}

export default Tags
