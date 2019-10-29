import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/gatsby-icon.png"
import ListingAll from "../components/listingall"
import SlickAll from "../components/slickgalleryall"
const IndexPage = () => (
  <div>
  <SlickAll />
  <Layout>
    

    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>

      {/* <img src={logo} alt="" /> */}
    <ListingAll />
  </Layout>
  </div>
)

export default IndexPage
