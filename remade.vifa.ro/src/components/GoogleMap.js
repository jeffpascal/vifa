import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const mapContainerStyle = {
  height: "400px",
  width: "auto",
}

const center = {
  lat: 47.170991,
  lng: 24.903088,
}

const positions = [
  {
    lat: 47.172906,
    lng: 24.919781,
  },
  {
    lat: 47.174681,
    lng: 24.912024,
  },
  {
    lat: 47.174756,
    lng: 24.923518,
  },
]
const onLoad = (marker) => {
  console.log("marker: ", marker)
}

const MyGoogleMapColi = (props) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCTTduBC1YUDGO5gLKi9edM76J0WPoB6EE">
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
        {positions.map((position, index) => (
          <Marker key={index} onLoad={onLoad} position={position} />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default MyGoogleMapColi
