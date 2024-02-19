import React from "react";
import Nav from "../components/Nav";
import Body from "../components/Body";
import Footer from "../components/Footer";
import '../assets/css/profile.css';



export default function Profile() {
    return (
      <div>
        <Nav />
        <Body />
        <Footer/>
      </div>
    );
  }
  








// import React from 'react';
// import logo from '../assets/img/logo.png'
// import { FaSignOutAlt, FaUsers, FaHome, FaWallet, FaHistory, FaHeart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';


// function ProfilePage() {
//     return (
//         <div className="main-container d-flex">
//             <Sidebar />
//             <Content />
//         </div>
//     );
// }

// function Sidebar() {
//     return (
//         <div className="sidebar" id="side_nav">
//             <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
//                 {/* <h1 className="fs-4"><img className="img-fluid ms-5" style={{ width: '120px', justifyContent: 'center', textAlign: 'center' }} src={logo} alt="" /></h1> */}
//                 <hr className="h-color mx-3" />
//             </div>
//             <Menu />
//         </div>
//     );
// }

// function Menu() {
//     const items = [
//         { src: FaHome, text: 'Home', to: '/Home' },
//         { src: FaWallet, text: 'My Wallet', to: '/Wallet' },
//         { src: FaHistory, text: 'History', to: '/History' },
//         { src: FaUsers, text: 'User Feedback & Ratings', to: '/ratings' },
//         { src: FaHeart, text: 'Wish List', to: '/wishlist' },
//         { src: FaSignOutAlt, text: 'Logout', to: '/logout' }
//     ];

//     return (
//         <ul className="list-unstyled px-2">
//             {items.map((item, index) => (
//                 <MenuItem key={index} src={item.src} text={item.text} to={item.to} />
//             ))}
//         </ul>
//     );
// };

// function MenuItem({ src: Icon, text, to }) {
//     return (
//         <li className="mb-3">
//             <Link to={to} className="text-decoration-none px-3 py-2 d-block ps-4">
//                 <Icon className="img-fluid" style={{ width: '20px', marginRight: '10px' }} />
//                 {text}
//             </Link>
//         </li>
//     );
// };

// function Content() {
//     return (
//     <div className="content" id="content">
//         <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
//             <hr className="h-color mx-3" />
//             </div>
//             <Transactions />
//             < WishList />
//             </div>
//             );
//         };


// function Transactions() {

//     return (
//         <div className="content" id="content">
//             <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
//                 <hr className="h-color mx-3" />
//                 </div>
//                 <Transactions />
//                 < WishList />
//                 </div>
//                 );
// }



// function WishList() {
    
// }

// function ListColumn({ title }) {
    
// }

// function UserItem() {
    
// }

// export default ProfilePage;
