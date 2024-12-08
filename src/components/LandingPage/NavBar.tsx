import React, { useState } from "react";
import logo from "../../assets/icons/logo-nuevo2.png";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[645px] bg-gradient-to-r from-[#615AA7] via-[#8F5A7F] to-[#BE5869]">
    <nav className="flex w-full z-10 md:justify-between justify-between items-center px-9 md:px-16 py-5">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-[329px] h-[88px] mt-10 mb-10" />
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
          <Link to="/register">
            <button className="w-[210px] h-[48px] bg-[#56588C] text-center text-xl py-2   text-[#FAFAFA] rounded-lg   hover:bg-[#56586C] hover:shadow-sm transition-all duration-300">
              Registrarse
            </button>
          </Link>
          <Link to="/login">
            <button className="w-[210px] h-[48px] text-center text-xl py-2 bg-[#1A1A1A] text-[#FAFAFA] rounded-lg hover:bg-[#56586C] hover:shadow-[#393939] hover:shadow-sm transition-all duration-300">
              Iniciar sesión
            </button>
            </Link>
        </div>
      </div>
      </nav>
      <div className="flex flex-col w-full px-[130px] py-[83px] justify-center items-center bg-gradient-to-r from-white/40  to-white/30">
        <h1 className="text-center text-4xl font-bold text-[#1A1A1A]">YouCreate simplifica la gestión de tus ingresos, pagos y obligaciones fiscales, para que puedas enfocarte en lo que mejor haces: CREAR </h1>
        <p className="mt-10 text-2xl text-white/80">Tu éxito creativo, respaldado por nuestra gestión financiera</p>
      </div>
      </div>
  );
};

export default NavBar;
