import React, { useState } from "react"
import { CookiesProvider, useCookies } from "react-cookie"
import styled from "styled-components"
import Layout from "../Components/Layout"
import Header from "../Components/Headers/about"
import { StaticImage } from "gatsby-plugin-image"
import Anchor from "../Components/Anchor"

const Image = styled.div`
  width: ${(props) => props.width}px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  float: ${(props) => props.position || "left"};
  margin: 1rem;
  margin-right: ${(props) => (props.position === "left" ? "1.5rem" : "0")};
  margin-left: ${(props) => (props.position === "right" ? "1rem" : "0")};

  p {
    font-size: 80%;
    line-height: 1.5rem;
    text-align: center;
  }

  img {
    border-radius: 10px;
  }
`

const Block = styled.div`
  clear: both;
  margin-left: -3rem;
  margin-right: -3rem;
`

const AboutPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookie] = useCookies(["theme"])
  const [theme, toggleTheme] = useState(cookie.theme || "light")

  return (
    <CookiesProvider>
      <Layout
        title="About"
        description="My name is Clarice Bouwer and I love writing software."
        image="about/profile.jpg"
        toggleTheme={toggleTheme}
        theme={theme}
        header={<Header theme={theme} />}
      >
        <Block>
          <h2>People centric.</h2>
          <Image width={400} position="right">
            <StaticImage
              src="../images/about/legos.jpg"
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
            be, if I don&rsquo;t put the needs of the people who use my
            interfaces first, then I cause pain.
          </p>
          <p>
            One of my core values is to minimize such pain. I like to contribute
            to building software and then use it. I keep in touch with people to
            fine-tune it. In this process, I strive to make a better developer
            experience for my peers, including future me.
          </p>
          <p>
            Alas, I am only human. I don&rsquo;t always get it right. But, I
            sure as hell put in maximum effort.
          </p>
        </Block>
        <Block>
          <h2>Attributes.</h2>
          <Image width={400} position="left">
            <StaticImage
              src="../images/about/coffee-begin.jpg"
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
          <Image width={400} position="right">
            <StaticImage
              src="../images/about/screen-with-code.jpg"
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
              <strong>Code hygiene.</strong> Good, happy, healthy, clean code.
            </li>
            <li>
              <strong>Consistent.</strong> Neat and uniform code. Goes beyond
              coding.
            </li>
            <li>
              <strong>Team player.</strong>Empathetic and supportive.
            </li>
            <li>
              <strong>Fast feedback.</strong>Enforce hot reload modules, build
              optimization and streamline clunky things that prevent feedback
              from being fast.
            </li>
            <li>
              <strong>Automate.</strong> hy do and do and do and do and do and
              do, when it can just get done? Automate repetitive, clunky, manual
              tasks to avoid inconsistencies, save time and to keep people sane.
              Automated tests, continuous deployments, scripting stuff, utility
              applications are examples of such things.
            </li>
            <li>
              <strong>Simplicity.</strong> Design for the future and develop for
              the now. Build the system to be robust, extendable, solid and easy
              to maintain. Develop only the necessary features and complexity
              that are required now. Can you say MVP?
            </li>
            <li>
              <strong>Continuity.</strong>Be a curious sponge. Learn by reading,
              watching videos, through others, doing!
            </li>
          </ol>
        </Block>
      </Layout>
    </CookiesProvider>
  )
}

export default AboutPage
