import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import ServiceList from './pages/ServiceList';
import Signup from './Authentication/signup';
import Login from './Authentication/login'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import Profile from './pages/profile';
import './style.css';
import Appointment from './pages/Appointment';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/service",
      element: <ServiceList />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/appointment",
      element: <Appointment />,
    },
  ]);
  return (
    <div className='bg-whitish '>
      <RouterProvider router={router} />
    </div>
  );
}