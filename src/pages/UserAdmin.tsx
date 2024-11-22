import React from "react";
import UserDashboard from "../components/secciones/UserDashboard";
import Section1 from "../components/secciones/Section1";
import Section2 from "../components/secciones/Section2";
import Section3 from "../components/secciones/Section3";
import Section4 from "../components/secciones/Section4";

const UserAdmin: React.FC = () => {
  return (
    <UserDashboard
      section1={<Section1 />}
      section2={<Section2 />}
      section3={<Section3 />}
      section4={<Section4 />}
    />
  );
};

export default UserAdmin;
