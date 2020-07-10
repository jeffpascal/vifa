import React from "react"
import "./ParallaxImage.css"

const ParallaxImage = (props) => {
  return (
    <div
      className="row align-items-center parallax"
      style={{ backgroundImage: `url(${props.imageSource})` }}
    >
      <div className="text-center" style={{ backgroundColor: "#010c42" }}>
        <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light text-white">{props.title}</h2>
        <p className="font-italic text-white mb-4">{props.description}</p>

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

export default ParallaxImage
