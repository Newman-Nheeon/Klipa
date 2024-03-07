import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/img/profile pic.jpg';
import { FaSignOutAlt, FaUsers, FaRegChartBar, FaUserTie } from 'react-icons/fa';


const SideBar = () => {
  return (
    
      <div className='sidebar'>
        <div className='sidebar-header'>
            <img src={profilePic} alt='profile picture'/>
            <div className='user-info'>
                 <span>Ifeoluwa Temilayo</span>
            <p>ifeoluwatemi@gmail.com</p>
            </div>
        </div>

        <div className='sidebar-links'  style={{ color: '#000'}}>
            <Menu />
        </div>
      </div>
  )
}

function Menu() {
  const items = [
      { src: FaRegChartBar, text: 'Overview', to: '/overview' },
      { src: FaUsers, text: 'Users', to: '/users' },
      { src: FaUserTie, text: 'Admins', to: '/admins' },
      { src: FaSignOutAlt, text: 'Logout', to: '/logout' }
  ];

  return (
      <ul className="list-unstyled px-2">
          {items.map((item, index) => (
              <MenuItem key={index} src={item.src} text={item.text} to={item.to} />
          ))}
      </ul>
  );
};

function MenuItem({ src: Icon, text, to }) {
  return (
      <li className="mb-3">
          <Link to={to} className="text-decoration-none px-3 py-2 d-block ps-4">
              <Icon className="img-fluid" style={{ width: '20px', marginRight: '10px' }} />
              {text}
          </Link>
      </li>
  );
};

export default SideBar
