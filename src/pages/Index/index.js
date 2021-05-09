import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { CookiesProvider, useCookies } from "react-cookie"
import { THEME_COOKIE_NAME, getToggledTheme } from "../../components/Themes"
import Layout from "../../components/Layout"

export const query = graphql`
  query LandingPageQuery {
    allMarkdownRemark(
      limit: 10
      filter: { fields: { slug: { nin: "/blog/example/" } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      edges {
        node {
          html
          timeToRead
          html
          fields {
            slug
            date
            number
          }
          frontmatter {
            title
            photo
            credit
            creditLink
            creditSource
            tags
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const [cookie, setCookie] = useCookies([THEME_COOKIE_NAME])
  const theme = cookie.theme
  // const edges = data.allMarkdownRemark.edges

  return (
    <CookiesProvider>
      <Layout
        title="Home"
        toggleTheme={(theme) => getToggledTheme(theme)}
        themeCookieSetter={setCookie}
        theme={theme}
      >
        {/* <Articles edges={edges} wordLimit={50} /> */}
      </Layout>
    </CookiesProvider>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

// import React from "react"
// import { CookiesProvider, useCookies } from "react-cookie"
// import { graphql, useStaticQuery } from "gatsby"
// import { THEME_COOKIE_NAME, getToggledTheme } from "../../components/Themes"
// import Layout from "../../components/Layout"
// import profile from "../../components/About/profile.jpg"

// const IndexPage = () => {
//   const [cookie, setCookie] = useCookies([THEME_COOKIE_NAME])
//   const theme = cookie.theme
//   const data = useStaticQuery(
//     graphql`
//       query LandingPageQuery {
//         site {
//           siteMetadata {
//             title
//             description
//             author {
//               name
//               url
//             }
//             url
//             social {
//               image
//             }
//             brand
//           }
//         }
//         allMarkdownRemark(
//           filter: { fields: { slug: { nin: "/article/example/" } } }
//           sort: { order: DESC, fields: fields___number }
//         ) {
//           edges {
//             node {
//               html
//               timeToRead
//               html
//               fields {
//                 slug
//                 date
//                 number
//               }
//               frontmatter {
//                 title
//                 photo
//                 credit
//                 creditLink
//                 creditSource
//                 tags
//               }
//             }
//           }
//         }
//       }
//     `,
//   )

//   const edges = data.allMarkdownRemark.edges

//   return (
//     <CookiesProvider>
//       <Layout
//         title="About"
//         description="My name is Clarice Bouwer and I love writing software."
//         author={{
//           name: "Clarice Bouwer",
//           url: "https://clarice.bouwer.dev",
//         }}
//         image={profile}
//         toggleTheme={(theme) => getToggledTheme(theme)}
//         themeCookieSetter={setCookie}
//         theme={theme}
//       >
//         {/* <Articles edges={edges} wordLimit={50} /> */}
//       </Layout>
//     </CookiesProvider>
//   )
// }

// export default IndexPage
