import React from "react"
import PropTypes from "prop-types"
import Anchor from "./Anchor"
import { BiCoffeeTogo } from "@react-icons/all-files/bi/BiCoffeeTogo"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <StaticImage
    src="../images/buy-me-a-coffee-dark.png"
    alt="Please buy me a coffee"
    width={150}
  />
)

const Header = () => (
  <StaticImage
    src="../images/buy-me-a-coffee-light.png"
    alt="Please buy me a coffee"
    width={250}
  />
)

const TopBar = () => (
  <span className="inline-block hover:text-color-2 hover:animate-wiggle animate">
    <BiCoffeeTogo />
  </span>
)

const BuyMeCoffee = ({ component }) => {
  const topBar = "absolute left-4 top-1 text-2xl"
  const everywhereElse =
    "left-2/4 transform -translate-x-1/2 absolute bottom-2 md:left-2 md:bottom-2 md:translate-x-0"
  return (
    <Anchor
      className={component === "top-bar" ? topBar : everywhereElse}
      to="https://www.buymeacoffee.com/cbillowes"
      title="Please buy me a coffee 🙏"
    >
      {component === "footer" && <Footer />}
      {component === "header" && <Header />}
      {component === "top-bar" && <TopBar />}
    </Anchor>
  )
}

BuyMeCoffee.propTypes = {
  component: PropTypes.oneOf(["footer", "header", "top-bar"]).isRequired,
}

export default BuyMeCoffee
