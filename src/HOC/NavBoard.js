import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import location from "../images/location.svg";

export default function NavBoard() {
  return (
    <div className="flex md:w-[810px] justify-between  p-4">
      <div>
        <AiOutlineSearch className="absolute m-3" />
        <input
          className="bg-white border-none text-blackish md:w-[365px] h-[44px] py-3 px-[32px]"
          placeholder="Search"
        />
      </div>
      <div className="flex">
        <p className="font-[400] text-blackish text-[16px] text-end">
          Current location - Surulere, Lagos<br/>Edit
        </p>
        <img src={location} />
      </div>
    </div>
  );
}
