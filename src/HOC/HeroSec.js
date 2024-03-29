import React from "react";
import Button from "../components/Button";
export default function HeroSec() {
  return (
    <div className="hero mt-20">
      <div className="flex flex-col max-w-[581px] items-start sm:p-[80px] p-[40px] sm:pr-0">
        <h1 className="text-blackish text-[55px] font-[800]">
          Barbing Service in a Comfortable Way
        </h1>
        <p className="text-blackish text-[20px] mb-6">
          Praesent vel lorem quis neque maximus convallis in ac arcu praesent
          vel lorem quis neque maximus convallis in
        </p>
        <Button children="Book an appointment"/>
      </div>
    </div>
  );
}
