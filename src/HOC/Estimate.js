import React from 'react'
import EstimateForm from './EstimateForm'
import latino from "../assets/img/latino.png"


export default function Estimate() {
  return (
    <div className='md:mx-[80px] mx-[40px] my-14'>
      <h1 className="font-[700] text-[35px] text-blackish mb-[15px] text-center mt-4">Get an appointment Estimate</h1>
    <div className="md:flex justify-between md:space-x-10 flex-row space-y-10 items-center ">
      <EstimateForm/>
      <img src={latino} className='hidden md:flex'/>
    </div>
    </div>
  )
}
