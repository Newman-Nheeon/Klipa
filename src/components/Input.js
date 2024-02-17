import React from "react";

export default function BarbInput({ label, placeholder, type }) {
  return (
    <div className="flex flex-col my-3">
      <label htmlFor="street" className="text-blackish text-[17px] font-500">
       {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        required
        className="rounded-lg text-[17px] text-grey2 p-[17px]  focus:border-rosebrown border-solid border-2 mt-2 w-full"
      />
    </div>
  );
}

