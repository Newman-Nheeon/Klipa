import React from "react";
import x from "../assets/img/xapp.svg";
import insta from "../assets/img/in.svg";
import fb from "../assets/img/fb.svg";
import link from "../assets/img/linkedin.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="px-[80px] py-6 bg-gold ">
    <div className="flex  justify-between py-2">
      <div className="flex flex-col justify-center space-y-2">
        <h1 className="font-[700] text-[32px] text-whitish">Klipa.ng</h1>
        <p className="font-[300] text-[20px] text-whitish w-[509px]">
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
        <NavLink to="/" className="text-whitish text-[20px] font-[300]">
          Home
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300]">
          Services
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300]">
          Appointments
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300]">
          Blogs
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300]">
          FAQ
        </NavLink>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="font-[500] text-[24px] text-whitish">Transparency</h1>
        <NavLink to="" className="text-whitish text-[20px] font-[300]">
        Term & Conditions
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300]">
          Cookies Policy
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300]">
        Information Security
        </NavLink>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="font-[500] text-[24px] text-whitish">Contact</h1>
        <NavLink to="" className="text-whitish text-[20px] font-[300]">
        info@klipa.com
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300]">
        +234-9011232546
        </NavLink>
        <NavLink to="" className="text-whitish text-[20px] font-[300]">
        +234-8011232546
        </NavLink>
      </div>
    </div>
    <hr />
    <p className="text-center font-[300] text-[20px] text-whitish py-2">Copyright @ 2023 Klipa.ng All Rights Reserved</p>
    </div>
  );
}
