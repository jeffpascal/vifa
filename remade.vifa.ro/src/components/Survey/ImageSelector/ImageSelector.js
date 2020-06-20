import React from "react"
import "./ImageSelector.css"

import { useStaticQuery, graphql } from "gatsby"


const ImageSelector = () => {
  const surveyImages = useStaticQuery(
    graphql`
      query surveyimages {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "survey" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `
  )
  function setSurvey(){
    
  }
  return (
    <div>
      <div className="">
        <div className="col-md-3">
          <a onClick={setSurvey}>
            <img
              src={
                surveyImages.allFile.edges[0].node.childImageSharp.fluid.src
              }
            ></img>
          </a>
        </div>
        <div className="col-md-3">
          <a onClick={setSurvey}>
            <img
              src={
                surveyImages.allFile.edges[1].node.childImageSharp.fluid.src
              }
            ></img>
          </a>
        </div>
        <div className="col-md-3">
          <a onClick={setSurvey}>
            <img
              src={
                surveyImages.allFile.edges[2].node.childImageSharp.fluid.src
              }
            ></img>
          </a>
        </div>
        <div className="col-md-3">
          <a onClick={setSurvey}>
            <img
              src={
                surveyImages.allFile.edges[3].node.childImageSharp.fluid.src
              }
            ></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ImageSelector