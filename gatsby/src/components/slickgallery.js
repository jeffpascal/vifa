import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function Slick({ data }) {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: true,
  }
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
                fluid(maxWidth: 350, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0

  return (
    <Slider {...setting}>
      {allFile.edges.map(image => (
        <div className="imageContainer">
          <Img fluid={image.node.childImageSharp.fluid} />
        </div>
      ))}
    </Slider>
  )
}
export default Slick
