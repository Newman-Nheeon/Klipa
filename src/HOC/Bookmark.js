import React from 'react'
import Button from '../components/Button'

export default function Bookmark() {
  return (
    <div className='sm:flex sm:justify-between py-[10px] bg-brownish items-center md:px-[80px] px-[40px]'>
<h1 className='font-[500] md:text-[32px] text-[22px] text-[blackish]'>Book an appointment today</h1>
     <Button children="Book an appointment"/>
    </div>
  )
}
