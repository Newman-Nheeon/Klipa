import React from "react";
import EstInput from "../EstInput";

export default function EstimateForm() {
  return (
    <div className="md:px-[45px]  px-6 py-[74px] bg-brownish w-[100%] grid">
      <div className="grid md:grid-cols-2 space-y-[20px] items-center md:space-x-[20px]">
        <EstInput 
        placeholder="Full name" />
        <EstInput placeholder="Email address" />
        <EstInput  placeholder="+ 234 (000) 555-0000"/>
        <EstInput placeholder="Date (DD/MM/YYYY)"/>
        <select
        id="state"
        className="rounded-lg text-[17px] text-grey2 p-[17px] border-none mt-3 h-[70px]"
      >
        <option defaultValue>Category of service</option>
      </select>
        <EstInput placeholder="Number of persons"/>
      </div>
      <textarea rows={10} className="mt-4 text-grey4 p-[17px]" placeholder="Message"/>
    </div>
  );
}
