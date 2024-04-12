import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/img/profile pic.jpg';
import { FaSignOutAlt, FaHome, FaWallet, FaHistory, FaStar, FaCog } from 'react-icons/fa';


const SideBar = () => {
  return (
    <div className='inline-block'>
    <div class="block w-72 mt-8 rounded-md shadow-md" style={{ background: '#f5ebe1', height: '47rem'}}>
    <div class="flex items-center justify-center h-20 mt-2">
        <img src={profilePic} alt="Profile Image" class="h-14 w-14 rounded-md" />
        <div className='block'>
             <h2 class="text-md font-semibold ml-2">Ifeoluwa Temilayo</h2>
        <p class="text-sm font-normal ml-2">Ifeoluwa@gmail.com</p>
        </div>
       
    </div>
    <div class="p-4">
    <ul class="space-y-2">
        <li class="flex items-center m-4">
            <FaHome className='h-5 w-5 mr-2 text-gray-600' />
            <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
        </li>
        <li class="flex items-center m-4 pt-3">
            <FaWallet className='h-5 w-5 mr-2 text-gray-600' />
            <a href="#" class="text-gray-700 hover:text-gray-900">My Wallet</a>
        </li>
        <li class="flex items-center m-4 pt-3">
            <FaHistory className='h-5 w-5 mr-2 text-gray-600' />
            <a href="#" class="text-gray-700 hover:text-gray-900">Transaction History</a>
        </li>
        <li class="flex items-center m-4 pt-3">
            <FaStar className='h-5 w-5 mr-2 text-gray-600' />
            <a href="#" class="text-gray-700 hover:text-gray-900">User Feedback & Ratings</a>
        </li>
        <li class="flex items-center m-4 pt-3">
            <FaCog className='h-5 w-5 mr-2 text-gray-600' />
            <a href="#" class="text-gray-700 hover:text-gray-900">Settings</a>
        </li>
        <li class="flex items-center m-4 pt-3">
            <FaSignOutAlt className='h-5 w-5 mr-2 text-gray-600' />
            <a href="#" class="text-gray-700 hover:text-gray-900">Logout</a>
        </li>
    </ul>
</div>

</div>

<div>

</div>

</div>
  )
}



export default SideBar
