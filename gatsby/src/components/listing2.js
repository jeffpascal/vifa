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

      <p className="list-group-item-heading">{dotare}</p>
    ))

  const getDescriere = descriere =>
    descriere.map(descriere => (
      <div>
        {descriere.type === "normal" ? (
          <p className="list-group-item-heading" style={{ color: "red" }}>{descriere.text}</p>
        ) : (
            <p className="list-group-item-heading" style={{ color: "purple" }}>{descriere.text}</p>
          )}
      </div>
    ))

  return (
    <div className="container">
      <h2>{listing.name}</h2>

      <div className="row">
        <div className="col-md-5">
          <SlickAll />
          
          <li className="list-group-item">
          <h3 className="list-group-item-heading">Descriere</h3>
          {//descriere
            getDescriere(listing.detaliidescriere)}
            </li>
        </div>
        
        <div className="col-md-3">
          <div className="ul">
            <h1>Camere</h1>
            <ul className="list-group" >
              {//camere
                listing.camere &&
                listing.camere.length > 0 &&
                getCamere(listing.camere)}
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <li className="list-group-item">
              <h3 className="list-group-item-heading">Dotari</h3>
              {//dotari
                  getDotari(listing.dotari)}
          </li> 
        </div>
      </div>
    </div>
  )
}
export default Listing2
