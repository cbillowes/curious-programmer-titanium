import profile from "../components/About/profile.jpg"
import share from "../images/share.jpg"

const author = {
  name: "Clarice Bouwer",
  url: "https://clarice.bouwer.dev",
}

export default {
  index: {
    route: "/",
    crawl: true,
    title: "Welcome",
    description: "A curious place for a curious mind.",
    keywords: "",
    image: share,
    author,
  },
  about: {
    route: "/about",
    crawl: true,
    title: "About",
    description: "My name is Clarice Bouwer and I love writing software.",
    keywords: "",
    image: profile,
    author,
  },
  credits: {
    route: "/credits",
    crawl: true,
    title: "Credits & Resources",
    description:
      "Libraries, frameworks, tools and sorts to make my blog come alive.",
    keywords:
      "react, netlify, gatsby, flaticon.com, unsplash, picsum, pixlr, vscode",
    image: share,
    author,
  },
}
