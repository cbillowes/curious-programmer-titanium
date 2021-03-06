require("dotenv").config()
const siteMetadata = require("./gatsby-site")

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
                limit: 125
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Curious Programmer - RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [360, 840, 1366, 1600, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `curious-programmer`,
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `
        {
          allSitePage {
            edges {
              node {
                path
                slug: path
                url: path
              }
            }
          }
        }
        `,
        mapping: {
          allSitePage: {
            sitemap: `pages`,
          },
        },
        exclude: [`/dev-404-page`, `/404`, `/404.html`],
        // optional: create a link in the `<head>` of your site
        createLinkInHead: true,
        // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
        addUncaughtPages: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
        sourceMap: true,
      },
    },
    {
      // This script will not load in develop mode
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-475QC81Y7F"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          // will not be loaded at all for visitors that have ???Do Not Track??? enabled
          respectDNT: process.env.HONOR_DNT || true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `./articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `./resources/source`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: ".",
        background_color: "#171E29",
        theme_color: "#f0ff7b",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    {
      // https://www.gatsbyjs.com/docs/adding-search-with-algolia/
      // Responsible for the indexing
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        skipIndexing: process.env.ALGOLIA_DISABLED || true,
        continueOnFailure: true,
        enablePartialUpdates: true,
        queries: process.env.ALGOLIA_DISABLED ? [] : require("./build/search"),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `gatsby-remark-autolink-header`,
            },
          },
          {
            resolve: `gatsby-remark-interactive-gifs`,
            options: {
              root: `${__dirname}`,
              src: `${__dirname}/src/images/interactive-gifs`,
              dest: `${__dirname}/public/gifs`,
              play: `${__dirname}/src/images/play.png`,
              placeholder: `${__dirname}/src/images/placeholder.gif`,
              loading: `${__dirname}/src/images/loading.gif`,
              relativePath: `/gifs`,
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: `cbillowes`,
              gistDefaultCssInclude: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-remark-embed-youtube`,
            options: {
              // src/components/Theme/common/breakpoints.js: readingPane
              // Module cannot be required because it is not a CommonJS module :(
              width: 840,
              height: 400,
            },
          },
          {
            resolve: `gatsby-remark-code-titles`,
            options: {
              className: `gatsby-remark-code-title`,
            },
          },
          /* Emoji Catalog: https://projects.iamcal.com/emoji-data/table.htm */
          `gatsby-remark-emoji`,
          /*
            Should be last?
            Wraps iframes or objects (e.g. embedded YouTube videos) within
            markdown files in a responsive elastic container with a fixed
            aspect ratio. This ensures that the iframe or object will scale
            proportionally and to the full width of its container.
          */
          `gatsby-remark-responsive-iframe`,
          {
            // keep this as the last item in the plugins array.
            // code blocks are parsed and styled which will break
            // code protocols like gatsby-remark-embed-gist.
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: `??`,
            },
          },
        ],
      },
    },
  ],
}
