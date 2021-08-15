import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { LayoutWithoutConstraints } from "../components/Layout"
import Emoji from "../components/Emoji"
import Thumbnail from "../components/Thumbnail"
import Anchor from "../components/Anchor"

const Articles = ({ edges }) => {
  if (edges && edges.length > 0) {
    return edges.map(({ node }, index) => {
      const { frontmatter, fields } = node

      return (
        <div
          key={index}
          className={`relative mt-32 flex mb-16 justify-center ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div
            className={`w-1/4 mx-16 ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
          >
            <h1 className="text-2xl leading-loose font-semibold">
              {frontmatter.title}
            </h1>
            <div className="leading-loose mb-4">{node.excerpt}</div>
            <Anchor
              className="bg-color-1 text-color-1-script rounded py-1 px-2 transform shadow-md"
              to={fields.slug}
            >
              Read more
            </Anchor>
          </div>
          <div className="w-1/4">
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

const IndexPage = ({ data }) => {
  const { allMarkdownRemark, site } = data
  const edges = allMarkdownRemark.edges

  return (
    <LayoutWithoutConstraints meta={site.siteMetadata}>
      <div className="relative">
        <StaticImage src="../images/profile.jpg" alt="Clarice Bouwer" />
        <div className="absolute top-10 right-10 flex flex-col flex-wrap justify-center items-center w-4/12">
          <div className="bg-color-2 opacity-90 px-5 py-3 inline-block">
            <h1 className="md:text-5xl xl:text-6xl text-color-2-script font-semibold text-center">
              Clarice Bouwer
            </h1>
          </div>
          <div className="hidden md:inline-block bg-color-1  opacity-90 px-5 py-3 mt-4">
            <h2 className="md:text-3xl text-color-1-script font-semibold text-center">
              Senior Software Engineer
            </h2>
          </div>
          <div className="bg-color-3 opacity-90 px-5 py-3 mt-4 inline-block">
            <h2 className="md:text-2xl text-color-3-script font-semibold text-center">
              Cloudsure Ltd
            </h2>
          </div>
          <div className="hidden md:inline-block mt-8 leading-loose text-center md:text-2xl text-black">
            <p>I write code. I share code. I love code.</p>
            <p>I am a curious programmer.</p>
          </div>
          <div className="flex mt-8 items-center">
            <Emoji
              className="text-5xl inline mr-4"
              label="South African flag emoji"
            >
              🇿🇦
            </Emoji>
            <Emoji
              className="text-5xl inline mr-4"
              label="Mauritian flag emoji"
            >
              🇲🇺
            </Emoji>
            <Emoji className="text-5xl inline mr-4" label="Island emoji">
              🏝️
            </Emoji>
            <span>
              <StaticImage
                src="../images/cloudsure.png"
                alt="Cloudsure"
                width={48}
              />
            </span>
          </div>
        </div>
      </div>

      <main className="bg-default text-default-script">
        <div className="mx-auto py-8">
          <Articles edges={edges} />
        </div>
      </main>
    </LayoutWithoutConstraints>
  )
}

IndexPage.propTypes = {
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
  query IndexPageQuery {
    allMarkdownRemark(
      limit: 6
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

export default IndexPage
