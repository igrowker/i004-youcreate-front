import React, {useEffect, useState} from "react";
import logo from "../../assets/icons/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faGear, faUser } from "@fortawesome/free-solid-svg-icons";

import { PaymentsSection } from "../PagosComponent/PaymentsSection";
import { SocialSection } from "../SocialComponent/SocialSection";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {useParams} from "react-router-dom";

import DashboardSection from "../DashboardComponents/DashboardSection";
import { PaymentsSection } from "../PagosComponent/PaymentsSection";

import { IncomeSection } from "../IncomesComponent/IncomeSection";
import { SocialSection } from "../SocialComponent/SocialSection";
import { useUser } from "../../context/UserContext"; 
import { useNavigate } from "react-router-dom";
import { ProfileSection } from "../ProfileComponent/ProfileSection";


export const Dashboard: React.FC = () => {

    const { section } = useParams();
    const [activeSection, setActiveSection] = useState<string>("Dashboard");
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    useEffect(() => {
        if (section) {
            if (section === "mis-pagos") {
                setActiveSection("Mis pagos");
            } else {
                setActiveSection("Dashboard");
            }
        }
    }, [section]);

    return (
        <div className="h-screen w-screen bg-cover bg-center bg-[url('/images/fondoDash.png')]">
            <header>
                <nav className="flex flex-wrap justify-between items-center w-full p-4 mb-6">
                    <div className="flex items-center mb-3 sm:mb-0">
                        <img src={logo} alt="Logo" className="h-12 sm:h-16 mx-5" />
                    </div>

                    <div className="relative w-full sm:w-auto sm:ml-44 mb-3 sm:mb-0">
                        <input
                            className="rounded-md h-9 text-xl pl-10 w-full sm:w-[500px]"
                            type="search"
                            placeholder="Buscar"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-800">
                            <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 pt-5 sm:pt-0">
                        <button
                        type="button"
                        className="bg-gray-200 hover:bg-gray-400 text-black text-2xl font-bold w-10 h-10 rounded-full"
                       
                        >

                            <FontAwesomeIcon icon={faGear  as IconProp} />

                    <FontAwesomeIcon icon={faGear} />

                        </button>

                        <button
                            type="button"
                            className="bg-gray-200 hover:bg-gray-400 text-black text-3xl font-bold w-12 h-10 sm:w-14 sm:h-14 rounded-full"
                            onClick={() => setActiveSection("Profile")}
                        >
                            <FontAwesomeIcon icon={faUser  as IconProp} />
                        </button>
                    </div>
                </nav>
            </header>


            <main className="flex flex-col sm:flex-row justify-center pb-36">
                <div className="flex bg-gray-200 h-full w-full sm:w-[95%] justify-center py-6 sm:py-12 rounded-r-3xl">
                    <div className="flex bg-gray-50 h-full w-full sm:w-[95%] rounded-r-lg rounded-r-3xl">
                        <div className="flex flex-col">
                            <nav className="flex-1 h-full bg-gray-300">
                                <ul className="flex sm:flex-col overflow-x-auto sm:overflow-visible">
                                    {["Dashboard", "Mis pagos", "Colaboradores", "Mis ingresos", "Mis redes"].map((section) => (
                                        <li
                                            key={section}
                                            className={`flex items-center px-6 py-4 sm:py-8 text-black text-base sm:text-xl font-semibold cursor-pointer ${
                                                activeSection === section
                                                    ? "bg-white border-r-8 border-pink-500"
                                                    : "hover:bg-white hover:border-r-8 hover:border-pink-500"
                                            }`}
                                            onClick={() => setActiveSection(section)}
                                        >
                                            <span className="material-icons">{getIcon(section)}</span>
                                            <span className="ml-4">{section}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="px-6 pt-6 mt-6 border-t border-gray-300">
                                    <button className="flex items-center w-full px-4 py-6 sm:py-9 text-red-600 hover:bg-white text-lg sm:text-2xl font-semibold">
                                        <span className="material-icons">logout</span>
                                        <span className="ml-4">Cerrar sesión</span>

            <main className="flex flex-col sm:flex-row h-5/6 justify-center">
                <div className="flex bg-white bg-opacity-30 w-full h-full sm:w-[95%] justify-center py-6 sm:py-12 rounded-r-3xl">
                    <div className="flex  h-full w-full sm:w-[95%] rounded-r-lg rounded-r-3xl">
                        <div className="flex flex-col h-full">
                            {/* Menú lateral */}
                            <nav className="flex flex-col bg-white bg-opacity-35 h-full justify-between">
                                <div>
                                    <ul className="flex sm:flex-col overflow-x-auto  sm:overflow-visible">
                                        {["Dashboard", "Mis pagos", "Mis ingresos", "Mis redes"].map((section) => (
                                            <li
                                                key={section}
                                                className={`flex items-center px-6 py-4 sm:py-8 text-black text-base sm:text-xl font-semibold cursor-pointer ${
                                                    activeSection === section
                                                        ? "bg-white border-r-8 border-pink-500"
                                                        : "hover:bg-white hover:border-r-8 hover:border-pink-500"
                                                }`}
                                                onClick={() => setActiveSection(section)}
                                            >
                                                <span className="material-icons">{getIcon(section)}</span>
                                                <span className="ml-4">{section}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="px-6 pt-6 border-t border-gray-300">
                                    <button 
                                    className="flex items-center w-full px-4 py-6 sm:py-9 text-red-600 hover:bg-white text-lg sm:text-2xl font-semibold"
                                    onClick={handleLogout}
                                    >

                                        <span className="material-icons text-slate-500">logout</span>
                                        <span className="ml-4 text-black">Cerrar sesión</span>

                                    </button>
                                </div>
                            </nav>
                        </div>


                        <div className="flex-1 p-4 sm:p-8">
                            {activeSection === "Mis pagos" && <PaymentsSection  />}

                        {/* Contenido Principal */}
                        <div className="flex-1 bg-white p-4 sm:p-8">
                            {/* Renderizado condicional de secciones */}
                            {activeSection === "Dashboard" && <DashboardSection />}
                            {activeSection === "Mis pagos" && <PaymentsSection />}
                            {activeSection === "Mis ingresos" && <IncomeSection />}

                            {activeSection === "Mis redes" && <SocialSection />}
                            {activeSection === "Profile" && <ProfileSection />}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};




// Función auxiliar para obtener íconos

const getIcon = (section: string) => {
    switch (section) {
        case "Dashboard":
            return "dashboard";
        case "Mis pagos":
            return "payments";
       
        case "Mis ingresos":
            return "bar_chart";
        case "Mis redes":
            return "share";
        default:
            return "";
    }
};