const siteMetadata = require("./gatsby-site")

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
          `gatsby-remark-emoji`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-interactive-gifs`,
            options: {
              root: `${__dirname}`,
              src: `${__dirname}/src/images/interactive-gifs`,
              dest: `${__dirname}/public/gifs`,
              play: `${__dirname}/src/images/play.gif`,
              placeholder: `${__dirname}/src/images/placeholder.png`,
              loading: `${__dirname}/src/images/loading.gif`,
              relativePath: `/gifs`,
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: `cbillowes`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // src/components/Theme/common/breakpoints.js: readingPane
              // Module cannot be required because it is not a CommonJS module :(
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 840,
            },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: "/",
        background_color: "#212a39",
        theme_color: "#ffc000",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
  ],
}
