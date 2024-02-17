import React from 'react'
import EstimateForm from './EstimateForm'
import latino from "../images/latino.png"


export default function Estimate() {
  return (
    <div className='mx-[80px] my-14'>
      <h1 className="font-[700] text-[35px] text-blackish mb-[15px] text-center mt-4">Get an appointment Estimate</h1>
    <div className="flex justify-between space-x-10">
      <EstimateForm/>
      <img src={latino}/>
    </div>
    </div>
  )
}
