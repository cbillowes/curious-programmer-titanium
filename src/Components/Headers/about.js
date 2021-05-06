import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite"
import Anchor from "../Anchor"
import {
  getBase,
  getShadow,
  getText,
  Things,
  device,
  size,
  PADDING_BETWEEN_BODY_AND_WINDOW,
} from "../Themes"

const Container = styled.div``

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  min-height: 1000px;
  box-shadow: ${(props) => getShadow(props.theme, Things.CARD)} 0px 7px 29px 0px;

  @media ${device.laptop} {
    height: auto;
    width: auto;
  }
`

const Overlay = styled.div`
  background-color: ${(props) => getBase(props.theme, Things.HERO)};
  opacity: 0.6;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media ${device.laptop} {
    display: none;
  }
`

const Hero = styled.div`
  background-color: ${(props) => getBase(props.theme, Things.HERO)};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media ${device.laptop} {
    position: relative;
  }
`

const Greetings = styled.div`
  position: absolute;
  right: 5rem;
  top: 2rem;
  max-width: 550px;
  padding-left: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    text-align: right;
    color: ${(props) => getText(props.theme, Things.HERO)};
    text-shadow: 1px 1px 5px ${(props) => getShadow(props.theme, Things.HERO)};
    margin-bottom: 0;
  }

  p {
    font-weight: 100;
    font-size: 1.25rem;
    line-height: 225%;
    text-align: right;
    color: ${(props) => getText(props.theme, Things.HERO)};
    text-shadow: 1px 1px 5px ${(props) => getShadow(props.theme, Things.HERO)};
  }

  .emojis {
    font-size: 4rem;
    margin-top: 10%;
    text-align: right;
  }

  @media ${device.laptop} {
    position: relative;
    top: auto;
    right: auto;
    max-width: 100%;
    padding: ${PADDING_BETWEEN_BODY_AND_WINDOW};

    h1 {
      font-size: 2.5rem;
    }
  }
`

const Contact = styled.div`
  margin-top: 4rem;
  text-align: right;

  a {
    font-size: 2rem;
    padding: 1rem;
    background-color: transparent;
    color: ${(props) => getBase(props.theme, Things.CONNECT)}cc;

    &:hover {
      color: ${(props) => getBase(props.theme, Things.PRIMARY)};
    }

    &:last-child {
      padding-right: 0;
    }
  }

  @media ${device.laptop} {
    margin-top: 1rem;
  }
`

const Section = styled.div`
  padding: ${PADDING_BETWEEN_BODY_AND_WINDOW};
  max-width: ${size.laptop};
  margin: 0 auto;
`

const Image = styled.div`
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
  margin-right: ${(props) => (props.position === "left" ? "5rem" : "0")};
  margin-left: ${(props) => (props.position === "right" ? "5rem" : "0")};
  width: ${(props) => props.width}px;
  float: ${(props) => props.position || "left"};
  box-shadow: ${(props) => getShadow(props.theme, Things.CARD)} 0px 7px 29px 0px;
  background-color: ${(props) => getBase(props.theme, Things.CARD)};
  transform: rotate(${(props) => props.rotate || "0"}deg);

  p {
    font-size: 80%;
    line-height: 1.5rem;
    text-align: center;
  }

  img {
    border-radius: 10px;
  }

  @media screen and (max-width: 840px) {
    &,
    & img {
      width: 100%;
      float: none;
      margin: 0;
      transform: none;
    }
  }
`

const Block = styled.div`
  margin-bottom: 10rem;
  clear: both;

  &:last-child {
    margin-bottom: 0;
  }
`

const SloganBlock = styled.div`
  padding: 1.5rem 5rem;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: -16rem;

  @media ${device.laptop} {
    padding: ${PADDING_BETWEEN_BODY_AND_WINDOW};
    max-width: ${size.tablet};
    margin-top: 0;
  }
