import React from 'react';
import profilePic from '../images/profile pic.jpg';
import chart from '../images/Pie chart-amico.png';
import book from '../images/Hand holding pen-amico.png';
import { 
  AiOutlineHome, 
  AiOutlineStock, 
  AiOutlineHistory, 
  AiOutlinePieChart, 
  AiOutlineCalendar, 
  AiOutlineLogout, 
  AiOutlinePlusCircle
} from "react-icons/ai";

const Body = () => {
  return (
    <div>
        <div className='container'>
          <div className='everything'>
      <div className='sidebar'>
        <div className='sidebar-header'>
            <img src={profilePic} alt='profile picture'/>
            <div className='user-info'>
                 <span>Ifeoluwa Temilayo</span>
            <p>ifeoluwatemi@gmail.com</p>
            </div>
        </div>

        <div className='sidebar-links'>
            <div className='links'>
                <AiOutlineHome />
                <span className='link-text'>Home</span>
            </div>

            <div className='links'>
                <AiOutlineStock />
                <span className='link-text'>My Wallet</span>
            </div>

            <div className='links'>
                <AiOutlineHistory/>
                <span className='link-text'>Transaction History</span>
            </div>

            <div className='links'>
                <AiOutlinePieChart/>
                <span className='link-text'>User feedback & ratings</span>
            </div>

            <div className='links'>
                <AiOutlineCalendar />
                <span className='link-text'>Whishlist</span>
            </div>

            <div className='links' style={{ marginTop: '150px'}}>
                <AiOutlineLogout />
                <span className='link-text'>Logout</span>
            </div>
        </div>
      </div>


                            {/* TRANSACTION HISTORY */}
    <div className='second-side'>
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
            
     <div className='wishlist'>
      <p>My Wishlist</p>
      <AiOutlinePlusCircle id='add' />
      <img id='chart' src={book} alt="chart" />
      </div>

      </div>
      </div>
      
       
      </div>
    </div>
  )
}

export default Body
