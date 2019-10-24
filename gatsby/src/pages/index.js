import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image2 from "../components/image2"
import SEO from "../components/seo"
import logo from "../images/gatsby-icon.png"
import ListingAll from "../components/listingall"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image2 />
    </div>
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
