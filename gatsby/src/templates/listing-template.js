import React from "react"
import Listing2 from "../components/listing2"

export default ({ pageContext: { data } }) => (
    <div>
   <p>{data.name}</p>
   <Listing2 listing = {data} />
   </div>
)