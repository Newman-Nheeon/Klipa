import React, { useState } from 'react';
import chart from '../assets/img/Pie chart-amico.png';
import { AiOutlinePlusCircle} from "react-icons/ai";
import TransactionList from './transactionList';
import Popup from './popup';



const Transactions = () => {
  const [open, setOpen] = useState(false)
  return (  
<div className='rounded-md shadow-md overflow-y-auto overflow-x-hidden max-h-96' style={{width: '47rem', background: '#f5ebe1'}}>
    <div className='p-3 flex justify-between border-b-2 border-black'  style={{width: '47rem', background: '#f5ebe1'}}>
      <h2 className='font-medium ms-2 font-sans mt-2 text-xl'>My Recent Transactions</h2>

      <div className='flex font-sans'>
        <button className='font-medium border-2 rounded-md border-black p-2 ms-2 hover:bg-black hover:text-[#F6EBE0] transition-all' type='button'>Pending</button>
        <button className='font-medium border-2 rounded-md border-black p-2 ms-2 hover:bg-black hover:text-[#F6EBE0] transition-all' type='button'>Completed</button>
        <button className='font-medium border-2 rounded-md border-black p-2 ms-2 hover:bg-black hover:text-[#F6EBE0] transition-all' type='button'>Failed</button>

      </div>
    </div>

    <div className=''>
    <TransactionList />
    </div>

    <div className='flex justify-end'>
        <AiOutlinePlusCircle className='text-3xl m-3 mb-2' onClick={() => setOpen(true)} style={{ color: 'black'}} />
    <div>
    <Popup open={open} onClose={() => setOpen(false)}>
      <input type='number' placeholder='  Account Number' className='w-full m-2 shadow-sm h-9' style={{border: '1px solid black', borderRadius: '4px'}} />
      <input type='text' placeholder='  Account Name' className='w-full m-2 shadow-sm h-9' style={{border: '1px solid black', borderRadius: '4px'}} />
      <input type='number' placeholder='  Ammount' className='w-full m-2 shadow-sm h-9' style={{border: '1px solid black', borderRadius: '4px'}} />

    </Popup>
    </div> 
    </div>
    

</div>

  )
}

export default Transactions;