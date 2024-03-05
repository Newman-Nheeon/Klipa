import React from "react";
import Nav from "../components/Nav";
import HeroSec from "../HOC/HeroSec";
import Service from "../HOC/Service";
import Bookmark from "../HOC/Bookmark";
import GeoBarber from "../HOC/GeoBarber";
import Estimate from "../HOC/Estimate";
import More from "../HOC/More";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <HeroSec />
      <Service/>
      <Bookmark/>
      <GeoBarber/>
      <Estimate/>
      <More/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}
