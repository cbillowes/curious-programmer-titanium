const siteMetadata = require("./gatsby-site")

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-emoji`,
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