`

const BabySlogan = styled.h3`
  span {
    display: inline;
    font-size: 3rem;
    line-height: 180%;
    color: ${(props) => getText(props.theme, Things.HERO)};
    text-shadow: 1px 1px 1px ${(props) => getShadow(props.theme, Things.HERO)};
    background-color: ${(props) => getBase(props.theme, Things.PRIMARY)};
    padding: 0.5rem;

    @media ${device.laptop} {
      font-size: 1.25rem;
      line-height: 200%;
    }
  }
  transform: rotate(1deg);
  margin-bottom: 0.5rem;
`

const Slogan = styled.h2`
  span {
    display: inline;
    font-size: 5rem;
    color: ${(props) => getText(props.theme, Things.HERO)};
    text-shadow: 1px 1px 1px ${(props) => getShadow(props.theme, Things.HERO)};
    background-color: ${(props) => getBase(props.theme, Things.SECONDARY)};
    padding: 0.5rem;
    line-height: 160%;

    @media ${device.laptop} {
      font-size: 2rem;
      line-height: 190%;
    }
  }
  margin-top: -1rem;
  transform: rotate(-2deg) translateX(-3rem);

  @media ${device.laptop} {
    transform: rotate(-2deg) translateX(1rem);
  }
`

const Featured = styled.div`
  padding: ${PADDING_BETWEEN_BODY_AND_WINDOW};
  max-width: ${size.laptop};
  margin: 0 auto;
  margin-bottom: 15rem;
