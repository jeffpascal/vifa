import React, { Component }  from "react"
import { Link } from "gatsby"

import LayoutNoWidth from "../components/LayoutNoWidth"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Slick from "../components/slickgallery"
import Listing2 from "../components/listing2";
import Beds24Iframe from "../components/beds24iframe";

export default class SecondPage extends Component {

  render() {
    return (
      <LayoutNoWidth>
        <SEO title="Cazare Colibita, rezerva acum" description="Casa Pescarului capacitate 8 persoane, "/>
        <Beds24Iframe iframeWidth="100%" iframeHeight="4000" iframeSrc="https://www.beds24.com/booking2.php?ownerid=55588&amp;referer=Website+iframe" 
        iframeLinkHref="https://www.beds24.com/booking2.php?ownerid=55588&amp;referer=Website+iframe"
        linkTitle="Book Now"/>
      </LayoutNoWidth>
    );
  }



}
