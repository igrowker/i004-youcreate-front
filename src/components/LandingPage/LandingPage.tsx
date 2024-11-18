import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Features from "./Features";
import WhyUs from "./WhyUs";

const LandingPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Features />
      <WhyUs />
    </div>
  );
};

export default LandingPage;
