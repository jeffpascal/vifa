import React from "react"
import Listing2 from "../components/listing2"
import Slick from "../components/slickgallery"
import Layout from "../components/layout"
export default ({ pageContext, data }) => {


  return (

    <Layout>
      <Slick galleryImages={data.allFile.edges} />
      <Listing2 listing={pageContext.item} images={data}/>
    </Layout>
  )
}


export const query =
  graphql`
      query queryone($slug: String!) {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: $slug } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight:1080 , quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `