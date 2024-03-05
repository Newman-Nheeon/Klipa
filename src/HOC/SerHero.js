import React from 'react'

export default function SerHero() {
  return (
    <div className="heroser mt-20"> 
    <div className="flex flex-col items-center justify-center md:p-[80px] p-[40px] md:pr-0">
      <h1 className="text-blackish md:text-[60px] text-[40px] font-[800] max-w-[733px] text-center">
      Transforming your looks with our expert service
      </h1>
      <p className="text-blackish text-[20px] mb-6 max-w-[567px] text-center">
      Lorem ipsum dolor sit amet consectetur. Eget id nec ipsum cras quis donec condimentum leo dictum.
      </p>
      <div className='flex md:flex-row flex-col md:justify-between max-w-[433px] items-center justify-center md:space-y-0 space-y-4'>
      <button className='bg-blackish  py-[16px] px-[24px] text-whitish rounded-lg text-[18px]'>View our barbers</button>
      <button className='bg-transparent py-[16px] px-[12px] text-whitish rounded-lg text-[18px] border-[2px] border-blackish'>Book an appointment</button>
      </div>
    </div>
  </div>
  )
}
