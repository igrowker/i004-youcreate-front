import React, { ReactNode, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import configIcon from "../../assets/icons/configIcon.svg";
import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
import houseIcon from "../../assets/icons/houseIcon.svg";
import walletIcon from "../../assets/icons/walletIcon.svg";

// Definir las propiedades para el componente de navegación
interface UserDashboardProps {
  section1: ReactNode;
  section2: ReactNode;
  section3: ReactNode;
  section4: ReactNode;
}

// Componente de Dashboard con navegación
const UserDashboard: React.FC<UserDashboardProps> = ({
  section1,
  section2,
  section3,
  section4,
}) => {
  const [activeSection, setActiveSection] = useState<string>("section1");

  const navigation = [
    { title: "inicio", section: "section1", icon: houseIcon },
    { title: "Mis ingresos", section: "section2", icon: dashboardIcon },
    { title: "Pagos", section: "section3", icon: walletIcon },
    { title: "Ajustes", section: "section4", icon: configIcon },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className="w-full h-[100vh] max-h-[1000px] bg-[#EEEEEE] flex ">
      <nav className="pt-10 h-[100vh] w-[230px] bg-[#D9D9D9] rounded-tr-[50px] rounded-br-[50px] flex flex-col items-center">
        <img
          className="w-[95px] mb-[80px] h-[80px]"
          src={logo}
          alt="logo youcreate "
        />
        <ul className="w-full flex flex-col gap-5">
          {navigation.map((section) => (
            <li
              onClick={() => handleNavClick(section.section)}
              key={section.title}
              style={{
                background: activeSection === section.section ? "#ffffff" : "",
              }}
              className="w-full h-[60px] cursor-pointer flex items-center gap-3 font-bold pl-4 rounded-bl-[30px] rounded-tl-[30px]"
            >
              <img src={section.icon} alt="section icon" /> {section.title}
            </li>
          ))}
        </ul>
      </nav>

      <div className="section-content">

        {activeSection === "section1" && <>{section1}</>}
        {activeSection === "section2" && <>{section2}</>}
        {activeSection === "section3" && <>{section3}</>}
        {activeSection === "section4" && <>{section4}</>}
     
      </div>
    </section>
  );
};

export default UserDashboard;
