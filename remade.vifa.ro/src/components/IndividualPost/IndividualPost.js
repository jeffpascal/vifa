import React from "react"
import "./IndividualPost.css"
// image link
// title
// text
// learn more button text
// learn more button link

function LeftAlignImage(props) {
  return (
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto">
        <img
          src={props.details.imageSource}
          alt={props.details.imageSourceAlt}
          className="img-fluid mb-4 mb-lg-0"
        />
      </div>
      <div className="col-lg-6">
        <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">{props.details.title}</h2>
        <p className="font-italic text-muted mb-4">
          {props.details.description}
        </p>

        {props.details.needButton === "true" && (
          <a
            href={props.details.redirectionLink}
            className="btn btn-light px-5 rounded-pill shadow-sm"
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
    <div className="row align-items-center">
      <div className="col-lg-6">
        <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">{props.details.title}</h2>
        <p className="font-italic text-muted mb-4">
          {props.details.description}
        </p>

        {props.details.needButton === "true" && (
          <a
            href={props.details.redirectionLink}
            className="btn btn-light px-5 rounded-pill shadow-sm"
          >
            {props.details.buttonText}
          </a>
        )}
      </div>
      <div className="col-lg-5 px-5 mx-auto">
        <img
          src={props.details.imageSource}
          alt={props.details.imageSourceAlt}
          className="img-fluid mb-4 mb-lg-0"
        />
      </div>
    </div>
  )
}

function ParallaxImage(props) {

  return (
    <div className="row align-items-center parallax" style={{backgroundImage: `url(${props.details.imageSource})`}}>
      <div className="text-center" style={{backgroundColor: props.details.textBackground}}>
        <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light text-white">{props.details.title}</h2>
        <p className="font-italic text-white mb-4">
          {props.details.description}
        </p>

        {props.details.needButton === "true" && (
          <a
            href={props.details.redirectionLink}
            className="btn btn-light px-5 rounded-pill shadow-sm"
          >
            {props.details.buttonText}
          </a>
        )}
      </div>
    </div>
  )
}

const IndividualPost = props => {
  if (props.imageLocation === "left")
    return <LeftAlignImage details={props}></LeftAlignImage>
  else if (props.imageLocation === "right")
    return <RightAlignImage details={props}></RightAlignImage>
  else {
    return <ParallaxImage details={props}></ParallaxImage>
  }
}

export default IndividualPost
