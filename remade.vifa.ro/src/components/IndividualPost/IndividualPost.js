import React from "react"
import "./IndividualPost.css"
// image link
// title
// text
// learn more button text
// learn more button link

function LeftAlignImage(props) {
  return (
    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto">
        <img
          src={props.details.imageSource}
          alt={props.details.imageSourceAlt}
          class="img-fluid mb-4 mb-lg-0"
        />
      </div>
      <div class="col-lg-6">
        <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">{props.details.title}</h2>
        <p class="font-italic text-muted mb-4">{props.details.description}</p>

        {props.details.needButton === "true" && (
          <a
            href={props.details.redirectionLink}
            class="btn btn-light px-5 rounded-pill shadow-sm"
          >
            {props.details.buttonText}
          </a>
        )}
      </div>
    </div>
  )
}

function RightAlignImage(props) {
  return (
    <div class="row align-items-center">
      <div class="col-lg-6">
        <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">{props.details.title}</h2>
        <p class="font-italic text-muted mb-4">{props.details.description}</p>

        {props.details.needButton === "true" && (
          <a
            href={props.details.redirectionLink}
            class="btn btn-light px-5 rounded-pill shadow-sm"
          >
            {props.details.buttonText}
          </a>
        )}
      </div>
      <div class="col-lg-5 px-5 mx-auto">
        <img
          src={props.details.imageSource}
          alt={props.details.imageSourceAlt}
          class="img-fluid mb-4 mb-lg-0"
        />
      </div>
    </div>
  )
}

const IndividualPost = props => {
  if (props.imageLocation === "left")
    return <LeftAlignImage details={props}></LeftAlignImage>
  else return <RightAlignImage details={props}></RightAlignImage>
}

export default IndividualPost
