import React, { useState } from 'react';
import book from '../assets/img/Hand holding pen-amico.png';
import { AiOutlinePlusCircle, AiFillDelete} from "react-icons/ai";
import WishlistContent from './wishlistContent';
import Popup from './popup';

const Wishlist = () => {
  
  return (
    <div className='rounded-md shadow-md mt-5 overflow-y-auto overflow-x-hidden max-h-80' style={{width: '47rem', background: '#f5ebe1'}}>
    <div className='p-3 flex justify-between border-b-2 border-black'>
      <h2 className='font-medium ms-2 font-sans mt-2 text-xl'>Wishlist</h2>

    </div>

      <div>
        {/* WISHLISTCONTENT */}
            <WishlistContent />
      </div>
      

    <div className='flex justify-end'>
        <AiOutlinePlusCircle className='text-3xl m-3 mb-2' style={{ color: 'black'}} />
    </div>

   

</div>

  )
}
export default Wishlist;