import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { NavHashLink as NavLink } from 'react-router-hash-link';
const ListingsAll = () => {
  const querrydata = useStaticQuery(graphql`
  query query1 {
    allDataRoJson {
      nodes {
        name
        dotari
        slug
        cardimages {
          childImageSharp {
            fluid(maxWidth: 450, maxHeight: 350, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        descriere {
          card
          page
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
    images: allFile(sort: {fields: name, order: DESC}, filter: {relativeDirectory: {eq: "relimages/main-page-card-images"}}) {
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
    flags: allFile(sort: {fields: name, order: DESC}, filter: {relativeDirectory: {eq: "relimages/flags"}}) {
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

  // const imageLinks = data.images.edges;
  const flagLinks = querrydata.flags.edges;
  const newFlags = {};
  for (var j = 0; j < flagLinks.length; j++) {
    newFlags[flagLinks[j].node.name] = flagLinks[j];
  }

  return (
    <div className="row">

      {// map through all the data, query formed from the graphql


        querrydata.allDataRoJson.nodes.map((listing, index) => (
          <div key={index} className="col-md-4">
                    <pre>{JSON.stringify(querrydata.flags,null,2)}</pre>

            <div className="card">
              <Img
                fluid={listing.cardimages.childImageSharp.fluid}
                className="card-img-top"
                alt="Logo"
              />
              <div className="card-body">
                <h5 className="card-title">{listing.name}</h5>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: listing.descriere.card }}>
                </p>
              </div>
              <Link type="button" className="btn btn-default btn-sm" to={`/page-2#${listing.slug}/`}>
                <div className="img-wrap">
                  <Img
                    fluid={newFlags.en.node.childImageSharp.fluid}
                    className="img-fluid"
                    alt="Logo"
                    style={{ "paddingRight": 10 }}
                  /></div>
                <h6>{`${listing.names.ro}`}</h6></Link>

              <Link type="button" className="btn btn-default btn-sm" to={`/page-2#${listing.slug}/`}>
                <div className="img-wrap">
                  
                  <Img
                    fluid={newFlags.en.node.childImageSharp.fluid}
                    className="img-fluid"
                    alt="Logo"
                    style={{ "paddingRight": 10, "verticalAlign": "middle" }}
                  /></div>
                <h6> {`${listing.names.en}`}</h6></Link>

            </div>
          </div>
        ))}
    </div>
  )
}
export default ListingsAll
