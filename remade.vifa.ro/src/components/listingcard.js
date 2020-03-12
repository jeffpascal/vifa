import React from "react"
import Img from "gatsby-image"

const ListingCard = props => {
  return (
    <div className="card" style={{ width: 20 + "rem", "marginRight":20  }}>
      <Img className="card-img-top" fluid={props.image.childImageSharp.fluid} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text" dangerouslySetInnerHTML={{ __html: props.description }}></p>
        <a href="/cazare-langa-lac" className="btn btn-primary">
          {props.title}
        </a>
      </div>
    </div>
  )
}

export default ListingCard
