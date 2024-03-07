import React from "react";
import { useState } from "react";
import { nav } from "../data";
import logo from "../assets/img/logo.png";
import NavItems from "./NavItems";
import Button from "./Button";
import { NavLink } from "react-router-dom";
export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  const open = () => {
    setOpenNav((prev) => !prev);
  };
  return (
    <div className="sm:px-[80px] px-[40px] py-[15px] fixed top-0 left-0 right-0 bg-white">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" style={{ width: "100px", height: "auto" }} />

        <div className="md:flex md:space-x-[48px] space-x-[30px] hidden">
          {nav.map((item) => (
            <NavItems key={item.id} {...item} />
          ))}
          <NavLink to="/login">
            <Button children="Login/Signup" />
          </NavLink>
        </div>
        <div className="md:hidden" onClick={open}>
          {openNav ? <p>close</p> : <p>open</p>}
        </div>
      </div>
      {openNav && (
        <div className="flex md:visible mt-4">
          <div className="flex flex-col space-y-[48px]">
            {nav.map((item) => (
              <NavItems key={item.id} {...item} />
            ))}
            <NavLink to="/login">
              <Button children="Login/Signup" />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
