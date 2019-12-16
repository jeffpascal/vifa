import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

import ListingAll from "../components/listingall"
import SlickAll from "../components/slickgalleryall"


import { useStaticQuery, graphql } from "gatsby"



const IndexPage = () => (
  
  <Layout pageTitle={'VIFA'}>
    
    <SEO title="Cazare Colibita" />
    <SlickAll />
      {/* <img src={logo} alt="" /> */}
    <ListingAll />
  </Layout>
)


export default IndexPage
