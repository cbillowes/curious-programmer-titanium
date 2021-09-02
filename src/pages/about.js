import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import List from "../components/Articles/List"
import Anchor from "../components/Anchor"
import Emoji from "../components/Emoji"
import { StaticImage } from "gatsby-plugin-image"

const greetings = [
  "Hello",
  "Dag sê",
  "Bonjour",
  "Salut",
  "Hola",
  "¿Qué tal?",
  "Zdravstvuyte",
  "Privet",
  "Nǐn hǎo",
  "Ciao",
  "Konnichiwa",
  "Yā, Yō",
  "Guten Tag",
  "Hallo",
  "Hi",
  "What's up?",
  "Olá",
  "Hey",
  "Anyoung haseyo",
  "Anyoung",
  "Asalaam alaikum",
  "Goddag",
  "Halløj",
  "Habari",
  "Yassou",
  "Cześć",
  "Halo",
  "Namaste",
  "Shalom",
  "Merhaba",
  "Hej",
  "Hei",
]

const Articles = ({ edges }) => {
  return <List edges={edges} />
}

const getRandomGreeting = () => {
  const index = Math.floor(Math.random() * greetings.length)
  const greeting = greetings[index]
  return greeting
}

const AboutPage = ({ data }) => {
  const [greeting, setGreeting] = useState(getRandomGreeting())
  const { allMarkdownRemark, site } = data
  const edges = allMarkdownRemark.edges
  const { title } = site.siteMetadata

  const greet = () => {
    const greeting = getRandomGreeting()
    setGreeting(greeting)
  }

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: "A story about me",
        siteTitle: title,
        crawl: false,
      }}
    >
      <div className="pt-16">
        <div className="text-center relative">
          <div className="relative inline-block">
            <StaticImage
              src="../images/avatar.png"
              alt="My avatar"
              quality={50}
              style={{
                borderRadius: "50%",
                width: "300px",
                height: "300px",
              }}
            />
            <div
              className="absolute right-0 top-0 animate-wave hover:animate-quick-wave hover:border-2 cursor-pointer"
              onClick={greet}
              style={{
                transformOrigin: "70% 70%",
              }}
            >
              <StaticImage
                src="../images/emoji-waving-hand.png"
                alt="Waving hand emoji"
                quality={50}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "30%",
                }}
              />
            </div>
          </div>
          <h1 className="text-2xl lg:text-5xl xl:text-8xl text-center mb-4">
            <span className="font-semibold">{greeting}!</span>
          </h1>
          <div className="text-xl leading-loose">
            <p>
              My name is Clarice Bouwer and I am a Senior Software Engineer
              working at Cloudsure Limited in Mauritius{" "}
              <Emoji className="inline-block">🏝️</Emoji>
            </p>
            <p>
              I obsess over Clojure(Script), Gatsby and Git{" "}
              <Emoji className="inline-block">🤤</Emoji>
            </p>
            <p>
              It all Sounds fancy{" "}
              <Anchor to="/blog/the-imposter-within/" useMarkdownStyles={true}>
                doesn&apos;t
              </Anchor>{" "}
              it?
            </p>
          </div>
        </div>
        <div className="bg-default text-default-script mt-24">
          <h2 className="text-xl lg:text-3xl xl:text-6xl text-center mb-4">
            <strong className="font-semibold">Featured</strong> articles
          </h2>
          <div className="mx-auto pb-16 text-center">
            <Articles edges={edges} />
            <Anchor
              to="/blog"
              title="All articles"
              className="bg-color-1-alternative text-color-1-script rounded py-1 px-3 transform shadow-md hover:bg-color-1"
            >
              Discover more
            </Anchor>
          </div>
        </div>
      </div>
    </Layout>
  )
}

AboutPage.propTypes = {
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
}

export const query = graphql`
  query AboutPageQuery {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { featured: { eq: true } } }
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
            photo
            credit
            source
            link
          }
          frontmatter {
            title
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

export default AboutPage
