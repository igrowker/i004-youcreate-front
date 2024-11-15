import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Features from "./Features";

const LandingPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Features />
    </div>
  );
};

export default LandingPage;
