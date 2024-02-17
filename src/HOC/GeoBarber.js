import React from 'react'
import map from "../images/geo.png"
import GeoForm from './GeoForm'

export default function GeoBarber () {
  return (
    <div className="flex justify-between mx-[80px] bg-brownish my-14 py-[90px]">
      <img src={map}/>
      <GeoForm/>
    </div>
  )
}
