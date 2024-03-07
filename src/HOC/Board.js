import React from 'react'
import Sidebar from './Sidebar'
import NavBoard from './NavBoard'
import BarBoard from './BarBoard'

export default function Board() {
  return (
    <div className='sm:px-[80px] px-[40px] py-[15px] mt-20 bg-brownish flex space-x-4'>
      <Sidebar/>
      <div>
        <NavBoard/>
        <BarBoard/>
      </div>
    </div>
  )
}
