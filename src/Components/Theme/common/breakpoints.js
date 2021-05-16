const media = (size) => `screen and (max-width: ${size})`

const sizes = ["320px", "375px", "425px", "768px", "1024px", "1440px", "2560px"]

const space = {
  betweenHeaderAndPage: "93px",
  readingPane: "840px",
  navigation: "1440px",
  footer: "1440px",
  section: "1440px",
}

const breakpoint = {
  mobileS: sizes[0],
  mobileM: sizes[1],
  mobileL: sizes[2],
  tablet: sizes[3],
  laptop: sizes[4],
  laptopL: sizes[5],
  desktop: sizes[6],
}

const query = {
  mobileS: media(sizes[0]),
  mobileM: media(sizes[1]),
  mobileL: media(sizes[2]),
  tablet: media(sizes[3]),
  laptop: media(sizes[4]),
  laptopL: media(sizes[5]),
  desktop: media(sizes[6]),
}

export default {
  space,
  query,
  breakpoint,
}
