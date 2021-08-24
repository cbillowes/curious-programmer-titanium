import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from "../components/Layout"
import { FaTwitter, FaLinkedinIn } from "react-icons/fa/index"
import { ImStackoverflow } from "react-icons/im/index"
import { VscGithub } from "react-icons/vsc/index"
import Emoji from "../components/Emoji"
import SocialMediaIcon from "../components/SocialMediaIcon"
import List from "../components/Articles/List"

const Articles = ({ edges }) => {
  return <List edges={edges} />
}

const IndexPage = ({ data }) => {
  const { allMarkdownRemark, site } = data
  const edges = allMarkdownRemark.edges
  const { title } = site.siteMetadata

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: "Welcome",
        siteTitle: title,
      }}
    >
      <div className="relative">
        <StaticImage src="../images/profile.jpg" alt="Clarice Bouwer" />
        <div className="hidden absolute top-2 right-2 md:top-10 md:right-10 md:flex flex-col flex-wrap justify-center items-center w-5/12 md:w-4/12">
          <div className="text-color-2-script bg-color-2 opacity-80 p-2 md:px-5 md:py-3">
            <h1 className="text-md md:text-5xl xl:text-6xl font-semibold text-center">
              Clarice Bouwer
            </h1>
          </div>
          <div className="bg-color-1 text-color-1-script md:bg-color-1 opacity-80 py-1 md:p-2 md:px-5 md:py-3 mt-1 md:mt-4">
            <h2 className="text-sm md:text-3xl font-semibold text-center">
              Senior Software Engineer
            </h2>
          </div>
          <div className="hidden md:inline-block text-color-3-script md:bg-color-3 opacity-80 pt-1 md:p-2 md:px-5 md:py-3 md:mt-4">
            <h2 className="text-xs md:text-2xl font-semibold text-center">
              Cloudsure Ltd
            </h2>
          </div>
          <div className="hidden md:inline-block mt-8 leading-loose text-center md:text-2xl text-black">
            <p>I write code. I share code. I love code.</p>
            <p>I am a curious programmer.</p>
          </div>
          <div className="hidden md:flex mt-8 items-center">
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

      <div className="md:hidden">
        <div className="text-sm leading-relaxed text-center text-default-script">
          <div className="text-color-2-script bg-color-2 opacity-80 p-2">
            <h1 className="text-lg font-semibold text-center">
              Clarice Bouwer
            </h1>
          </div>
          <div className="text-color-1-script bg-color-1 opacity-80 py-1">
            <h2 className="text-md font-semibold text-center">
              Senior Software Engineer
            </h2>
          </div>
          <div className="text-color-3-script bg-color-3 opacity-80 py-1">
            <h3 className="text-xs font-semibold text-center">
              Cloudsure, Mauritius
            </h3>
          </div>
          <p className="mt-3">I write code. I share code. I love code.</p>
          <p>I am a curious programmer.</p>
        </div>
      </div>

      <div className="flex justify-center">
        <SocialMediaIcon
          to="https://www.linkedin.com/in/cbouwer/"
          title="LinkedIn"
        >
          <FaLinkedinIn className="text-linkedin" />
        </SocialMediaIcon>

        <SocialMediaIcon to="https://github.com/cbillowes" title="GitHub">
          <VscGithub className="text-github" />
        </SocialMediaIcon>

        <SocialMediaIcon
          to="https://stackoverflow.com/users/849986/clarice-bouwer"
          title="Stack Overflow"
        >
          <ImStackoverflow className="text-stackoverflow" />
        </SocialMediaIcon>

        <SocialMediaIcon to="https://twitter.com/cbillowes" title="Twitter">
          <FaTwitter className="text-twitter" />
        </SocialMediaIcon>
      </div>

      <div className="bg-default text-default-script">
        <div className="mx-auto pb-5">
          <Articles edges={edges} />
        </div>
      </div>
    </Layout>
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
      limit: 10
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
