import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../../Anchor"
import Ribbon from "../../Ribbon"
import Block from "../../Block"
import { getBase, size, Things } from "../../Themes"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  display: inline-block;
  width: 100%;
  background-color: ${(props) => getBase(props.theme, Things.ABOUT)};
`

const Wrapper = styled.div`
  max-width: ${size.laptopL};
  margin: 0 auto;
`

const Header = ({ theme }) => {
  return (
    <Container theme={theme}>
      <Wrapper>
        <Block
          theme={theme}
          rotate={-2}
          direction="right"
          shadow={Things.CARD_ABOUT}
          width={{
            blurb: "60%",
            image: "450px",
          }}
          blurb={
            <div>
              <h2>People centric.</h2>
              <p>
                The web is pretty, and then it is not. I&rsquo;ve seen my fare
                share of pretty, with buttons and hero images and often the
                latest and greatest bells and whistles. I&rsquo;ve learned that
                no matter how many best practices I follow, how responsive I get
                my interfaces to be, if I don&rsquo;t put the needs of the
                people who use my interfaces first, then I cause pain.
              </p>
              <p>
                One of my core values is to minimize such pain. I like to
                contribute to building software and then use it. I keep in touch
                with people to fine-tune it. In this process, I strive to make a
                better developer experience for my peers, including future me.
              </p>
              <p>
                Alas, I am only human. I don&rsquo;t always get it right. But, I
                sure as hell put in maximum effort.
              </p>
            </div>
          }
          image={
            <StaticImage src="./legos.jpg" title="People holding lego men" />
          }
          caption={
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
          }
          ribbon={
            <Ribbon theme={theme} color={Things.PRIMARY}>
              Together{" "}
              <span role="img" aria-label="Heart emoji">
                🤍
              </span>
            </Ribbon>
          }
        />

        <Block
          theme={theme}
          rotate={3}
          direction="left"
          shadow={Things.CARD_ABOUT}
          width={{
            blurb: "80%",
            image: "300px",
          }}
          blurb={
            <div>
              <h2>Core values.</h2>
              <p>
                I take pride in my work and am continuously learning how to
                write better software. I strive to meet these core values.
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
                  Enforce hot reload modules, build optimization and streamline
                  clunky things that prevent feedback from being fast.
                </li>
                <li>
                  <strong>Automate.</strong>
                  <br />
                  Why do and do and do and do and do and do, when it can just
                  get done? Automate repetitive, clunky, manual tasks to avoid
                  inconsistencies, save time and to keep people sane. Automated
                  tests, continuous deployments, scripting stuff, utility
                  applications are examples of such things.
                </li>
                <li>
                  <strong>Simplicity.</strong>
                  <br />
                  Design for the future and develop for the now. Build the
                  system to be robust, extendable, solid and easy to maintain.
                  Develop only the necessary features and complexity that are
                  required now. Can you say MVP?
                </li>
                <li>
                  <strong>Continuity.</strong>
                  <br />
                  Be a curious sponge. Learn by reading, watching videos,
                  through others, doing!
                </li>
              </ol>
            </div>
          }
          image={
            <StaticImage
              src="./coffee-begin.jpg"
              title="Coffee cup with the word begin on it"
            />
          }
          caption={
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
                to="https://unsplash.com/s/photos/gather?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                title="Unsplash"
              >
                Unsplash
              </Anchor>
            </p>
          }
          ribbon={
            <Ribbon theme={theme} color={Things.SECONDARY}>
              Different{" "}
              <span role="img" aria-label="Unicorn emoji">
                🦄
              </span>
            </Ribbon>
          }
        />

        <Block
          theme={theme}
          rotate={2}
          direction="right"
          shadow={Things.CARD_ABOUT}
          width={{
            blurb: "60%",
            image: "350px",
          }}
          blurb={
            <div>
              <h2>Attributes.</h2>
              <ul>
                <li>Open &amp; honest</li>
                <li>Passionate</li>
                <li>Creative</li>
                <li>Curious</li>
                <li>Work hard, play hard</li>
              </ul>
            </div>
          }
          image={
            <StaticImage
              src="./screen-with-code.jpg"
              title="A screen with some code on it"
            />
          }
          caption={
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
          }
          ribbon={
            <Ribbon theme={theme} color={Things.TERTIARY}>
              Go-getter{" "}
              <span role="img" aria-label="Coffee emoji">
                ☕
              </span>
            </Ribbon>
          }
        />
      </Wrapper>
    </Container>
  )
}

export default Header

Header.propTypes = {
  theme: PropTypes.string.isRequired,
}
