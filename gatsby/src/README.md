```js
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

// this is the querry, it is gerenated from ___graphql
const Listing2 = () => {
  const data = useStaticQuery(graphql`
    query ListingQuery2 {
      allDataJson {
        nodes {
          name
          dotari
          detaliipret {
            pret
            perioada
            detaliu1
            detaliu2
          }
          detaliidescriere {
            text
            type
          }
          camere {
            name
            amount
          }
        }
      }
    }
  `)

// getCamere method loops through the camere array and gets the values
  const getCamere = camere =>
    camere.map(camera => (
      <div>
        <p>
          {camera.name} {camera.amount}
        </p>
      </div>
    ))

// same as getCamere
  const getDotari = dotari =>
    dotari.map(dotare => (
      <div>
        <p>{dotare}</p>
      </div>
    ))

// in this function, we have a check, if type is normal we change the style
  const getDescriere = descriere =>
    descriere.map(descriere => (
      <div>
        {descriere.type === "normal" ? (
          <p style={{ color: "red" }}>{descriere.text}</p>
        ) : (
          <p style={{ color: "purple" }}>{descriere.text}</p>
        )}
      </div>
    ))

// we return our component
  return (
    <div className="container">
      {data.allDataJson.nodes.map(listing => (
        <div className="jumbotron">
          <h2>{listing.name}</h2>
          <div className="row">
            <div className="card col-md-4">
              {//dotari
              getDotari(listing.dotari)}
            </div>

            <div className="card col-md-4">
              {//camere
              listing.camere &&
                listing.camere.length > 0 &&
                getCamere(listing.camere)}
            </div>
            <div className="card col-md-3">
              {//descriere
              getDescriere(listing.detaliidescriere)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Listing2

```

