import React from "react"
import { Helmet } from "react-helmet"

const Font = () => (
  <Helmet>
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin={true}
    />
    <link
      href="//fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&family=Courier+Prime&family=Handlee&display=swap"
      rel="stylesheet"
      media="screen"
    />
  </Helmet>
)

export default Font
