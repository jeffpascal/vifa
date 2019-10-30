import React from "react"
import Listing2 from "../components/listing2"
import Slick from "../components/slickgallery"

export default  ({ pageContext, data }) => {


    return (

      
        <div className="jumbotron">
        
        
        <Slick images = {data}/>
        <Listing2 listing = {pageContext.item}/>
        </div>
        
    )
  }


export const  query  = 
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
                fluid(maxWidth: 350, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `