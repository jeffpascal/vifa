import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Listing2 from "../components/listing2";

const SecondPage = () => {
  const listingquery = useStaticQuery(
    graphql`
    query querylistings2 {
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
                fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    }
 `)


  return (
    <Layout>
    
    {listingquery.allDataRoJson.nodes.map(currentlisting => (
      <div id={currentlisting.slug}>
        <hr></hr>
        <Listing2 listing = {currentlisting} ></Listing2>
        <SEO title="Casa Pescarului" />
        <Link to="/">Inapoi la pagina principala</Link>
      </div>
    ))}
    </Layout>

  )
  


}

export default SecondPage
