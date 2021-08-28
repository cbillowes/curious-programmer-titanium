require("dotenv").config()
const siteMetadata = require("./gatsby-site")

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
              inlineCodeMarker: `±`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-77127562-3`,
        head: false,
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
        skipIndexing: process.env.ALGOLIA_INDEXING_ENABLED || true,
        queries: require("./build/search"),
      },
    },
  ],
}
