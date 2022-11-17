import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HowItWorks from "../components/HowItWorks";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import ParallaxSection from "../components/ParallaxSection";
import Features from "../components/Features";
import CloudLogos from "../components/CloudLogos";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      {/* <ParallaxSection /> */}
      <CloudLogos />
      <Hero2 />
    </div>
  );
};

export default Home;
