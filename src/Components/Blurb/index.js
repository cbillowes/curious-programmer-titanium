import React from "react"
import PropTypes from "prop-types"

const DEFAULT_LIMIT = 50

const squash = (content) => {
  if (!content) return ""
  if (typeof content === "string") return content

  if (Array.isArray(content)) {
    let text = ""
    content.map((html) => {
      if (typeof html === "string") {
        text = `${text} ${html.trim()}`.trim()
      } else {
        const squashed = squash(html.props.children)
        text = `${text} ${squashed}`
      }
      return text
    })
    return text
  }
  if (content.props) {
    const children = content.props.children
    return squash(children)
  }
  return content
}

const split = (text) => {
  return text.trim().split(" ")
}

const truncate = (words, limit) => {
  const text = words.join(" ")
  return words.length > limit ? `${words.splice(0, limit).join(" ")}...` : text
}

const getBlurb = (content, limit) => {
  const squashed = squash(content)
  const words = split(squashed)
  return truncate(words, limit)
}

const Blurb = ({ children, limit }) => (
  <div
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: getBlurb(children, limit) }}
  />
)

Blurb.defaultProps = {
  limit: DEFAULT_LIMIT,
}

Blurb.propTypes = {
  children: PropTypes.node.isRequired,
  limit: PropTypes.number,
}

export default Blurb
