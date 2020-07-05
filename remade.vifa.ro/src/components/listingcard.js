import React from "react"
import Img from "gatsby-image"
import { FcCalendar } from "react-icons/fc"

const ListingCard = (props) => {
  return (
    <div className="card" style={{ width: 20 + "rem" }}>
      <Img className="card-img-top" fluid={props.image.childImageSharp.fluid} />
      <div className="card-body">
        <h3 className="center card-title">{props.title}</h3>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>

        <div className="btn-group" role="group" aria-label="Basic example">
          {props.slug === "apartamente-moderne" ? (
            <a href={props.calendarlink} className="btn btn-danger">
              <strong>{props.title}</strong>
            </a>
          ) : (
            <a href="/cazare-langa-lac" className="btn btn-danger">
              <strong>{props.title}</strong>
            </a>
          )}

          <a href={props.calendarlink} className="btn btn-success ">
            <FcCalendar size={45} className="float-right"></FcCalendar>
            <strong>Rezerva acum</strong>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ListingCard
