import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { AiFillDelete} from "react-icons/ai";

const WishlistContent = () => {
  return (
    <div>
          <div className='m-3'>
        <div>
          <div className='bg-gray-900 w-full flex justify-between p-2 rounded-sm'>
            <p className='font-semibold text-white my-1 ms-2'>Cut my hair this week on Thursday </p>
            <AiFillDelete size={36} className='p-2' style={{ color: 'white'}} />
          </div>
        </div>

        <div>
          <div className='bg-gray-900 w-full flex justify-between p-2 rounded-sm mt-1'>
            <p className='font-semibold text-white my-1 ms-2'>Cut my hair this week on Thursday </p>
            <AiFillDelete size={36} className='p-2' style={{ color: 'white'}} />
          </div>
        </div>
        <div>
          <div className='bg-gray-900 w-full flex justify-between p-2 rounded-sm mt-1'>
            <p className='font-semibold text-white my-1 ms-2'>Cut my hair this week on Thursday </p>
            <AiFillDelete size={36} className='p-2' style={{ color: 'white'}} />
          </div>
        </div>
        <div>
          <div className='bg-gray-900 w-full flex justify-between p-2 rounded-sm mt-1'>
            <p className='font-semibold text-white my-1 ms-2'>Cut my hair this week on Thursday </p>
            <AiFillDelete size={36} className='p-2' style={{ color: 'white'}} />
          </div>
        </div>
        <div>
          <div className='bg-gray-900 w-full flex justify-between p-2 rounded-sm mt-1'>
            <p className='font-semibold text-white my-1 ms-2'>Cut my hair this week on Thursday </p>
            <AiFillDelete size={36} className='p-2' style={{ color: 'white'}} />
          </div>
        </div>
       

    </div>
    </div>
  )
}

export default WishlistContent
