import React from "react";
import BarbInput from "../components/Input";
import Button from "../components/Button";

export default function GeoForm() {
  return (
    <div className="bg-whitish p-6 rounded-lg shadow max-w-[427px] md:absolute md:right-40 flex flex-col ">
      <h1 className="text-blackish my-4 font-[600] text-[29px]">
        Barbers near you
      </h1>
      <BarbInput
        label="Street name"
        placeholder="Enter street name"
        type="text"
      />
      <BarbInput
        label="City/Town"
        placeholder="Enter city/town name"
        type="text"
      />
      <select
        id="state"
        className="rounded-lg text-[17px] text-grey2 p-[17px] border-blackish border-solid border-2 mt-2 mb-4"
      >
        <option defaultValue>Select state</option>
      </select>
      <Button children="Proceed" />
    </div>
  );
}
