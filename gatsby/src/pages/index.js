import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

import ListingAll from "../components/listingall"
import SlickAll from "../components/slickgalleryall"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SlickAll />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>

      {/* <img src={logo} alt="" /> */}
    <ListingAll />
  </Layout>
)

export default IndexPage
