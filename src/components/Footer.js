import React from "react";
import x from "../images/xapp.svg";
import insta from "../images/in.svg";
import fb from "../images/fb.svg";
import link from "../images/linkedin.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="md:px-[80px] px-[40px]  py-6 bg-gold ">
    <div className="md:flex flex-row justify-between py-2 space-y-8 md:space-y-0">
      <div className="flex flex-col justify-center space-y-2">
        <h1 className="font-[700] text-[32px] text-whitish">Klipa.ng</h1>
        <p className="font-[300] text-[20px] text-whitish max-w-[509px]">
          Lorem ipsum dolor sit amet consectetur. Eleifend sed eget tortor
          adipiscing aliquet suspendisse tempor.
        </p>
        <div className=" flex space-x-2">
          <img src={link} />
          <img src={x} />
          <img src={insta} />
          <img src={fb} />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="font-[500] text-[24px] text-whitish">Quicklinks</h1>
        <NavLink to="/" className="text-whitish text-[20px] font-[300] no-underline">
          Home
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300] no-underline">
          Services
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300] no-underline">
          Appointments
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300] no-underline">
          Blogs
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300] no-underline">
          FAQ
        </NavLink>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="font-[500] text-[24px] text-whitish">Transparency</h1>
        <NavLink to="" className="text-whitish text-[20px] font-[300] no-underline">
        Term & Conditions
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300] no-underline">
          Cookies Policy
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300] no-underline">
        Information Security
        </NavLink>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="font-[500] text-[24px] text-whitish">Contact</h1>
        <NavLink to="" className="text-whitish text-[20px] font-[300] no-underline">
        info@klipa.com
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300] no-underline">
        +234-9011232546
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300] no-underline">
        +234-8011232546
        </NavLink>
      </div>
    </div>
    <hr />
    <p className="text-center font-[300] text-[20px] text-whitish py-2">Copyright @ 2023 Klipa.ng All Rights Reserved</p>
    </div>
  );
}
