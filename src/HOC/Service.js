import React from "react";
import { services } from "../data";
import ServiceItem from "./ServiceItem";

export default function Service() {
  return (
    <div className="flex flex-col items-center mt-[50px] px-[80px]">
      <h1 className="font-[700] text-[35px] text-blackish mb-[15px]">Services</h1>
      <p className="font-[300] text-[20px] text-blackish max-w-[509px]  mb-[15px] text-center">Lorem ipsum dolor sit amet consectetur. Eleifend sed eget tortor adipiscing aliquet suspendisse tempor.</p>
      <div className="flex md:flex-row flex-col md:space-x-[20px] mb-[50px]">
        {services.map((item) => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
