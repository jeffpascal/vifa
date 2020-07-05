import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./styles.scss"
function CoolFact() {
  //Minus 1 for array offset from 0

  return (
    <div class="single-cool-fact white d-flex align-items-center mt-50">
      <div class="scf-icon mr-15">
        <i class="far fa-gem" aria-hidden="true"></i>
      </div>
      <div class="scf-text">
        <h2>
          <span class="counter">25</span>
        </h2>
        <p>Ani experienta</p>
      </div>
    </div>
  )
}
export default CoolFact
