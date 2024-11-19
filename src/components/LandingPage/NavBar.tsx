import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="flex fixed top-0 w-full z-10 justify-between items-center bg-[#2B2829] px-16 py-5">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-24 w-24" />
      </div>

      {/* Botones de Acceder y Registrarse */}
      <div className="flex gap-x-11">
        <Link to="/login">
          <button className="w-32 h-14 text-center text-xl py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
            Acceder
          </button>
        </Link>
        <Link to="/register">
          <button className="w-32 h-14 text-center text-xl py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Registrarse
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
