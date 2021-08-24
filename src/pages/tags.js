import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { LayoutWithoutConstraints } from "../components/Layout"
import Tags from "../components/Tags"

export const query = graphql`
  query TagsPageQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { nin: "/blog/example/" } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`

const getTags = (edges) => {
  const tags = []
  if (edges && edges.length > 0) {
    edges.forEach(({ node }) => {
      tags.push(...node.frontmatter.tags)
    })
  }
  return [...new Set(tags)]
}

const TagsPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const tags = getTags(edges)
  return (
    <LayoutWithoutConstraints>
      <div className="bg-default text-default-script">
        <div className="mx-auto pb-5 pt-10">
          <h1 className="text-center text-5xl font-bold mb-0 mt-5">
            All the things
          </h1>
          <div className="max-w-screen-md mx-auto p-4">
            <Tags
              tags={tags}
              isButton={true}
              additionalClasses="m-1 py-1 px-3 inline-block bg-color-3 text-color-3-script"
            />
          </div>
        </div>
      </div>
    </LayoutWithoutConstraints>
  )
}

Tags.propTypes = {
  edges: PropTypes.array.isRequired,
}

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TagsPage
