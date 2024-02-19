import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { registerValidation } from "../helper/validate";
import logo from "../assets/img/logo.png";
import '../assets/css/auth.css';



const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      repeat_password: ""
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,


    onSubmit: async (values, actions) => {
      const endpoint = 'https://test.3scorers.com/api/v1/admin/sign-up/?adminId=1';
      const payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          username: values.username,
          password: values.password,
          repeat_password: values.repeat_password
        };

      try {
        const response = await axios.post(endpoint, payload)

        if (formik.isValid) {
          toast.success("Registration Successful");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          actions.resetForm();
          navigate('/');
        } 
      } catch (error) {
        console.error(error);
        if (error.response?.status === 500) {
          toast.error("Internal Server Error");
        }
        else if (error.response?.status === 409) {
          toast.error("Username Taken or Email Already Exists");
        }
        else {
          toast.error("Registration Failed");
        }
      }
    }
  });

  return (
    <div className="split right">
      <div className="split left">
        <div className="centered">
          <img src={logo} alt="Logo" />
          <p>Get your Hair Styled in the most comfortable way ever!</p>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
      <div className="container">
        <div className="row justify-content-center align-items-center pt-4 mt-4 m-0">
          <div className="col-md-10">
          <div className="centerSignup col-lg-2 col-md-3 col-sm-3 col-sm-1 mt-2">
          <img className="img-fluid" src={logo} alt="" />
        </div>
            <form className="form" onSubmit={formik.handleSubmit} autoComplete="off">
              <div className="firstname">
                <label htmlFor="firstName" className="form-label ">First Name</label>
                <input {...formik.getFieldProps("firstName")} type="text" className="form-control p-1 shadow-sm border-1 border-black mb-2" id="firstName" placeholder="First Name"/>
              </div>

              <div className="lastname">
                <label htmlFor="lastName" className="form-label ">Last Name</label>
                <input {...formik.getFieldProps("lastName")} type="text" className="form-control p-1 shadow-sm border-1 border-black mb-2" id="lastName" placeholder="Last Name"/>
              </div>

              <div className="username">
                <label htmlFor="username" className="form-label ">Username</label>
                <input {...formik.getFieldProps("username")} type="text" className="form-control p-1 shadow-sm border-1 border-black mb-2" id="username" placeholder="Username"/>
              </div>

              <div className="email">
                <label htmlFor="email" className="form-label ">Email Address</label>
                <input {...formik.getFieldProps("email")} type="email" className="form-control p-1 shadow-sm border-1 border-black mb-2" id="email" placeholder="Email Address"/>
              </div>

              <div className="password">
                <label htmlFor="password" className="form-label ">Password</label>
                <input {...formik.getFieldProps("password")} type={"password"} className="form-control p-1 shadow-sm border-1 border-black mb-2" id="password" placeholder="Password"/>
              </div>

              <div className="repeat_password">
                <label htmlFor="repeat_password" className="form-label ">Confirm Password</label>
                <input {...formik.getFieldProps("repeat_password")} type={"password"} className="form-control p-1 shadow-sm border-1 border-black mb-2" id="repeat_password" placeholder="Confirm Password"/>
              </div>

              <div className="text-center mt-5 mb-3">
                <button type="submit" id="btn" className="btn text-center">Sign Up</button>
                </div>
                </form>
              <div className="form__footer text-center">Already have an account?{" "}<Link className="form__footer-link" to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
