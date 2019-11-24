import React from "react"
import Listing2 from "../components/listing2"
import Slick from "../components/slickgallery"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
export default ({ pageContext, data }) => {


  return (

    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Slick galleryImages={data.allDataRoJson.listingimages} />

    </Layout>
  )
}


export const query =
  graphql`
  query listingquery {
    allDataRoJson {
      nodes {
        name
        dotari
        slug
        descriere {
          page
        }
        camere {
          name
          amount
        }
        names {
          en
          ro
        }
        listingimages {
          image {
            childImageSharp {
              fluid{
                src
              }
            }
          }
        }
      }
    }
  }
  
    `