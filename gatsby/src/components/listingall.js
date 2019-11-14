import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const ListingsAll = () => {
  const data = useStaticQuery(graphql`
  query query1 {
    allDataRoJson {
      nodes {
        name
        dotari
        slug
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
        names {
          en
          ro
        }
      }
    }
    images: allFile(sort: {fields: name, order: DESC}, filter: {relativeDirectory: {eq: "main-page-card-images"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 350, maxHeight: 250, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
          
        }
      }
    }
    flags: allFile(sort: {fields: name, order: DESC}, filter: {relativeDirectory: {eq: "flags"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 50, maxHeight: 25, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
          
        }
      }
    }
  }
  
    
  `)

  const getCamere = camere =>
    camere.map(camera => (
      <div>
        <p>
          {camera.name} {camera.amount}
        </p>
      </div>
    ))

  const getDotari = dotari =>
    dotari.map(dotare => (
      <div>
        <p>{dotare}</p>
      </div>
    ))

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

    const imageLinks = data.images.edges;
    const flagLinks = data.flags.edges;
    const newImages={};
    const newFlags={};
    //create a map. newimages["vila"] will have the image i need to print
    for(var i = 0 ; i < imageLinks.length ; i++){
      newImages[imageLinks[i].node.name] = imageLinks[i];
    }
    for(var j = 0 ; j < flagLinks.length ; j++){
      newFlags[flagLinks[j].node.name] = flagLinks[j];
    }
    
  return (
    <div className="row">
      
      {// map through all the data, query formed from the graphql
      
      
      data.allDataRoJson.nodes.map((listing, index) => (
        
        <div key={index} className="col-md-4">
          <div className="card">
            <img
              src={newImages[listing.slug].node.childImageSharp.fluid.src}
              className="card-img-top"
              alt="Logo"
            />
            <div className="card-body">
              <h5 className="card-title">{listing.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <Link type="button" className="btn btn-default btn-sm" to={`/ro/${listing.slug}/`}>
            <div className="img-wrap">
              <img
              src={newFlags["ro"].node.childImageSharp.fluid.src}
              className="img-fluid"
              alt="Logo"
              style={{"paddingRight": 10}}
            /></div>
               <h6>{`${listing.names.ro}`}</h6></Link>

            <Link type="button" className="btn btn-default btn-sm" to={`/en/${listing.slug}/`}>
            <div className="img-wrap">
              <img
              src={newFlags["en"].node.childImageSharp.fluid.src}
              className="img-fluid"
              alt="Logo"
              style={{"paddingRight": 10, "verticalAlign": "middle"}}
            /></div>
              <h6> {`${listing.names.en}`}</h6></Link>
              
          </div>
        </div>
      ))}
    </div>
  )
}
export default ListingsAll
