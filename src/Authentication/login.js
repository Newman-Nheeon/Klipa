import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import toast, { Toaster } from "react-hot-toast";
import '../assets/css/auth.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


function Login() {
  const navigate = useNavigate();  // Initialized the history object
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); 
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async (values, actions) => {
      if (formik.isValid) {
          const endpoint = 'https://test.3scorers.com/api/v1/admin/login';
  
          try {
              const response = await axios.post(endpoint, { email: values.email, password: values.password })
            
              if (response.data && response.data.success) { 
                  toast.success("Login Successful");
                  
                  // Store the access token and refresh token in local storage
                  localStorage.setItem('accessToken', response.data.accessToken);
                  localStorage.setItem('refreshToken', response.data.refreshToken);

                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  actions.resetForm();
                  navigate(from, { replace: true });
                  
              }
              
          } catch (error) {
              // Handle errors from the API call
              if (error.response && error.response.data && error.response.data.message) {
                  toast.error(error.response.data.message); // Show error message from API
              } else if (error.response?.status === 401) {
                toast.error("Email or Password is Incorrect");
              } else if (error.response?.status === 400) {
                toast.error("Client Error");
              } else if (error.response?.status === 500) {
                toast.error("Internal Server Error");
              } 
              else {
                  toast.error("Login Failed!");
              }
          }
      }
    }
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(prev => !prev);
  };


  return (
    <div className="split right">
      <div className="split left">
        <div className="centered">
          <img src={logo} alt="Logo" />
          <p>Get your Hair Styled in the most comfortable way ever!</p>
        </div>
      </div>
    <form onSubmit={formik.handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-lg-2 col-md-3 col-sm-3 col-sm-1 mt-2 text-center">
          <img className="img-fluid" src={logo} alt="" />
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
      <div className="row justify-content-center m-0 m-5">
      <h2 className='text-center'>Welcome Back</h2>
        <p className='text-center'>Enter your email and password to access your account</p>
        <div className="col-md-10 bg-white rounded-4 pb-5 pt-5">
          <div className="mb-3 mt-3 me-2 ms-2">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control p-2 shadow-sm" 
              id="email" 
              placeholder="Email Address" 
              {...formik.getFieldProps('email')} 
              required  
              
            />
          </div>

          <div className="mb-3 me-2 ms-2 position-relative">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type={passwordVisible ? "text" : "password"}
                  className="form-control p-2 shadow-sm" 
                  id="password" 
                  placeholder="Password" 
                  {...formik.getFieldProps('password')} 
                  required 
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 my-3 text-gray-700"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>


          <div className="text-center mt-5 mb-5">
            <button type="submit" id="btn" className="btn text-center">Login</button>
            <p>Dont Have an Account? <Link to="/signup">Create Account</Link></p>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
}

export default Login;
