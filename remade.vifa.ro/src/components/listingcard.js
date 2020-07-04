import React from "react"
import Img from "gatsby-image"

const ListingCard = (props) => {
  return (
    <div className="card" style={{ width: 20 + "rem", marginRight: 20 }}>
      <Img className="card-img-top" fluid={props.image.childImageSharp.fluid} />
      <div className="card-body">
        <h3 className="center card-title">{props.title}</h3>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>

        <div className="btn-group" role="group" aria-label="Basic example">
          <button href="/cazare-langa-lac" className="btn btn-danger">
            <strong>{props.title}</strong>
          </button>

          <button href="/cazare-langa-lac" className="btn btn-success ">
            <i className="fa fa-calendar col-6 float-right" aria-hidden=""></i>
            <strong>Rezerva acum</strong>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListingCard
