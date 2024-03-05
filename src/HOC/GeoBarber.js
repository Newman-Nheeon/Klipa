import React from 'react'
import map from "../images/geo.png"
import GeoForm from './GeoForm'

export default function GeoBarber () {
  return (
    <div className="md:flex justify-between md:mx-[80px]  mx-[40px] bg-brownish my-14 py-[90px] flex-row items-center">
      <img src={map}/>
      <GeoForm/>
    </div>
  )
}
