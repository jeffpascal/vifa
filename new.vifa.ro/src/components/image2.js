import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


function Image2() {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "casape" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {allFile.edges.map((image, index) => (
            <li data-target="#carouselExampleIndicators" data-slide-to={{index}} className={index===0 ? "active" : ""}></li>
          ))}
        </ol>
        <div className="carousel-inner">
          
          {allFile.edges.map((image , index) => (
            <div className={index===0 ? "carousel-item active" : "carousel-item"}>
              <Img
                fluid={image.node.childImageSharp.fluid}
                key={image.id}
                alt={image.node.name.replace(/-/g, " ").substring(2)}
                className="d-block w-100"
              />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
          <span
            className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div>
        {/* <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
        /> */}
      </div>
      <div>
        {/* <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button> */}
      </div>
    </div>
  )
}
export default Image2
