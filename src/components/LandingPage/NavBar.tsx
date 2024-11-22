import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex fixed top-0 w-full z-10 md:justify-between justify-between items-center bg-[#2B2829] px-9 md:px-16 py-5">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-16 w-16 md:h-24 md:w-24" />
      </div>

      {/* Botón para movil */}
      <button
        className="block md:hidden text-gray-200 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Botones login y register (no cambiar el justify-between del componente padre) */}
      <div
        className={`${
          menuOpen
            ? "block absolute top-full left-0 border-t-[1px] transition-all w-full bg-[#2B2829]"
            : "hidden"
        } md:block flex`}
      >
        <div className="flex w-full flex-col md:flex-row gap-y-4 py-4 items-center md:space-x-11">
          <Link to="/login">
            <button className="w-32 h-14 text-center text-xl py-2 bg-gray-200 text-[#0A0A0B] rounded-lg hover:bg-gray-300">
              Acceder
            </button>
          </Link>
          <Link to="/register">
            <button className="w-32 h-14 text-center text-xl py-2 bg-purple-600 text-[#FAFAFA] rounded-lg hover:bg-purple-700">
              Registrarse
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
