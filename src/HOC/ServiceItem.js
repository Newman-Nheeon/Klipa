import React from "react";

export default function ServiceItem({ title, info, img }) {
  return (
    <div className="service">
    <div className="flex flex-col justify-center p-[20px] bg-deepbrown">
      <img src={img} alt="" className="w-[50px] mx-auto" />
      <h1 className="text-blackish text-[22px] font-[500] text-center">{title}</h1>
      <p className="text-blackish text-[13px] font-[300]">{info}</p>
    </div>
    </div>
  );
}
