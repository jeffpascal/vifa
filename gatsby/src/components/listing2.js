import React from "react"
import Slick from "./slickgallery"

const Listing2 = ({ listing}) => {
  const camereImages = listing.listingimages.filter(currentimage =>
    currentimage.image.childImageSharp.fluid.originalName.includes("camera")
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

  const getDescriere = descriere =>{
     return (<p className="card-text" dangerouslySetInnerHTML={{ __html: descriere }}></p>)
}
  return (
    <div className="container">
      <h1>{listing.name}</h1>
      <Slick galleryImages={listing.listingimages} />
      
      
      <div className="row">
        <div className="col-md-6">
          <li className="list-group-item">
            <h3 className="list-group-item-heading">Descriere</h3>
            {//descriere
            getDescriere(listing.descriere.page)}
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
        <ul className="list-group"></ul>
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
