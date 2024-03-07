import React from 'react';
import chart from '../assets/img/Pie chart-amico.png';
import { AiOutlinePlusCircle} from "react-icons/ai";


const Transactions = () => {
  return (


 
 <div className='trans-history'>
   <div className='trans-header'>
     <p>My recent transactions</p>
     <div className='trans-links'>
       <li><a href='#'>Active</a></li>
       <li><a href='#'>Completed</a></li>
       <li><a href='#'>Resheduled</a></li>
       <li><a href='#'>Completed</a></li>
     </div>
   </div>

<AiOutlinePlusCircle id='add' />
<img id='chart' src={chart} alt="chart" />
 </div>
  )
}

export default Transactions;