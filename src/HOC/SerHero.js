import React from 'react'

export default function SerHero() {
  return (
    <div className="hero mt-6"> 
    <div className="flex flex-col items-center justify-center p-[80px] pr-0">
      <h1 className="text-blackish text-[60px] font-[800] w-[733px] text-center">
      Transforming your looks with our expert service
      </h1>
      <p className="text-blackish text-[20px] mb-6 w-[567px] text-center">
      Lorem ipsum dolor sit amet consectetur. Eget id nec ipsum cras quis donec condimentum leo dictum.
      </p>
      <div className='flex justify-between w-[433px]'>
      <button className='bg-blackish  py-[16px] px-[24px] text-whitish rounded-lg text-[18px]'>View our barbers</button>
      <button className='bg-transparent py-[16px] px-[12px] text-whitish rounded-lg text-[18px] border-[2px] border-blackish'>Book an appointment</button>
      </div>
    </div>
  </div>
  )
}
