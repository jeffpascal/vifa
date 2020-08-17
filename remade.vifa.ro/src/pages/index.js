import React from "react"
import Slickgalleryall from "../components/Slickgalleryall"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import ListingCard from "../components/listingcard"
import CoolFact from "../components/CoolFact"

const IndexPage = () => {
  const querrydata = useStaticQuery(graphql`
    query MyQuery {
      allDataRoJson {
        nodes {
          descriere {
            card
          }
          name
          slug
          calendarlink
          listingimages {
            image {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
          cardimages {
            childImageSharp {
              fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Cazare Colibita"
        description="Vila Franceza este destinatia de vacanta pentru cei care cauta maxim de confort, liniste si discretie pe malul lacului Colibita, Transilvania, Romania. "
      />
      <Slickgalleryall />
      <div className="row">
        {querrydata.allDataRoJson.nodes.map((item) => (
          <ListingCard
            key={item.name}
            title={item.name}
            description={item.descriere.card}
            image={item.cardimages}
            calendarlink={item.calendarlink}
            slug={item.slug}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
