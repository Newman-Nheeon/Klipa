import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SerHero from "../HOC/SerHero";
import Listing from "../HOC/Listing";

export default function ServiceList() {
  return (
    <div>
      <Nav />
      <SerHero />
      <Listing/>
      <Footer />
    </div>
  );
}
