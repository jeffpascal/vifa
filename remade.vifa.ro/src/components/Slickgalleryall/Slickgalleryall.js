import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./styles.scss"
function Slickgalleryall() {
  const query = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "main-page-gallery-images" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const setting = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4400,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
  }

  //Minus 1 for array offset from 0

  return (
    <div className="galleryDiv">
      <Slider {...setting}>
        {query.allFile.edges.map((image, index) => (
          <div key={index} className="imageContainer">
            <Img fluid={image.node.childImageSharp.fluid} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default Slickgalleryall
