import React from "react";
import Nav from "../components/Nav";
import Transactions from '../components/transaction';
import Footer from "../components/Footer";
import '../assets/css/profile.css';
import SideBar from "../components/Sidebar";
import Wishlist from "../components/wishlist";



export default function Profile() {
  return (
    <div>
      <Nav />
      <div className='ms-32 mt-20 mb-10'>
        <div className='flex font-sans'>
          <SideBar />
          <div className='transaction/wishlist block ms-16 mt-8 mb-10'>
            <Transactions />
            <Wishlist />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}