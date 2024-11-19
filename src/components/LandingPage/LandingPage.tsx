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
      <div className="px-10 md:px-16 lg:px-48">
        <Features />
        <WhyUs />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
