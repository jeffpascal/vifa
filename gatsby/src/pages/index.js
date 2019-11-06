import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

import ListingAll from "../components/listingall"
import SlickAll from "../components/slickgalleryall"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SlickAll />

      {/* <img src={logo} alt="" /> */}
    <ListingAll />
  </Layout>
)

export default IndexPage
