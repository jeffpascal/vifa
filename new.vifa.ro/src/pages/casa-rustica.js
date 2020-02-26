import React, { Component }  from "react"

import LayoutNoWidth from "../components/LayoutNoWidth"
import SEO from "../components/seo"
import Beds24Iframe from "../components/beds24iframe";

export default class SecondPage extends Component {

  render() {
    return (
      <LayoutNoWidth>
        <SEO title="VIFA Casa Rustica" description="Casa Rustica" keywords={["cazare-colibita", "lac colibita"]}/>
        <Beds24Iframe iframeWidth="100%" iframeHeight="4000" iframeSrc="https://www.beds24.com/booking2.php?ownerid=55588&amp;referer=Website+iframe" 
        iframeLinkHref="https://www.beds24.com/booking2.php?ownerid=55588&amp;referer=Website+iframe"
        linkTitle="Book Now"/>
      </LayoutNoWidth>
    );
  }



}

