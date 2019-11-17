import React from "react"
import Slick from "./slickgallery"

const Listing2 = ({ listing, images }) => {
  const camereImages = images.allFile.edges.filter(image =>
    image.node.name.includes("camera")
  )

  const getCamere = camere =>
    camere.map((camera, index) => (
      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
        {camera.name}
        <p>
          <span className="badge badge-primary badge-pill">{camera.amount}</span>
        </p>
      </li>
    ))

  const getDotari = dotari =>
    dotari.map((dotare, index)=> (
      <li key={index} className="list-group-item w-50 list-group-item-action">
        <i
          className="far fa-check-square fa-lg"
          style={{ color: "green", padding: 4}}
        ></i>
        {dotare}
      </li>
    ))

  const getDescriere = descriere =>
    descriere.map((descriere, index) => (
      <div key={index}>
        {descriere.type === "normal" ? (
          <p className="list-group-item-heading" style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: descriere.text }}>
          </p>
        ) : (
            <p className="h6" style={{  }}
              dangerouslySetInnerHTML={{ __html: descriere.text }}>
            </p>
          )}
      </div>
    ))

  return (
    <div className="">
      <div className="row">
        <div className="col-md-6">
          <div className="">
            <h1 className="" style={{ "borderBottom":" 1px solid #000000", "borderTop":" 1px solid #000000"}}>Details</h1>
            {//descriere
              getDescriere(listing.detaliidescriere)}
          </div>
        </div>

        <div className="col-md-6">
          <h1>Camere</h1>
          <ul className="list-group">
            <Slick galleryImages={camereImages} />
            {//camere
              listing.camere &&
              listing.camere.length > 0 &&
              getCamere(listing.camere)}
          </ul>
        </div>
        
        <div className="col-md-12">
          <h3 className="list-group-item-heading">Dotari</h3>
          <div className="list-group d-flex flex-row flex-wrap">
            <ul className="d-flex flex-wrap">
              {//dotari
                getDotari(listing.dotari)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Listing2
