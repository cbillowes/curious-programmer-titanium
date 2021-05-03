const metadata = require("./site-metadata")

module.exports = {
  siteMetadata: metadata,
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-77127562-3`,
        head: false,
      },
    },
  ],
}
