import React from 'react'
import Button from '../components/Button'

export default function Bookmark() {
  return (
    <div className='flex justify-between py-[10px] bg-brownish items-center px-[80px]'>
<h1 className='font-[500] text-[32px] text-[blackish]'>Book an appointment today</h1>
     <Button children="Book an appointment"/>
    </div>
  )
}
