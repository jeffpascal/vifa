import React from "react"
import { Link } from "gatsby"
import { ReactDOM } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Slick from "../components/slickgallery"
import Listing2 from "../components/listing2";

const SecondPage = () => {
  
  const listingquery = useStaticQuery(
    graphql`
    query querylistings {
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
 const obj = ReactDOM.findDOMNode(this);
 obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';

  return (
    <Layout>
      <div className="iframe-container">
    
        <iframe src="https://www.beds24.com/booking2.php?ownerid=55588&amp;referer=Website+iframe" style={{"maxWidth":"100%", "border":"none", "overflow":""}}><p><a href="https://www.beds24.com/booking2.php?ownerid=55588&amp;referer=Website+iframe" title="Book Now">Book Now</a></p></iframe>
      </div>
    </Layout>

  )



}

export default SecondPage
