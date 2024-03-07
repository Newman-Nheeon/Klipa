import React from 'react';
import book from '../assets/img/Hand holding pen-amico.png';
import { AiOutlinePlusCircle} from "react-icons/ai";

const Wishlist = () => {
  return (

<div className='wishlist'>
<p>My Wishlist</p>
<AiOutlinePlusCircle id='add' />
<img id='chart' src={book} alt="chart" />
</div>
  )
}
export default Wishlist;