`

const Header = ({ theme }) => (
  <Container>
    <Wrapper theme={theme}>
      <Hero theme={theme}>
        <StaticImage src="./profile.jpg" alt="Clarice Bouwer" />
        <Overlay theme={theme} />
        <Greetings theme={theme}>
          <h1>{`< Hello World />`}</h1>
          <p>
            <span>
              My name is <strong>Clarice Bouwer</strong>, a Senior Software
              Engineer from South Africa. I specialize in Clojure(Script) and
              other web technologies. I seriously love what I do!
            </span>
          </p>
          <p>
            <span>
              I work at <strong>Cloudsure</strong> in Mauritius. I&rsquo;m
              loving it!
            </span>{" "}
          </p>{" "}
          <div className="emojis">
            🇿🇦 🇲🇺 🏝️{" "}
            <StaticImage src="./cloudsure.png" alt="Cloudsure" width={55} />
          </div>
          <Contact theme={theme}>
            <Anchor
              to="https://github.com/cbillowes"
              title="Check out my code on GitHub"
            >
              <FaGithub />
            </Anchor>

            <Anchor
              to="https://twitter.com/cbillowes"
              title="Follow me on Twitter"
            >
              <FaTwitter />
            </Anchor>

            <Anchor
              to="https://www.linkedin.com/in/cbouwer/"
              title="Squizz through my resume on LinkedIn"
            >
              <FaLinkedin />
            </Anchor>

            <Anchor
              to="https://stackoverflow.com/users/849986/clarice-bouwer"
              title="Look at my profile on StackOverflow"
            >
              <FaStackOverflow />
            </Anchor>

            <Anchor
              to="https://clarice.bouwer.dev"
              title="Check out my portfolio website"
            >
              <CgWebsite />
            </Anchor>
          </Contact>
        </Greetings>
      </Hero>
    </Wrapper>
    <SloganBlock>
      <BabySlogan theme={theme}>
        <span>I write code. I share code. I love code.</span>
      </BabySlogan>
      <Slogan theme={theme}>
        <span>I am a curious programmer.</span>
      </Slogan>
    </SloganBlock>
    <Featured>
      <Block>
        <Image width={400} position="left" theme={theme} rotate={2}>
          <StaticImage
            src="../../images/about/pensive-woman-with-rain.jpg"
            alt="Pensive woman looking out a window at the rain"
          />
          <p>
            The Imposter Within
            <Anchor
              to="https://curiousprogrammer.dev/blog/the-imposter-within"
              title="The Imposter Within"
            >
              Article
            </Anchor>
          </p>
        </Image>
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
      </Block>
      <Block>
        <Image width={400} position="right" theme={theme} rotate={-2}>
          <StaticImage
            src="../../images/about/chrome-dev-tools.gif"
            alt="Demonstrating a feature in the Chrome DevTools"
          />
          <p>
            Debugging with Chrome DevTools: Quick Front End Fixes
            <Anchor
              to="https://www.offerzen.com/blog/debugging-with-chrome-devtools-quick-front-end-fixes"
              title="The Imposter Within"
            >
              Published
            </Anchor>
          </p>
        </Image>
        <h4>Debugging with Chrome DevTools: Quick Front End Fixes</h4>
        <p>
          Written in 2018 on the{" "}
          <Anchor to="https://offerzen.com" title="OfferZen">
            OfferZen blog
          </Anchor>
          , I share what I learned about the Chrome DevTools which can help fix
          and enhance front-end bugs and development.
        </p>
      </Block>
      <Block>
        <Image width={300} position="left" theme={theme} rotate={2}>
          <StaticImage
            src="../../images/about/developer-on-fire.png"
            alt="Developer on Fire logo"
          />
          <p>
            Episode 202 | Leaving Comfort Behind
            <Anchor
              to="https://developeronfire.com/podcast/episode-202-clarice-bouwer-leaving-comfort-behind"
              title="Leaving Comfort Behind"
            >
              Podcast
            </Anchor>
          </p>
        </Image>
        <h4>Episode 202 | Leaving Comfort Behind</h4>
        <p>
          Produced in 2017 on the{" "}
          <Anchor to="https://developeronfire.com" title="OfferZen">
            Developer on Fire
          </Anchor>
          podcast, I discuss collboration, empathy, fear, and being an impostor
          with Dave Rael.
        </p>
      </Block>
      <Block>
        <Image width={400} position="right" theme={theme} rotate={-1}>
          <StaticImage
            src="../../images/about/rubyfuza.jpg"
            alt="A presentation slide of my talk at Rubyfuza"
          />
          <p>
            Rubyfuza 2017: The Imposter Within
            <Anchor
              to="https://www.youtube.com/watch?v=fkgAc0DY4s8"
              title="The Imposter Within"
            >
              Talk
            </Anchor>
          </p>
        </Image>
        <h4>Rubyfuza 2017: The Imposter Within</h4>
        <p>
          I spoke at Rubyfuza 2017 in Cape Town, South Africa about how Imposter
          Syndrome impacts my day-to-day decisions and confidence, affects
          growth by limiting opportunities and makes me feel unworthy. I wanted
          to share my experience & perspective of feeling like a fraud with
          other software professionals.
        </p>
      </Block>
      <Block>
        <Image width={300} position="left" theme={theme} rotate={-2}>
          <StaticImage
            src="../../images/about/alist-apart.png"
            alt="A List Apart logo"
          />
          <p>
            Finding Opportunities in the Mistakes We Make
            <Anchor
              to="https://alistapart.com/article/finding-opportunities-in-the-mistakes-we-make/"
              title="Finding Opportunities in the Mistakes We Make"
            >
              Published
            </Anchor>
          </p>
        </Image>
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
      </Block>
      <Block>
        <Image width={300} position="right" theme={theme} rotate={-2}>
          <StaticImage
            src="../../images/about/zadevchat.png"
            alt="ZADevChat logo"
          />
          <p>
            67 - The Imposter Within with Clarice Bouwer
            <Anchor
              to="https://zadevchat.io/67/"
              title="67 - The Imposter Within with Clarice Bouwer"
            >
              Podcast
            </Anchor>
          </p>
        </Image>
        <h4>67 - The Imposter Within with Clarice Bouwer</h4>
        <p>
          Produced in 2017, I was interviewed by Chantal and Kenneth on the{" "}
          <Anchor to="https://zadevchat.io/" title="ZADevChat">
            ZADevChat
          </Anchor>{" "}
          podcast. We discussed imposter syndrome and how I was managing it.
        </p>
      </Block>
    </Featured>
    <Section>
      <Block>
        <h2>People centric.</h2>
        <Image width={400} position="right" theme={theme} rotate={-3}>
          <StaticImage
            src="../../images/about/legos.jpg"
            alt="People holding lego men"
          />
          <p>
            Photo by{" "}
            <Anchor
              to="https://unsplash.com/@vladhilitanu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              title="Vlad Hilitanu"
            >
              Vlad Hilitanu
            </Anchor>{" "}
            on{" "}
            <Anchor
              to="https://unsplash.com/s/photos/gather?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              title="Unsplash"
            >
              Unsplash
            </Anchor>
          </p>
        </Image>
        <p>
          The web is pretty, and then it is not. I&rsquo;ve seen my fare share
          of pretty, with buttons and hero images and often the latest and
          greatest bells and whistles. I&rsquo;ve learned that no matter how
          many best practices I follow, how responsive I get my interfaces to
          be, if I don&rsquo;t put the needs of the people who use my interfaces
          first, then I cause pain.
        </p>
        <p>
          One of my core values is to minimize such pain. I like to contribute
          to building software and then use it. I keep in touch with people to
          fine-tune it. In this process, I strive to make a better developer
          experience for my peers, including future me.
        </p>
        <p>
          Alas, I am only human. I don&rsquo;t always get it right. But, I sure
          as hell put in maximum effort.
        </p>
      </Block>

      <Block>
        <Image width={400} position="left" theme={theme} rotate={2}>
          <StaticImage
            src="../../images/about/coffee-begin.jpg"
            alt="Coffee cup with the word Begin on it"
          />
          <p>
            Photo by{" "}
            <Anchor
              to="https://unsplash.com/@dsmacinnes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              title="Danielle MacInnes"
            >
              Danielle MacInnes
            </Anchor>{" "}
            on{" "}
            <Anchor
              to="https://unsplash.com/s/photos/creative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              title="Unsplash"
            >
              Unsplash
            </Anchor>
          </p>
        </Image>
        <h2>Attributes.</h2>
        <ul>
          <li>Creative</li>
          <li>Curious</li>
          <li>Determined &amp; dedicated</li>
          <li>Open &amp; honest</li>
          <li>Passionate</li>
        </ul>
      </Block>
      <Block>
        <h2>Core values.</h2>
        <Image width={400} position="right" theme={theme} rotate={-3}>
          <StaticImage
            src="../../images/about/screen-with-code.jpg"
            alt="A screen with some code on it"
          />
          <p>
            Photo by{" "}
            <Anchor
              to="https://unsplash.com/@karlp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              title="Karl Pawlowicz"
            >
              Karl Pawlowicz
            </Anchor>{" "}
            on{" "}
            <Anchor
              to="https://unsplash.com/s/photos/software?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              title="Unsplash"
            >
              Unsplash
            </Anchor>
          </p>
        </Image>
        <p>
          I take pride in my work and am continuously learning how to write
          better software. I strive to meet these core values.
        </p>
        <ol>
          <li>
            <strong>Code hygiene.</strong>
            <br />
            Good, happy, healthy, clean code.
          </li>
          <li>
            <strong>Consistent.</strong>
            <br />
            Neat and uniform code. Goes beyond coding.
          </li>
          <li>
            <strong>Team player.</strong>
            <br />
            Empathetic and supportive.
          </li>
          <li>
            <strong>Fast feedback.</strong>
            <br />
            Enforce hot reload modules, build optimization and streamline clunky
            things that prevent feedback from being fast.
          </li>
          <li>
            <strong>Automate.</strong>
            <br />
            Why do and do and do and do and do and do, when it can just get
            done? Automate repetitive, clunky, manual tasks to avoid
            inconsistencies, save time and to keep people sane. Automated tests,
            continuous deployments, scripting stuff, utility applications are
            examples of such things.
          </li>
          <li>
            <strong>Simplicity.</strong>
            <br />
            Design for the future and develop for the now. Build the system to
            be robust, extendable, solid and easy to maintain. Develop only the
            necessary features and complexity that are required now. Can you say
            MVP?
          </li>
          <li>
            <strong>Continuity.</strong>
            <br />
            Be a curious sponge. Learn by reading, watching videos, through
            others, doing!
          </li>
        </ol>
      </Block>
    </Section>
  </Container>
)

export default Header

Header.propTypes = {
  theme: PropTypes.string.isRequired,
}
