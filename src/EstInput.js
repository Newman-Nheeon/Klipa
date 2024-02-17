import React from "react";
export default function EstInput({ placeholder, type }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        required
        className="rounded-lg text-[17px] text-grey2 px-[17px] py-2 h-[70px] w-[100%]"
      />
    </div>
  );
}
