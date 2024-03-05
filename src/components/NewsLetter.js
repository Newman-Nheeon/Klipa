import React from "react";
import Button from "./Button";
import EstInput from "../EstInput";

export default function NewsLetter() {
  return (
    <div className="bg-brownish md:flex flex-row justify-between px-[50px] mt-14 py-4">
      <div>
        <h1 className="md:font-[600] md:text-[32px] text-blackish">
          Subscribe to our newsletter
        </h1>
        <p className="text-blackish text-[17px] font-[200] italic">
          Be the first to get our freebies
        </p>
      </div>
      <div className="w-100 border-1 border-solid border-blackish max-h-[80px] max-w-[487px] rounded-sm md:py-2 md:px-4 p-1 bg-whitish flex justify-between">
        <EstInput placeholder="Email address" type="text" />
          <Button children="Subscribe" />
      </div>
    </div>
  );
}
