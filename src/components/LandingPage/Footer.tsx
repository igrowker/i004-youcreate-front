import React from "react";
import logo from "../../assets/icons/logo-footer.svg";


const Footer: React.FC = () => {
  return (
    <div className=" w-full h-[100px] bg-gradient-to-r from-[#615AA7] via-[#8F5A7F] to-[#BE5869] flex flex-col justify-center">
      {/* Logo */}
      <img src={logo} alt="Logo" className="mt-4 ml-16 h-8 w-8 md:h-12 md:w-12" />
      {/* Vector */}
    </div>
  );
};

export default Footer;
