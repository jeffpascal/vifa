import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

import ListingAll from "../components/listingall"
import SlickAll from "../components/slickgalleryall"





const IndexPage = () => (
  
  <Layout pageTitle={'VIFA'}>
    
    <SEO title="Cazare Colibita" description="Vila Franceza este destinatia de vacanta pentru cei care cauta maxim de confort, liniste si discretie pe malul lacului Colibita, Transilvania, Romania. "/>
    <SlickAll />
      {/* <img src={logo} alt="" /> */}
    <ListingAll />
  </Layout>
)


export default IndexPage
