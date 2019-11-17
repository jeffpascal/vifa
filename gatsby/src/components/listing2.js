import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SlickAll from "./slickgalleryall"

const Listing2 = ({ listing }) => {
  const getCamere = camere =>
    camere.map(camera => (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {camera.name}
        <p>
          <span class="badge badge-primary badge-pill">{camera.amount}</span>
        </p>
      </li>
    ))

  const getDotari = dotari =>
    dotari.map((dotare, index) => (
      <li key={index} className="list-group-item w-50 list-group-item-action">
        <i
          className="far fa-check-square fa-lg"
          style={{ color: "green", padding: 4 }}
        ></i>
        {dotare}
      </li>
    ))

  const getDescriere = descriere =>
    descriere.map(descriere => (
      <li className="list-group-item">
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

        <div class="col-md">
          <div class="position-absolute w-100 h-100">
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
