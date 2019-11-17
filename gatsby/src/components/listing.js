import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const Listing = () => {
  const data = useStaticQuery(graphql`
  query ListingQuery {
    allDataRoJson {
      nodes {
        camere {
          name
          amount
        }
        name
      }
    }
  }
  
`);

const getNames = (camere) => (camere.map(camera => (
  <div>
    <p>{camera.name} {camera.amount}</p>
  </div>
)))

  return (
    <div>
      {data.allDataRoJson.nodes.map(listing => (
          <div>
            <h2>{listing.name}</h2>
            {listing.camere.map(camera => (
              <div>
                <p>{camera.amount}</p>
              </div>
            ))}

            {
              listing.camere &&
              listing.camere.length > 0 &&
              getNames(listing.camere)
            }
          </div>
        ))}
    </div>
  );
};
export default Listing;