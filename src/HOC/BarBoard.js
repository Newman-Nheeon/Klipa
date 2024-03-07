import React from "react";
import BarbDetails from "./BarbDetails";
import BarbLoc from "./BarbLoc";

export default function BarBoard() {
  return (
    <div className="bg-rosebrown flex justify-between w-full p-4 space-x-3">
      <BarbLoc />
      <BarbDetails />
    </div>
  );
}
