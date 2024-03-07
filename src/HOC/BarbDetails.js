import React from "react";
import barb from "../assets/img/barbloc.png";

export default function BarbDetails() {
  return (
    <div className="flex flex-col bg-brownish my-4  rounded-md shadow-md space-y-4 px-3 py-4 max-w-[404px]">
      <h1 className="text-blackish font-[600] text-[24px] ">Barbers details</h1>
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
      <div>
        <h1 className="text-[20px] font-[500]">Service description</h1>
        <p className="font-[300] text[15px]">
          Lorem ipsum dolor sit amet consectetur. Scelerisque dictum nullam
          vitae lectus nibh vehicula. Nunc augue eu sapien auctor eget vitae
          erat posuere. Sagittis leo leo vestibulum vel turpis duis eu sit.
        </p>
      </div>
      <div>
        <h1 className="text-[18px] font-[600]">Specialities</h1>
        <div className="flex justify-between">
          <p className="bg-transparent rounded-sm text-[14px] font-[600] px-2 py-1 border-rosebrown border-1">
            Cutting
          </p>
          <p className="bg-transparent rounded-sm text-[14px] font-[600] px-2 py-1 border-rosebrown border-1">
            Colouring
          </p>
          <p className="bg-transparent rounded-sm text-[14px] font-[600] px-2 py-1 border-rosebrown border-1">
            Styling
          </p>
          <p className="bg-transparent rounded-sm text-[14px] font-[600] px-2 py-1 border-rosebrown border-1">
            Beard care
          </p>
        </div>
        <p className="text-end text-[14px] font-[400]">see more...</p>
      </div>
      <div>
        <h1 className="text-[18px] font-[600]">Select date</h1>
        <div className="flex justify-between">
          <Box name="Mo" number="10" />
          <Box name="Tu" number="11" />
          <Box name="We" number="12" />
          <Box name="Th" number="13" />
          <Box name="Fr" number="14" />
          <Box name="Sa" number="15" />
          <Box name="Su" number="16" />
        </div>
      </div>
      <div>
        <h1 className="text-[18px] font-[600]">Select time</h1>
        <div className="flex justify-between">
          <Box number="10am" />
          <Box number="11am" />
          <Box number="12pm" />
          <Box number="1pm" />
          <Box number="2pm" />
          <Box number="3pm" />
          <Box number="4pm" />
        </div>
      </div>
      <h1 className="text-[14px] font-[500]">Add note (Optional)</h1>
      <textarea rows={10} className=" text-grey4 p-4 italic" placeholder="Message"/>
    </div>
  );
}

function Box({ name, number }) {
  return (
    <div className="block">
      <span className="text-[12px] font-[600]">{name}</span>
      <p className="bg-transparent rounded-sm text-[14px] font-[600] px-2 py-1 border-rosebrown border-1">
        {number}
      </p>
    </div>
  );
}
