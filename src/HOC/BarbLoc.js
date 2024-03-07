import React from "react";
import barb from "../assets/img/barbloc.png";

export default function BarbLoc() {
  return (
    <div className="flex flex-col bg-brownish my-4  rounded-md shadow-md min-h-screen space-y-4 px-3 py-4">
      <h1 className="text-blackish font-[600] text-[24px] ">
        Barbers in Surulere
      </h1>
      <LocList />
      <LocList />
      <LocList />
      <LocList />
      <LocList />
    </div>
  );
}

export function LocList() {
  return (
    <div className="flex space-x-4 ">
      <img src={barb} />
      <div className="flex flex-col">
        <h1 className="text-[24px] font-[500]">Cuts & Shapes</h1>
        <p className="text-[15px] font-[400] italic">
          Hair cut, coloring, etc.
        </p>
        <p className="text-[12px] font-[600] text-blackish">
          Akerele, Surulere
        </p>
        <button className="bg-blackish  py-[16px] px-[24px] text-whitish rounded-lg text-[14px] font-[600]">
          View availability
        </button>
      </div>
    </div>
  );
}
