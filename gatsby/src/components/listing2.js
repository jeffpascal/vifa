import React from "react"
import Slick from "./slickgallery"

const Listing2 = ({ listing}) => {
  const camereImages = listing.listingimages.filter(currentimage => 
    // actually it first checks if currentimage.image is null then it does the second check
    currentimage.image && currentimage.image.childImageSharp.fluid.originalName.includes("camera") 
  )

  const filteredlistingimages = listing.listingimages.filter(currentimage => 
    currentimage.image != null
  )

  const getCamere = camere =>
    camere.map((camera, index) => (
      <div className="row">
        <i
          className="far fa-check-square fa-lg"
          style={{ color: "green", padding: 4}}
        ></i>{camera.amount}
        <p>{camera.name}</p>
      </div>
    ))

  const getDotari = dotari =>
    dotari.map((dotare, index)=> (
      <li key={index} className="w-50 list-group-item-action">
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
      <Slick galleryImages={filteredlistingimages} />
      
      <div className="row">
        <div className="col-md-6 nopadding" >
            <h3 className="list-group-item-heading">Descriere</h3>
            {//descriere
            getDescriere(listing.descriere.page)}
          
          <h3 className="list-group-item-heading">Dotari</h3>
          <div className="list-group d-flex flex-row flex-wrap">
            <ul className="d-flex flex-wrap" style={{"listStyleType": "none"}}>
              {//dotari
              getDotari(listing.dotari)}
            </ul>
          </div>
        
        </div>
        <div className="col-md-6">

          <ul className="list-group ">
            <Slick galleryImages={camereImages} />
            <h1>Camere</h1>
            {//camere
            listing.camere &&
              listing.camere.length > 0 &&
              getCamere(listing.camere)}
          </ul>
        </div>
        <ul className="list-group"></ul>
        
      </div>
    </div>
  )
}
export default Listing2
