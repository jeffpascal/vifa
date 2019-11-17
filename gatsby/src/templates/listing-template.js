import React from "react"
import Listing2 from "../components/listing2"
import Slick from "../components/slickgallery"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
export default ({ pageContext, data }) => {


 

  return (

    pageContext.all.map(item => (
      <div>
        <Slick galleryImages={data.allFile.edges} />
        <Listing2 listing={item} images={data} />
        </div>
    ))
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