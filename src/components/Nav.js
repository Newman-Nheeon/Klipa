import React from "react";
import { nav } from "../data";
import  logo  from "../assets/img/logo.png"
import NavItems from "./NavItems";
import Button from "./Button";


export default function Nav() {
  return (
    <div className="flex justify-between items-center px-[80px] py-[13px]">
      <img src={logo} alt="logo" style={{ width: '100px', height: 'auto' }}/>

      <div className="flex space-x-[48px]">
      {nav.map((item) => (
        <NavItems key={item.id} {...item} />
      ))}
      <Button children="Login/Signup"/>
      </div>
    </div>
  );
}
