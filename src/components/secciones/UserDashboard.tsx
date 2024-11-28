import React, { ReactNode, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import configIcon from "../../assets/icons/configIcon.svg";

import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
import walletIcon from "../../assets/icons/walletIcon.svg";




const UserDashboard: React.FC<UserDashboardProps> = ({
  section1,
  section2,
  section3,
  section4,
  section5,
}) => {
  const [activeSection, setActiveSection] = useState<string>("section1");

  const navigation = [
    { title: "Dashboard", section: "section1", icon: dashboardIcon },
    { title: "Mis pagos", section: "section2", icon: walletIcon },
    { title: "Colaboradores", section: "section3", icon: walletIcon },
    { title: "Mis ingresos", section: "section4", icon: walletIcon },
    { title: "Mis redes", section: "section5", icon: walletIcon },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className="w-full h-screen flex bg-gray-100">
      {/* Barra de navegación lateral */}
      <nav className="h-full w-[230px] bg-[#D9D9D9] flex flex-col items-center pt-10 rounded-tr-[50px] rounded-br-[50px]">
        <img className="w-[95px] h-[80px] mb-[40px]" src={logo} alt="YouCreate Logo" />
        <ul className="w-full flex flex-col gap-5">
          {navigation.map((navItem) => (
            <li
              key={navItem.title}
              onClick={() => handleNavClick(navItem.section)}
              className={`w-full h-[60px] flex items-center gap-3 pl-4 rounded-bl-[30px] rounded-tl-[30px] cursor-pointer font-bold ${
                activeSection === navItem.section
                  ? "bg-white text-pink-500 border-l-4 border-pink-500"
                  : "text-gray-700"
              }`}
            >
              <img src={navItem.icon} alt={`${navItem.title} icon`} />
              {navItem.title}
            </li>
          ))}
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Barra superior */}
        <div className="w-full h-[70px] bg-gray-300 flex items-center px-8">
          <div className="flex items-center bg-white px-4 py-2 rounded-full w-[400px] shadow-sm">
            <img src={walletIcon} alt="Search Icon" className="w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Buscar"
              className="flex-1 outline-none bg-transparent"
            />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button className="w-[35px] h-[35px]">
              <img src={configIcon} alt="Settings" />
            </button>
            <div className="w-[45px] h-[45px] rounded-full bg-[#ffc0cb] flex items-center justify-center">
              <img
                src="https://example.com/profile-avatar.png"
                alt="User Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Contenido dinámico */}
        <div className="flex-grow p-10 bg-white shadow-inner rounded-tl-[50px] mt-5 mx-5">
          {activeSection === "section1" && <>{section1}</>}
          {activeSection === "section2" && <>{section2}</>}
          {activeSection === "section3" && <>{section3}</>}
          {activeSection === "section4" && <>{section4}</>}
          {activeSection === "section5" && <>{section5}</>}
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
