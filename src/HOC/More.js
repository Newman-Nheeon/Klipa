import React, { useState } from "react";
import { more } from "../data";

export default function More() {
  const [open, setisOpen] = useState(null);
  const click = (index) => {
    setisOpen(open === index ? null : index);
  };
  return (
    <div className="mx-[80px]
     bg-brownish py-6">
      <h1 className="font-[700] text-[35px] text-blackish mb-[15px] text-center">
        Want to know more?
      </h1>
      {more.map((item, index) => (
        <div className="grid grid-cols-2 space-x-20" key={index}>
          <div className="flex flex-col">
            <p
              className="text-blackish text-[18px] font-[400] p-4 hover:bg-rosebrown"
              onClick={()=>click(index)}
            >
              {item.title}
            </p>
          </div>
          {open === index &&
          (
            <p className="text-blackish text-[18px] font-[400]">
              Lorem ipsum dolor sit amet consectetur. Tortor consectetur egestas
              tristique eget. Amet maecenas imperdiet arcu lorem nunc donec.
              Nibh egestas eu vitae non feugiat senectus. Tempor urna metus
              pellentesque placerat tempus nunc parturient sociis fusce. Auctor
              volutpat tortor tortor risus praesent condimentum nec. Mattis
              tellus turpis aliquam feugiat lobortis risus fringilla ac. Proin
              mattis fringilla at ut non morbi gravida sed. Non maecenas sit
              massa venenatis. Lorem ipsum dolor sit amet consectetur. Tortor
              consectetur egestas tristique eget. Amet maecenas imperdiet arcu
              lorem nunc donec. Nibh egestas eu vitae non feugiat senectus.
              Tempor urna metus pellentesque placerat tempus nunc parturient
              sociis fusce. Auctor volutpat tortor tortor risus praesent
              condimentum nec. Mattis tellus turpis aliquam feugiat lobortis
              risus fringilla ac.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
