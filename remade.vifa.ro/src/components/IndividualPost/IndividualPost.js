import React from "react"
import "./IndividualPost.css"
// image link
// title
// text
// learn more button text
// learn more button link

const IndividualPost = (props) => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto">
        <img
          src={props.imageSource}
          alt={props.imageSourceAlt}
          className="img-fluid mb-4 mb-lg-0"
        />
      </div>
      <div className="col-lg-6">
        <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">{props.title}</h2>
        <p className="font-italic text-muted mb-4">{props.description}</p>

        {props.needButton === "true" && (
          <a
            href={props.redirectionLink}
            className="btn btn-light px-5 rounded-pill shadow-sm"
          >
            {props.buttonText}
          </a>
        )}
      </div>
    </div>
  )
}

export default IndividualPost
