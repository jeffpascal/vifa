import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function Slick({images}) {
 
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: true,

  }

  //Minus 1 for array offset from 0

  return (
    <div>
    <Slider {...setting}
>
      {images.allFile.edges.map(image => (
        <div className="imageContainer">
          
          <Img fluid={image.node.childImageSharp.fluid} />
        </div>
        
      ))}
      
    </Slider>
    </div>
  )
}
export default Slick
