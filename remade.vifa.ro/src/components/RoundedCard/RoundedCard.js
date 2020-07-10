import React from "react"
import Img from "gatsby-image"
import "./RoundedCard.css"
import { FcCalendar } from "react-icons/fc"

const RoundedCard = (props) => {
  return (
    // Card
    <div className="listingCard">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (typeof window !== undefined) {
            window.location = props.calendarLink
          }
        }}
      >
        {/* Listing card image */}
        <div className="align-self-center">
          <Img
            className="roundedImg"
            fluid={props.image.childImageSharp.fluid}
          />
        </div>

        {/* Listing card description */}
        <div className="textContainer">
          <h4>{props.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
        </div>

        {/* Call to action button */}
      </div>
    </div>
  )
}

export default RoundedCard
