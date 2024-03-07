import React from "react";
import love from "../assets/img/love.svg"

export default function List({ title, price, more, img }) {
  return (
    <div className="md:m-5 m-4">
      <div className="flex flex-col md:space-y-3 space-y-2 bg-brownish md:px-[86px] px-[23px] md:py-[49px] py-[24px] text-blackish round">
        <h1 className="md:text-[32px] text-[26px] font-[700] ">{title}</h1>
        <p className="md:text-[24px] text-[20px] font-[400]">{price}</p>
        <p className="md:text-[18px] text-[15px] font-[300] italic">{more}</p>
        <img src={img} />
      <div className="flex justify-between">
      <button className='bg-blackish  py-[16px] md:px-[24px] px-2 text-whitish rounded-lg text-[18px]'>Add to service cart</button>
      <img src={love}/>
      </div>
      </div>
    </div>
  );
}
