import React from "react"
import styled from "styled-components"
import { CookiesProvider, useCookies } from "react-cookie"
import Layout from "../components/Layout"
import Credit from "../components/Credit"
import Anchor from "../components/Anchor"
import {
  getToggledTheme,
  THEME_COOKIE_NAME,
  MAX_READING_PANE_WIDTH,
  Things,
  getShadow,
  getBase,
} from "../components/Themes"

const Container = styled.div`
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.85rem;
  }

  .unstyled {
    background-color: transparent;
    padding: 0;
    color: ${(props) => getBase(props.theme, Things.PRIMARY)};
    text-shadow: 1px 1px 1px
      ${(props) => getShadow(props.theme, Things.PRIMARY)};
  }
`

const CreditsPage = () => {
  const [cookie, setCookie] = useCookies([THEME_COOKIE_NAME])
  const theme = cookie.theme

  return (
    <CookiesProvider>
      <Layout
        title="Credits & Resources"
        description="A list of libraries, frameworks, services, plugins, tools and stuff that I use on my blog."
        keywords="react, netlify, gatsby, flaticon.com, unsplash, picsum, pixlr, vscode"
        crawl={true}
        maxWidth={MAX_READING_PANE_WIDTH}
        toggleTheme={(theme) => getToggledTheme(theme)}
        themeCookieSetter={setCookie}
        theme={theme}
        header={
          <div>
            <h1>Credits and really cool things!</h1>
          </div>
        }
      >
        <Container theme={theme}>
          <div>
            <h2>Hosting</h2>
            <Credit to="https://netlify.com" title="Netlify">
              is good at hosting static websites in a way that is scalable and
              secure.{" "}
              <Anchor
                to="https://dev.to/ogurinkaben/13-reasons-why-you-should-be-using-netlify-kgl"
                className="unstyled"
              >
                Ogurinka Benjamin
              </Anchor>{" "}
              shares 13 reasons why you should be using it.
            </Credit>
          </div>

          <div>
            <h2>Code</h2>
            <Credit to="https://www.gatsbyjs.com/" title="Gatsby">
              is a React-based, GraphQL powered, static site generator. It is
              the super cool and conveniently generates my blog from markdown
              files.
              <h3>Plugins</h3>
              <ul>
                <li>
                  <Credit
                    to="https://github.com/gatsbyjs/gatsby-starter-default"
                    title="gatsby-starter-default"
                  >
                    is a boilerplate with some bells and whistles to help
                    kick-off new Gatsby projects. This is the starter that I
                    used for my blog.
                  </Credit>
                </li>
                <li>
                  <Credit to="https://fortawesome.com/" title="fortawesome">
                    builds and manages icons and typefaces in a single place,
                    then serves them with a single line of code.
                  </Credit>
                </li>
                <li>
                  <Credit
                    to="https://github.com/zenorocha/clipboard.js#readme"
                    title="clipboard"
                  >
                    is a modern copy to clipboard library with no flash and
                    gzipped to 3kb.
                  </Credit>
                </li>
                <li>
                  <Credit
                    to="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap#readme"
                    title="gatsby-plugin-sitemap"
                  ></Credit>
                </li>
                <li>
                  <Credit
                    to="https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/"
                    title="gatsby-plugin-robots-txt"
                  ></Credit>
                </li>
                <li>
                  <Credit
                    to="https://github.com/Rulikkk/gatsby-remark-emoji#readme"
                    title="gatsby-remark-emoji"
                  >
                    adds slack-style emoji to gatsby&rsquo;s markdown 🚀
                  </Credit>
                </li>
                <li>
                  <Credit
                    to="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs#readme"
                    title="gatsby-remark-prismjs"
                  >
                    adds syntax highlighting to code blocks in markdown files
                    using
                    <Anchor className="unstyled" to="https://prismjs.com/">
                      PrismJs
                    </Anchor>
                    .
                  </Credit>
                </li>
                <li>
                  <Credit
                    to="https://www.npmjs.com/package/gatsby-remark-responsive-iframe"
                    title="gatsby-remark-responsive-iframe"
                  >
                    wraps iframes or objects (e.g. embedded YouTube videos)
                    within markdown files in a responsive elastic container with
                    a fixed aspect ratio. This ensures that the iframe or object
                    will scale proportionally and to the full width of its
                    container.
                  </Credit>
                </li>
                <li>
                  <Credit
                    to="https://github.com/ntwcklng/gatsby-remark-embed-youtube#readme"
                    title="gatsby-remark-embed-youtube"
                  ></Credit>
                </li>
                <li>
                  <Credit
                    to="https://github.com/weirdpattern/gatsby-remark-embed-gist#readme"
                    title="gatsby-remark-embed-gist"
                  ></Credit>
                </li>
              </ul>
            </Credit>
          </div>

          <div>
            <h2>Code</h2>
            <Credit
              to="https://codepen.io/JohnOSTend/pen/ZXrwoM"
              title="Ribbons"
            >
              implemented using the &ldquo;Various Styles CSS Ribbons&rdquo;
              through a pen by
              <Anchor to="https://codepen.io/JohnOSTend">John</Anchor>.
            </Credit>
          </div>

          <div>
            <h2>Emoji Resources</h2>
            <Credit
              to="https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb"
              title="oliveratgithub/emojis.json"
            >
              is the emoji-list full of emojis, names, short codes, unicode and
              html entities that I reference.
            </Credit>

            <Credit
              to="https://www.webfx.com/tools/emoji-cheat-sheet/"
              title="webfx.com"
            >
              emoji cheat sheet.
            </Credit>
          </div>

          <div>
            <h2>Icons</h2>
            <Credit
              to="https://www.flaticon.com/free-icon/gmail_324123?term=gmail&page=1&position=38"
              title="Gmail"
            >
              &nbsp;
            </Credit>
            <Credit
              to="https://www.flaticon.com/free-icon/twitter_255331?term=twitter&page=1&position=20"
              title="Twitter"
            >
              &nbsp;
            </Credit>
            <Credit
              to="https://www.iconfinder.com/icons/1220346/overflow_stachoverflow_stack_stackoverflow_icon"
              title="StackOverflow"
            >
              &nbsp;
            </Credit>
            <Credit
              to="https://www.flaticon.com/free-icon/github_1322053?term=github&page=1&position=46"
              title="GitHub"
            >
              &nbsp;
            </Credit>
            <Credit
              to="https://www.flaticon.com/free-icon/linkedin_255319?term=linkedin&page=1&position=23"
              title="LinkedIn"
            >
              &nbsp;
            </Credit>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/kiranshastry"
              title="Kiranshastry"
            >
              Kiranshastry
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </div>

          <div>
            <h2>Icons</h2>
            <Credit
              to="https://www.flaticon.com/free-icon/file_1092000"
              title="Download icon"
            >
              Made by{" "}
              <Anchor to="https://www.flaticon.com/authors/kiranshastry">
                Kiranshastry
              </Anchor>{" "}
              from{" "}
              <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
            </Credit>
            <Credit
              to="https://www.flaticon.com/free-icon/grid_847582"
              title="Grid icon"
            >
              Made by{" "}
              <Anchor to="https://www.flaticon.com/authors/kiranshastry">
                Kiranshastry
              </Anchor>{" "}
              from{" "}
              <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
            </Credit>
            <Credit
              to="https://www.flaticon.com/free-icon/grid_847582"
              title="Listing icon"
            >
              Made by{" "}
              <Anchor to="https://www.flaticon.com/authors/kiranshastry">
                Kiranshastry
              </Anchor>{" "}
              from{" "}
              <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
            </Credit>
            <Credit
              to="https://www.flaticon.com/free-icon/magnifying-glass_1086933"
              title="Magnifying glass icon"
            >
              Made by{" "}
              <Anchor to="https://www.flaticon.com/authors/good-ware">
                Good Ware
              </Anchor>{" "}
              from{" "}
              <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
            </Credit>
            <Credit
              to="https://www.flaticon.com/free-icon/menu_1828850"
              title="Menu icon"
            >
              Made by{" "}
              <Anchor to="https://www.flaticon.com/authors/pixel-perfect">
                Pixel perfect
              </Anchor>{" "}
              from{" "}
              <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
            </Credit>
            <Credit
              to="https://www.flaticon.com/free-icon/close_1828774"
              title="Close icon"
            >
              Made by{" "}
              <Anchor to="https://www.flaticon.com/authors/pixel-perfect">
                Pixel perfect
              </Anchor>{" "}
              from{" "}
              <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
            </Credit>
          </div>

          <div>
            <h2>Interactive animated gifs</h2>
            <Credit
              to="https://www.flaticon.com/free-icon/play_281903"
              title="Play icon"
            >
              Play icon made my{" "}
              <Anchor to="https://www.flaticon.com/authors/vitaly-gorbachev">
                Vitaly Gorbachev
              </Anchor>{" "}
              from{" "}
              <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
            </Credit>
            <Credit
              to="https://www.flaticon.com/free-icon/photo_2793644"
              title="Photo icon"
            >
              Made by{" "}
              <Anchor to="https://www.flaticon.com/authors/freepik">
                Freepik
              </Anchor>{" "}
              from{" "}
              <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
            </Credit>
            <Credit to="https://loading.io/" title="Loading image">
              Generated from loading.io - ajax Loader, animated icons, live
              backgrounds.
            </Credit>
          </div>
          <div>
            <h2>Photography</h2>
            <Credit to="https://picsum.photos" title="picsum.photos">
              Lorem Ipsum... but for photos.
            </Credit>

            <Credit to="https://unsplash.com/" title="unsplash">
              Photos for everyone.
            </Credit>
          </div>

          <div>
            <h2>Tools</h2>
            <Credit
              to="https://code.visualstudio.com/"
              title="Microsoft Visual Studio Code"
            >
              is an open-source and free source code editor developed by
              Microsoft for Windows, Linux and macOS. It includes support for
              debugging, embedded Git control, syntax highlighting, intelligent
              code completion, snippets, and code refactoring. I also work with
              a bunch of
              <Anchor to="https://gist.github.com/cbillowes/b26b35133ee86fbd19bf3825f5a2736c">
                extensions
              </Anchor>
              .
            </Credit>

            <Credit to="https://pixlr.com/editor/" title="pixlr.com">
              is a cloud-based set of image tools and utilities, including a
              number of photo editors, a screen recorder browser extension, and
              a photo sharing service. The suite was intended for
              non-professionals, however the apps range from simple to advanced
              photo editing.
            </Credit>

            <Credit to="https://www.base64-image.de/" title="Base64 Image">
              is an online image converter converting images to Base64 which can
              be embedded in code instead of making an HTTP request.
            </Credit>

            <Credit to="http://vectorpaint.yaks.co.nz/" title="Vector Paint">
              is an SVG editor which gives you the ability to create unique
              artwork with shapes, color gradients and layers. You can use
              Vector Paint for posters, web graphics or diagrams.
            </Credit>

            <Credit to="https://editor.method.ac" title="Method draw">
              is also an SVG editor which allows you to edit and save SVG
              images.
            </Credit>
          </div>

          <h2>Privacy Policy</h2>
          <div>
            <Credit to="https://www.iubenda.com" title="iubenda">
              Attorney-level solutions to make your websites and apps compliant
              with the law across multiple countries and legislation.
            </Credit>
          </div>
        </Container>
      </Layout>
    </CookiesProvider>
  )
}

export default CreditsPage
