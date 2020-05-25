import React from "react"
import "./IndividualPost.css"
// image link
// title
// text
// learn more button text
// learn more button link
const IndividualPost = props => {
  return (
    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto">
        <img src={props.imageSource} alt="" class="img-fluid mb-4 mb-lg-0" />
      </div>
      <div class="col-lg-6">
        <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">{props.title}</h2>
        <p class="font-italic text-muted mb-4">{props.description}</p>
        <a
          href={props.redirectionLink}
          class="btn btn-light px-5 rounded-pill shadow-sm"
        >
          Learn More
          {props.buttonText}
        </a>
      </div>
    </div>
  )
}

export default IndividualPost
