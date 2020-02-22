import React from "react"
import Listing2 from "../components/listing2"
import Slick from "../components/slickgallery"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
export default ({ pageContext, data }) => {


  return (

    <Layout>
      <SEO title={pageContext.item.name} description={pageContext.item.descriere.card} />
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>

    </Layout>
  )
}


