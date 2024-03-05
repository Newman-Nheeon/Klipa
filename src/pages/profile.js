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
      <div className='container'>
        <div className='content'>
          <SideBar />
          <div className='right-side'>
            <Transactions />
            <Wishlist />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}