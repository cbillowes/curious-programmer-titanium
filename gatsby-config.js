const siteMetadata = require("./gatsby-site")

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-77127562-3`,
        head: false,
      },
    },
  ],
}
