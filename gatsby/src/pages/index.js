import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ListingAll from "../components/listingall"
import SlickAll from "../components/slickgalleryall"

const data = useStaticQuery(graphql`
query flagquery {
  allDataRoJson {
    edges {
      node {
        id
        camere {
          name
          amount
        }
        cardimages {
          id
          childImageSharp {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
}
`
)

const IndexPage = () => (
  <Layout pageTitle={'VIFA'}>
    <SEO title="Home" />
    <SlickAll />
      
      {/* <img src={logo} alt="" /> */}
    <ListingAll />
  </Layout>
)

export default IndexPage
