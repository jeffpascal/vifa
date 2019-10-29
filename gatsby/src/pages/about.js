import React from "react"
import Header2 from "../components/header2"
import SlickAll from "../components/slickgalleryall"
export default () => (
   

  <div style={{ color: `teal` }}>
    <SlickAll />
       <Header2 siteTitle="da" headerText="props.headerText" randomProp="prop2"/>
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
  </div>
 
)