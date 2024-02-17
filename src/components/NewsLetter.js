import React from "react";
import Button from "./Button";
import EstInput from "../EstInput";

export default function NewsLetter() {
  return (
    <div className="bg-brownish flex justify-between px-[100px] mt-14 py-4">
      <div>
        <h1 className="font-[600] text-[32px] text-blackish">
          Subscribe to our newsletter
        </h1>
        <p className="text-blackish text-[17px] font-[200] italic">
          Be the first to get our freebies
        </p>
      </div>
      <div className="w-100 border-1 border-solid border-blackish h-[80px] w-[487px] rounded-sm py-2 px-4 bg-whitish flex justify-between">
        <EstInput placeholder="Email address" type="text" />
          <Button children="Subscribe" />
      </div>
    </div>
  );
}
