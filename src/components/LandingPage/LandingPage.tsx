import React from "react";
import NavBar from "./NavBar";
import Contenido from "./Contenido";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      
        <Contenido />
      
      <Footer />
    </div>
  );
};

export default LandingPage;
