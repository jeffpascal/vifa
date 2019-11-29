import React from "react"
import Listing2 from "../components/listing2"
import Slick from "../components/slickgallery"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
export default ({ pageContext, data }) => {


  return (

    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Slick galleryImages={data.allDataRoJson.listingimages} />

    </Layout>
  )
}


