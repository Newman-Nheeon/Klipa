import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItems({id, name, link}) {
  return (
    <div className='flex space-x-[20px] items-center'>
   <NavLink to={link} className="text-blackish text-[18px] no-underline">
    {name}
   </NavLink>
   </div>
  )
}
