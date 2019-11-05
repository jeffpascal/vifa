import React from "react"
import SlickAll from "./slickgalleryall"
import Slick from "./slickgallery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Listing2 = ({ listing, images }) => {
  const camereImages = images.allFile.edges.filter(image =>
    image.node.name.includes("camera")
  )

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
    dotari.map(dotare => (
      <li className="list-group-item w-50 list-group-item-action">
        <i
          class="far fa-check-square fa-lg"
          style={{ color: "green", padding: 4}}
        ></i>
        {dotare}
      </li>
    ))

  const getDescriere = descriere =>
    descriere.map(descriere => (
      <div>
        {descriere.type === "normal" ? (
          <p className="list-group-item-heading" style={{ color: "red" }}>
            {descriere.text}
          </p>
        ) : (
          <p className="list-group-item-heading" style={{ color: "purple" }}>
            {descriere.text}
          </p>
        )}
      </div>
    ))

  return (
    <div className="container">
      <h2>{listing.name}</h2>

      <div className="row">
        <div className="col-md-6">
          <li className="list-group-item">
            <h3 className="list-group-item-heading">Descriere</h3>
            {//descriere
            getDescriere(listing.detaliidescriere)}
          </li>
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
        <ul class="list-group"></ul>
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
