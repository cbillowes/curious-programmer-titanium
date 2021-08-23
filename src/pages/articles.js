import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { LayoutWithoutConstraints } from "../components/Layout"
import Thumbnail from "../components/Thumbnail"
import Anchor from "../components/Anchor"
import Tags from "../components/Tags"

const Articles = ({ edges }) => {
  if (edges && edges.length > 0) {
    return edges.map(({ node }, index) => {
      const { frontmatter, fields } = node
      const isEven = index % 2 === 0

      return (
        <div
          key={index}
          className={`relative md:mt-12 md:mb-16 p-5 flex justify-center flex-col-reverse ${
            isEven ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div
            className={`md:w-1/4 md:mx-16 md:${
              isEven ? "text-left" : "text-right"
            }`}
          >
            <h1 className="text-xl mt-8 md:mt-0 md:text-2xl leading-loose font-semibold hover:text-color-1">
              <Anchor to={fields.slug} title={frontmatter.title}>
                {frontmatter.title}
              </Anchor>
            </h1>
            <div className="leading-loose mb-4">
              <p className="text-neutral">
                {fields.date} - Estimated {node.timeToRead} minute read
              </p>
              {node.excerpt}
            </div>
            <div
              className={`flex items-center flex-wrap ${
                isEven ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <Anchor
                className={`bg-color-1 text-color-1-script rounded py-1 px-3 transform shadow-md hover:bg-green-600 ${
                  isEven ? "mr-2" : "ml-4"
                }`}
                to={fields.slug}
              >
                Read more
              </Anchor>
              <Tags tags={frontmatter.tags} />
            </div>
          </div>
          <div className="md:w-1/4">
            <Thumbnail
              number={index}
              to={fields.slug}
              alt={frontmatter.title}
              photo={frontmatter.photo}
              credit={frontmatter.credit}
              source={frontmatter.creditSource}
              link={frontmatter.creditLink}
              componentName={fields.component}
            />
          </div>
        </div>
      )
    })
  }
}

const ArticlesPage = ({ data }) => {
  const { allMarkdownRemark, site } = data
  const edges = allMarkdownRemark.edges

  return (
    <LayoutWithoutConstraints meta={site.siteMetadata}>
      <div className="bg-default text-default-script">
        <div className="mx-auto pb-5">
          <Articles edges={edges} />
        </div>
      </div>
    </LayoutWithoutConstraints>
  )
}

ArticlesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,

    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

Articles.propTypes = {
  edges: PropTypes.array.isRequired,
  wordCount: PropTypes.number,
}

export const query = graphql`
  query ArticlesPageQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { nin: "/blog/example/" } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
          fields {
            slug
            date(formatString: "LL")
            number
            component
          }
          frontmatter {
            title
            photo
            credit
            creditLink
            creditSource
            tags
          }
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          url
        }
        brand
        description
        keywords
        lang
        title
        url
        social {
          twitter
        }
      }
    }
  }
`

export default ArticlesPage
