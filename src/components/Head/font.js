/* eslint-disable react/no-danger */

// Optimization:
// Async CSS + Resource Hints = Speedy Fonts
// https://pagespeedchecklist.com/asynchronous-google-fonts

import React from "react"
import { Helmet } from "react-helmet"

const href =
  "//fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&family=Courier+Prime&family=Handlee&display=swap"

const Font = () => (
  <Helmet>
    {/* connect to domain of font files */}
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin={true}
    />

    {/* increase loading priority */}
    <link rel="preload" as="style" href={href} />

    {/* async CSS */}
    <link
      rel="stylesheet"
      media="print"
      onLoad="this.onload=null;this.removeAttribute('media');"
      href={href}
    />

    {/* no-JS fallback */}
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<link rel="stylesheet" href=${href}>`,
      }}
    />

    {/* no-JS fallback */}
    <script
      dangerouslySetInnerHTML={{
        __html: `alert(${href});`,
      }}
    />
  </Helmet>
)

export default Font
