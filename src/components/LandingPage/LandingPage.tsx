import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Features from "./Features";
import WhyUs from "./WhyUs";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Features />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
