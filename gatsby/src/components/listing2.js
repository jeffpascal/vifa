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
    dotari.map(dotare => (
      <li className="list-group-item">
        <p>{dotare}</p>
      </li>
    ))

  const getDescriere = descriere =>
    descriere.map(descriere => (
      <li className="list-group-item">
        {descriere.type === "normal" ? (
          <p style={{ color: "red" }}>{descriere.text}</p>
        ) : (
          <p style={{ color: "purple" }}>{descriere.text}</p>
        )}
      </li>
    ))

  return (
    <div className="container">
      <h2>{listing.name}</h2>

      <div className="row my-3 mx-auto">
        <div className="col-md-6">
          <SlickAll />
          {//descriere
          getDescriere(listing.detaliidescriere)}
        </div>

        <div class="col-md">
          <div class="position-absolute w-100 h-100">
          <h1>Camere</h1>
            <ul
              className="list-group d-flex flex-column flex-wrap mh-md-100"
              style={{ padding: 50 }}
            >
              
              {//camere

              listing.camere &&
                listing.camere.length > 0 &&
                getCamere(listing.camere)}
              <h1>Dotari</h1>
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
