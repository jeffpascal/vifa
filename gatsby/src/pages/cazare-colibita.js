import React, { Component }  from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Slick from "../components/slickgallery"
import Listing2 from "../components/listing2";

export default class SecondPage extends Component {

  render() {
    return (
      <Layout>
        <SEO title="Cazare Colibita, rezerva acum" />
        <div className="iframe-container">
          <iframe
            width="800"
            height="2000"
            src="https://www.beds24.com/booking2.php?ownerid=55588&amp;referer=Website+iframe"
            style={{ "maxWidth": "100%", "border": "none", "overflow": "auto" }}>
            <p>
              <a href="https://www.beds24.com/booking2.php?ownerid=55588&amp;referer=Website+iframe" title="Book Now">Book Now</a>
            </p>
          </iframe>
        </div>
      </Layout>
    );
  }



}

