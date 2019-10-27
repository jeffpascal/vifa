import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useStaticQuery, graphql } from "gatsby"

const Listing2 = ({listing}) => {

  const getCamere = camere =>
    camere.map(camera => (
      <li className = "list-group-item d-flex justify-content-between align-items-cente">
          {camera.name}
          <p>
          <span class="badge badge-primary badge-pill">{camera.amount}</span>
          </p>
      </li>
    ))

  const getDotari = dotari =>
    dotari.map(dotare => (
      <li className = "list-group-item">
        <p>{dotare}</p>
      </li>
    ))

  const getDescriere = descriere =>
    descriere.map(descriere => (
      <li className = "list-group-item">
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
          <div className="row">
            <ul className="col-sm-12 col-md-4 list-group">
              {//dotari
              getDotari(listing.dotari)}
            </ul>

            <ul className="col-sm-12 col-md-4 list-group">
              {//camere
              listing.camere &&
                listing.camere.length > 0 &&
                getCamere(listing.camere)}
            </ul>
            <ul className="col-sm-12 col-md-4 list-group" >
              {//descriere
              getDescriere(listing.detaliidescriere)}
            </ul>
          </div>
        
      
    </div>
  )
}
export default Listing2;
