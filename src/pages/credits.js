import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Credit from "../components/Credit"
import Anchor from "../components/Anchor"
import config from "../config/pages"

const Container = styled.div``

const CreditsPage = () => {
  return (
    <Layout
      config={{ ...config.credits }}
      header={
        <div>
          <h1>Credits and really cool things!</h1>
        </div>
      }
    >
      <Container>
        <div id="hosting">
          <h2>Hosting</h2>
          <div>
            <Credit to="https://netlify.com" title="Netlify">
              is good at hosting static websites in a way that is scalable and
              secure. Ogurinka Benjamin at Dev.to shares
              <Anchor
                to="https://dev.to/ogurinkaben/13-reasons-why-you-should-be-using-netlify-kgl"
                title="13 reasons why you should be using Netlify"
                className="bland"
              >
                13 reasons
              </Anchor>{" "}
              why you should be using it.
            </Credit>
          </div>{" "}
        </div>

        <div id="code">
          <h2>Code</h2>
          <Credit to="https://www.gatsbyjs.com/" title="GatsbyJs">
            {" "}
            is a freaking cool static site generator. It is React-based and
            makes use of pop-tech such as GraphQL, Webpack, modern ES6+
            JavaScript and CSS. Ajay NS at freeCodeCamp shares
            <Anchor
              to="https://www.freecodecamp.org/news/why-you-should-use-gatsbyjs-to-build-static-sites-4f90eb6d1a7b/"
              title="Why you should use GatsbyJS to build static sites"
              className="bland"
            >
              why
            </Anchor>{" "}
            you should use GatsbyJs.
          </Credit>

          <Credit to="https://codepen.io/JohnOSTend/pen/ZXrwoM" title="Ribbons">
            borrowed from{" "}
            <Anchor
              to="https://codepen.io/JohnOSTend"
              title="John on CodePen"
              className="bland"
            >
              @JohnOSTend
            </Anchor>
            .
          </Credit>

          <Credit to="https://emojipedia.org/" title="Emojipedia">
            is an emoji search engine.
          </Credit>
        </div>

        <div id="icons">
          <h2>Icons</h2>
          <Credit
            to="https://www.flaticon.com/authors/kiranshastry"
            title="kiranshastry"
          >
            at{" "}
            <Anchor
              to="https://www.flaticon.com/"
              title="flaticon.com"
              className="bland"
            >
              flaticon.com
            </Anchor>
            :
            <br />
            <Anchor
              className="bland"
              to="https://www.flaticon.com/free-icon/gmail_324123?term=gmail&page=1&position=38"
              title="Gmail"
            >
              Gmail
            </Anchor>
            ,
            <Anchor
              className="bland"
              to="https://www.flaticon.com/free-icon/twitter_255331?term=twitter&page=1&position=20"
              title="Twitter"
            >
              Twitter
            </Anchor>
            ,
            <Anchor
              className="bland"
              to="https://www.iconfinder.com/icons/1220346/overflow_stachoverflow_stack_stackoverflow_icon"
              title="StackOverflow"
            >
              StackOverflow
            </Anchor>
            ,
            <Anchor
              className="bland"
              to="https://www.flaticon.com/free-icon/github_1322053?term=github&page=1&position=46"
              title="GitHub"
            >
              GitHub
            </Anchor>
            ,
            <Anchor
              className="bland"
              to="https://www.flaticon.com/free-icon/linkedin_255319?term=linkedin&page=1&position=23"
              title="LinkedIn"
            >
              LinkedIn
            </Anchor>
            ,
            <Anchor
              className="bland"
              to="https://www.flaticon.com/free-icon/file_1092000"
              title="Download"
            >
              Download
            </Anchor>
            ,
            <Anchor
              className="bland"
              to="https://www.flaticon.com/free-icon/grid_847582"
              title="Grid"
            >
              Grid
            </Anchor>{" "}
            and{" "}
            <Anchor
              className="bland"
              to="https://www.flaticon.com/free-icon/grid_847582"
              title="Listing"
            >
              Listing
            </Anchor>
            .
          </Credit>

          <div>
            <Credit
              to="https://www.flaticon.com/authors/good-ware"
              title="Good Ware"
            >
              at{" "}
              <Anchor
                to="https://www.flaticon.com/"
                title="flaticon.com"
                className="bland"
              >
                flaticon.com
              </Anchor>
              :<br />
              <Anchor
                to="https://www.flaticon.com/free-icon/magnifying-glass_1086933"
                title="Magnifying glass"
                className="bland"
              >
                Magnifying glass
              </Anchor>
            </Credit>

            <Credit
              to="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              at{" "}
              <Anchor
                to="https://www.flaticon.com/"
                title="flaticon.com"
                className="bland"
              >
                flaticon.com
              </Anchor>
              : <br />
              <Anchor
                to="https://www.flaticon.com/free-icon/menu_1828850"
                title="Menu"
                className="bland"
              >
                Menu
              </Anchor>{" "}
              and{" "}
              <Anchor
                to="https://www.flaticon.com/free-icon/close_1828774"
                title="Close"
                className="bland"
              >
                Close
              </Anchor>
              .
            </Credit>
          </div>
        </div>

        <div id="plugins">
          <h2>Official plugins</h2>
          <ul>
            <li>
              <Credit
                to="https://www.gatsbyjs.com/plugins/gatsby-remark-responsive-iframe/"
                title="gatsby-remark-responsive-iframe"
              >
                Wraps iframes or objects (e.g. embedded YouTube videos) within
                markdown files in a responsive elastic container with a fixed
                aspect ratio. This ensures that the iframe or object will scale
                proportionally and to the full width of its container.
              </Credit>
            </li>
            <li>
              <Credit
                to="https://www.gatsbyjs.com/plugins/gatsby-remark-images/"
                title="gatsby-remark-images"
              >
                Processes images in markdown so they can be used in the
                production build. Creates an elastic container to avoid layout
                jumps, generates different image sizes and used the &ldquo;blur
                up&rdquo; technique to display a placeholder image.
              </Credit>
            </li>
            <li>
              <Credit
                to="https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/"
                title="gatsby-remark-prismjs"
              >
                Adds syntax highlighting to code blocks in markdown files using{" "}
                <Anchor
                  to="http://prismjs.com/"
                  title="PrismJS"
                  className="bland"
                >
                  PrimsJS
                </Anchor>
                .
              </Credit>
            </li>
          </ul>

          <h2>Community plugins</h2>
          <ul>
            <li>
              <Credit
                to="https://www.gatsbyjs.com/plugins/gatsby-remark-emoji/"
                title="gatsby-remark-emoji"
              >
                Adds slack-style emojis to markdown files, like{" "}
                <code>:smile:</code> {" -> "} 😀
              </Credit>
            </li>
            <li>
              <Credit
                to="https://www.gatsbyjs.com/plugins/gatsby-remark-embed-gist/"
                title="gatsby-remark-embed-gist"
              >
                Embeds{" "}
                <Anchor
                  to="https://gist.github.com/"
                  title="gist"
                  className="bland"
                >
                  gist
                </Anchor>{" "}
                snippets using the <code>gist:</code> protocol.
              </Credit>
            </li>
            <li>
              <Credit
                to="https://www.gatsbyjs.com/plugins/gatsby-remark-embed-youtube/"
                title="gatsby-remark-embed-youtube"
              >
                Embeds a Youtube video using the <code>youtube:</code> protocol.
              </Credit>
            </li>

            <li>
              <Credit
                to="https://www.gatsbyjs.com/plugins/gatsby-remark-code-titles/"
                title="gatsby-remark-code-titles"
              >
                Adds a code title to code snippets using syntax similar to{" "}
                <code>js:title=example-file.js</code>.
              </Credit>
            </li>
            <li>
              <Credit
                to="https://www.gatsbyjs.com/plugins/gatsby-remark-interactive-gifs/"
                title="gatsby-remark-interactive-gifs"
              >
                Adds interactive animated gifs to markdown files using the{" "}
                <code>gif:</code> protocol. Take a tutorial for example. By the
                time you get the image, the frame could be anywhere in the
                animation as it starts once the gif has downloaded. This plugin
                will wait for the person to interact with it before playing it.
                <ul>
                  <li>
                    <Credit
                      to="https://www.flaticon.com/free-icon/play_281903"
                      title="Play icon"
                    >
                      Play icon made my{" "}
                      <Anchor
                        to="https://www.flaticon.com/authors/vitaly-gorbachev"
                        className="bland"
                      >
                        Vitaly Gorbachev
                      </Anchor>{" "}
                      from{" "}
                      <Anchor to="https://www.flaticon.com" className="bland">
                        www.flaticon.com
                      </Anchor>
                      .
                    </Credit>
                  </li>
                  <li>
                    <Credit
                      to="https://www.flaticon.com/free-icon/image_1186124"
                      title="Photo icon"
                    >
                      Made by{" "}
                      <Anchor
                        to="https://www.flaticon.com/authors/freepik"
                        className="bland"
                      >
                        Freepik
                      </Anchor>{" "}
                      from{" "}
                      <Anchor to="https://www.flaticon.com" className="bland">
                        www.flaticon.com
                      </Anchor>
                      .
                    </Credit>
                  </li>
                  <li>
                    <Credit
                      to="https://icons8.com/preloaders"
                      title="Loading image"
                    >
                      Downloaded from{" "}
                      <Anchor to="https://icons8.com/" className="bland">
                        icons8
                      </Anchor>
                      . Loading, waiting, and spinning animations
                    </Credit>
                  </li>
                </ul>
              </Credit>
            </li>
          </ul>
        </div>

        <div id="photography">
          <h2>Photography</h2>
          <Credit to="https://picsum.photos" title="picsum.photos">
            Lorem Ipsum... but for photos.
          </Credit>

          <Credit to="https://unsplash.com/" title="unsplash">
            Photos for everyone.
          </Credit>
        </div>

        <div id="tools">
          <h2>Tools</h2>
          <Credit
            to="https://code.visualstudio.com/"
            title="Microsoft Visual Studio Code"
          >
            is an open-source and free source code editor developed by Microsoft
            for Windows, Linux and macOS. It includes support for debugging,
            embedded Git control, syntax highlighting, intelligent code
            completion, snippets, and code refactoring. I also work with a bunch
            of
            <Anchor to="https://gist.github.com/cbillowes/b26b35133ee86fbd19bf3825f5a2736c">
              extensions
            </Anchor>
            .
          </Credit>

          <Credit to="https://pixlr.com/editor/" title="pixlr.com">
            is a cloud-based set of image tools and utilities, including a
            number of photo editors, a screen recorder browser extension, and a
            photo sharing service. The suite was intended for non-professionals,
            however the apps range from simple to advanced photo editing.
          </Credit>

          <Credit to="https://www.base64-image.de/" title="Base64 Image">
            is an online image converter converting images to Base64 which can
            be embedded in code instead of making an HTTP request.
          </Credit>

          <Credit to="http://vectorpaint.yaks.co.nz/" title="Vector Paint">
            is an SVG editor which gives you the ability to create unique
            artwork with shapes, color gradients and layers. You can use Vector
            Paint for posters, web graphics or diagrams.
          </Credit>

          <Credit to="https://editor.method.ac" title="Method draw">
            is also an SVG editor which allows you to edit and save SVG images.
          </Credit>
        </div>

        <div id="privacy-policy">
          <h2>Privacy Policy</h2>
          <Credit to="https://www.iubenda.com" title="iubenda">
            Attorney-level solutions to make your websites and apps compliant
            with the law across multiple countries and legislation.
          </Credit>
        </div>
      </Container>
    </Layout>
  )
}

export default CreditsPage
