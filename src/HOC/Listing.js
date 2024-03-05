import React from 'react'
import { listing } from '../data'
import List from './List'

export default function Listing() {
  return (
    <div className='grid md:grid-cols-2'>
        {listing.map((item) => (
          <List key={item.id} {...item} />
        ))}
    </div>
  )
}
