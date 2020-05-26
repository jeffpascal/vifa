import React from "react"
import "./OurTeamDisplay.css"
// image link
// title
// text
// learn more button text
// learn more button link
const OurTeamDisplay = props => {
  return (
    <div className="col-xl-3 col-sm-6 mb-5">
      <div className="bg-white rounded shadow-sm py-5 px-4">
        <img
          src={props.imageLink}
          alt=""
          width="100"
          className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        />
        <h5 className="mb-0">{props.name}</h5>
        <span className="small text-uppercase text-muted">{props.job}</span>
        <ul className="social mb-0 list-inline mt-3">
          <li className="list-inline-item">
            <a href="#" className="social-link">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="social-link">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="social-link">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="social-link">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OurTeamDisplay
