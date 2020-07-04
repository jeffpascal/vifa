import React from "react"
import "./ImageSelector.css"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"

const ImageSelector = (props) => {
  const surveyImages = useStaticQuery(
    graphql`
      query surveyimagess {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "survey" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const { send } = props

  function setSurvey(event) {
    send(event)
  }

  function getProperTitle(title) {
    if (title.includes("vilafranceza")) {
      return "Vila Franceza"
    }
    if (title.includes("apartamente")) {
      return "Apartamente moderne"
    }
    if (title.includes("casapescarului")) {
      return "Casa Pescarului"
    }
    if (title.includes("casagabriela")) {
      return "Casa Gabriela"
    }
  }

  return (
    <div className="row container">
      <h2 className="col-12">La ce casa ati fost?</h2>
      {surveyImages.allFile.edges.map((property) => {
        return (
          <div
            className="col-6"
            onClick={() => {
              setSurvey(property.node.childImageSharp.fluid.src)
            }}
            key={property.node.childImageSharp.fluid.src}
          >
            <div
              style={{
                height: "50px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h5>{getProperTitle(property.node.childImageSharp.fluid.src)}</h5>
            </div>
            <a>
              <Img fluid={property.node.childImageSharp.fluid} />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default ImageSelector
