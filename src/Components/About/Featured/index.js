import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { size, Things } from "../../Themes"
import Image from "../../Image"
import Ribbon from "../../Ribbon"
import Anchor from "../../Anchor"

import Block from "../../Block"

const Container = styled.div`
  position: relative;
  max-width: ${size.laptopL};
  margin: 0 auto;
`

const Featured = ({ theme }) => (
  <Container>
    <Block
      theme={theme}
      rotate={2}
      direction="left"
      width={{
        blurb: "80%",
        image: "500px",
      }}
      blurb={
        <div>
          <h4>OfferZen: Debugging with Chrome DevTools</h4>
          <p>
            Written in 2018 on the{" "}
            <Anchor to="https://offerzen.com" title="OfferZen">
              OfferZen blog
            </Anchor>
            , I shared what I learned about the Chrome DevTools which could help
            fix and enhance front-end bugs during web development.
          </p>
        </div>
      }
      image={
        <StaticImage
          src="./chrome-dev-tools.gif"
          alt="Demonstrating a feature in the Chrome DevTools"
        />
      }
      caption={
        <p>
          Debugging with Chrome DevTools: Quick Front End Fixes
          <br />
          <Anchor
            to="https://www.offerzen.com/blog/debugging-with-chrome-devtools-quick-front-end-fixes"
            title="Debugging with Chrome DevTools: Quick Front End Fixes on the OfferZen blog"
          >
            Published
          </Anchor>
          on OfferZen
        </p>
      }
      ribbon={
        <Ribbon theme={theme} color={Things.PRIMARY}>
          2018
        </Ribbon>
      }
    />

    <Block
      theme={theme}
      rotate={-2}
      direction="right"
      width={{
        blurb: "50%",
        image: "800px",
      }}
      blurb={
        <div>
          <h4>GirlCode: Imposter Syndrome</h4>
          <p>
            <Anchor to="https://twitter.com/VivaRepublic" title="Viva Republic">
              Viva Republic
            </Anchor>{" "}
            and I got together with the{" "}
            <Anchor to="https://girlcode.co.za/" title="GirlCode">
              GirlCode
            </Anchor>
            team to talk about our experiences of Imposter Syndrome. Although
            the podcast was never released, we sure had a{" "}
            <Anchor
              to="https://twitter.com/VivaRepublic/status/870937603662598145/photo/1"
              title="Twitter moment"
            >
              lot of fun
            </Anchor>{" "}
            making it.
          </p>
        </div>
      }
      image={<StaticImage src="./girlcode.jpg" alt="Girl Code Podcast" />}
      caption={
        <p>
          Interviewed on the
          <Anchor to="https://girlcode.co.za/">GirlCode</Anchor> podcast (never
          released).
        </p>
      }
      ribbon={
        <Ribbon theme={theme} color={Things.SECONDARY}>
          2017
        </Ribbon>
      }
    />

    <Block
      theme={theme}
      rotate={2}
      direction="left"
      width={{
        blurb: "80%",
        image: "400px",
      }}
      blurb={
        <div>
          <h4>ZADevChat: The Imposter Within</h4>
          <p>
            Produced in 2017, I was interviewed by Chantal and Kenneth on the{" "}
            <Anchor to="https://zadevchat.io/" title="ZADevChat">
              ZADevChat
            </Anchor>{" "}
            podcast. We discussed imposter syndrome and how I was managing it.
          </p>
        </div>
      }
      image={<StaticImage src="./zadevchat.png" alt="ZADevChat logo" />}
      caption={
        <p>
          Aired on Episode 67 of the ZADevChat{" "}
          <Anchor
            to="https://zadevchat.io/67/"
            title="67 - The Imposter Within with Clarice Bouwer"
          >
            Podcast
          </Anchor>
        </p>
      }
      ribbon={
        <Ribbon theme={theme} color={Things.TERTIARY}>
          2017
        </Ribbon>
      }
    />

    <Block
      theme={theme}
      rotate={-5}
      direction="right"
      width={{
        blurb: "50%",
        image: "400px",
      }}
      blurb={
        <div>
          <h4>Developer on Fire: Leaving Comfort Behind</h4>
          <p>
            Produced in 2017 on the{" "}
            <Anchor
              to="https://developeronfire.com"
              title="Developer on Fire logo"
            >
              Developer on Fire
            </Anchor>
            podcast, I discussed collaboration, empathy, fear, and being an
            impostor with Dave Rael.
          </p>
        </div>
      }
      image={
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "3rem",
            borderRadius: "10px",
          }}
        >
          <StaticImage
            src="./developer-on-fire.png"
            alt="Developer on Fire logo"
          />
        </div>
      }
      caption={
        <p>
          Episode 202 of the{" "}
          <Anchor
            to="https://developeronfire.com/podcast/episode-202-clarice-bouwer-leaving-comfort-behind"
            title="Leaving Comfort Behind"
          >
            podcast
          </Anchor>
        </p>
      }
      ribbon={
        <Ribbon theme={theme} color={Things.PRIMARY}>
          2017
        </Ribbon>
      }
    />

    <Block
      theme={theme}
      rotate={2}
      direction="left"
      width={{
        blurb: "80%",
        image: "400px",
      }}
      blurb={
        <div>
          <h4>Rubyfuza: The Imposter Within</h4>
          <p>
            I spoke at Rubyfuza 2017 in Cape Town, South Africa about how
            Imposter Syndrome impacts my day-to-day decisions and confidence,
            affects growth by limiting opportunities and makes me feel unworthy.
            I wanted to share my experience & perspective of feeling like a
            fraud with other software professionals.
          </p>
        </div>
      }
      image={
        <StaticImage
          src="./rubyfuza.jpg"
          alt="A presentation slide of my talk at Rubyfuza"
        />
      }
      caption={
        <p>
          My
          <Anchor
            to="https://www.youtube.com/watch?v=fkgAc0DY4s8"
            title="The Imposter Within"
          >
            Talk
          </Anchor>
          at RubyFuza about Imposter Syndrome
        </p>
      }
      ribbon={
        <Ribbon theme={theme} color={Things.SECONDARY}>
          2017
        </Ribbon>
      }
    />

    <Block
      theme={theme}
      rotate={-1}
      direction="right"
      width={{
        blurb: "50%",
        image: "650px",
      }}
      blurb={
        <div>
          <h4>The Imposter Within</h4>
          <p>
            Written in 2016 on my blog{" "}
            <Anchor to="https://curiousprogrammer.dev" title="My blog">
              curious programmer
            </Anchor>
            , I explore different factors of self-doubt, uncertainty, comparison
            to others, and more, that contribute to a toxic feeling of being an
            imposter: feeling like a fraud. This can affect personal growth and
            productivity in the workplace.
          </p>
        </div>
      }
      image={
        <StaticImage
          src="./pensive-woman-with-rain.jpg"
          alt="Pensive woman looking out a window at the rain"
        />
      }
      caption={
        <p>
          <Anchor
            to="https://curiousprogrammer.dev/blog/the-imposter-within"
            title="The Imposter Within"
          >
            Article
          </Anchor>
          published on my blog
        </p>
      }
      ribbon={
        <Ribbon theme={theme} color={Things.TERTIARY}>
          2016
        </Ribbon>
      }
    />

    <Block
      theme={theme}
      rotate={-1}
      direction="left"
      width={{
        blurb: "80%",
        image: "400px",
      }}
      blurb={
        <div>
          <h4>Finding Opportunities in the Mistakes We Make</h4>
          <p>
            In 2016 I was published on the{" "}
            <Anchor to="https://alistapart.com/" title="A List Apart">
              A List Apart
            </Anchor>{" "}
            website where I share my career experience six years in and discuss
            the changes I would have made to improve my experience as a software
            developer.
          </p>
        </div>
      }
      image={
        <div
          style={{
            padding: "3rem",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
          }}
        >
          <StaticImage src="./alist-apart.png" alt="A List Apart logo" />
        </div>
      }
      caption={
        <p>
          <Anchor
            to="https://alistapart.com/article/finding-opportunities-in-the-mistakes-we-make/"
            title="Finding Opportunities in the Mistakes We Make"
          >
            Published
          </Anchor>
          an article on A List Apart titled Finding Opportunities in the
          Mistakes We Make
        </p>
      }
      ribbon={
        <Ribbon theme={theme} color={Things.PRIMARY}>
          2016
        </Ribbon>
      }
    />
  </Container>
)

export default Featured

Featured.propTypes = {
  theme: PropTypes.string.isRequired,
}
