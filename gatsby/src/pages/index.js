import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/gatsby-icon.png"
import ListingAll from "../components/listingall"
import SlickAll from "../components/slickgalleryall"

const IndexPage = () => (
  <Layout>
    <SlickAll />
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/page-2/">Go to page 2</Link>
    
    <Link to="about">Go to about</Link>
    <p>paragrap h</p>
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a word</p>
      <img src={logo} alt="" />
      <p>Second icon:</p>
    </div>
    <ListingAll />
  </Layout>
)

export default IndexPage
