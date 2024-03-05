import React from 'react'
import { 
  AiOutlineHome, 
  AiOutlineStock, 
  AiOutlineHistory, 
  AiOutlinePieChart, 
  AiOutlineCalendar, 
  AiOutlineLogout, 
} from "react-icons/ai";


export default function Sidebar() {
  return (
    <div className='flex flex-col bg-brownish w-1/4 my-4  rounded-md shadow-md h-screen space-y-6 px-2 py-4'>
      <h1 className='text-blackish font-[600] text-[24px] '>Barbers near me</h1>
      <div className='sidebar-links'>
            <div className='links'>
                <AiOutlineHome />
                <span className='link-text'>All appointments</span>
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
                <span className='link-text'>Settings</span>
            </div>

            <div className='links' style={{ marginTop: '80px'}}>
                <AiOutlineLogout />
                <span className='link-text'>Logout</span>
            </div>
        </div>
      </div>
  )
}
