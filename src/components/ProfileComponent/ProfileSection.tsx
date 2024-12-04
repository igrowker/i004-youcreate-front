import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
// import { DashboardSection } from "./DashboardSection";
import { PaymentsSection } from "../PagosComponent/PaymentsSection";
import { CollaboratorsSection } from "../CollaboratorsComponent/CollaboratorsSection";
// import { IncomeSection } from "../IncomesComponent/IncomeSection";
import { SocialSection } from "../SocialComponent/SocialSection";

export const Profile: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("Dashboard");

    return (
        <div className="bg-gray-400 h-100 w-screen">
            <header>
                <nav className="flex flex-wrap justify-between items-center w-full p-4 mb-6">
                    <div className="flex items-center mb-3 sm:mb-0">
                        <img src={logo} alt="Logo" className="h-12 sm:h-16 mx-5" />
                    </div>
                    <div className="relative w-full sm:w-auto sm: mb-3 sm:mb-0">

                        <input className="rounded-md h-12 text-xl pl-10 w-[900px]" type="search" placeholder="Buscar" />


                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-800">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 pt-5 sm:pt-0">
                        <button
                            type="button"
                            className="bg-gray-200 hover:bg-gray-400 text-black text-2xl font-bold w-10 h-10 rounded-full"
                        >
                            <FontAwesomeIcon icon={faGear} />
                        </button>
                        <button
                            type="button"
                            className="bg-gray-200 hover:bg-gray-400 text-black text-3xl font-bold w-12 h-10 sm:w-14 sm:h-14 rounded-full"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    </div>
                </nav>
            </header>

            <main className="flex flex-col sm:flex-row justify-center pb-36">
                <div className="flex bg-gray-200 h-full w-full sm:w-[95%] justify-center py-6 sm:py-12 rounded-r-3xl">
                    <div className="flex bg-gray-50 h-full w-full sm:w-[95%] rounded-r-lg rounded-r-3xl">
                        <div className="flex flex-col">
                            {/* Menú lateral */}
                            <nav className="flex-1 h-full bg-gray-300">
                                <ul className="flex sm:flex-col overflow-x-auto sm:overflow-visible">
                                    {["Dashboard", "Mis pagos", "Colaboradores", "Mis ingresos", "Mis redes"].map((section) => (
                                        <li
                                            key={section}
                                            className={`flex items-center px-6 py-4 sm:py-8 text-black text-base sm:text-xl font-semibold cursor-pointer ${activeSection === section
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
                                    </button>
                                </div>
                            </nav>
                        </div>

                        {/* Contenido principal */}

                        <div className="w-full">
                            <div className="m-6">
                                <h1 className="text-2xl font-bold text-gray-700">Mi perfil</h1>
                            </div>

                            {/* Logo, nombre y correo */}
                            <div className="flex flex-row ml-9 mb-9">
                                <button
                                    type="button"
                                    className="bg-gray-200 hover:bg-gray-400 text-black text-3xl font-bold w-12 h-10 sm:w-14 sm:h-14 rounded-full mr-4">
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                                <div className="flex flex-col">
                                    <h2 className="text-xl text-gray-700 font-bold">Carolina Perez</h2>
                                    <h3>caro.perez@gmail.com</h3>
                                </div>
                            </div>


                            {/* Formulario con datos */}


                            <div className="px-6 flex justify-center">
                                <form className="w-full max-w-3xl">
                                    <div className="flex flex-wrap -mx-3">
                                        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                            <label className="block text-gray-700 text-md font-semibold mb-1">
                                                Nombre
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-50 text-gray-700 border-2 border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="??????????????"></input>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block text-gray-700 text-md font-semibold mb-1">
                                                Apellido
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="???????????????"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-2">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-700 text-md font-semibold mb-1">
                                                Correo electronico
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="caro.perez@gmail.com"></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-2">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-700 text-md font-semibold mb-1">
                                                Dirección
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-2">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block text-gray-700 text-md font-semibold mb-1">
                                                Teléfono
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="???????????"></input>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block text-gray-700 text-md font-semibold mb-1">
                                                País
                                            </label>
                                            <div className="relative">
                                                <select className="block appearance-none w-full bg-gray-50 border-2 border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                    <option>Mexico</option>
                                                    <option>Estados Unidos</option>
                                                    <option>España</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-8">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-700 text-md font-semibold mb-1">
                                                Contraseña
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-50 border-2 text-gray-700  border-gray-300 rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"></input>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mb-12">

                                    <button className="bg-slate-600 text-gray-50 p-4 rounded-lg">EDITAR PERFIL</button>
                                    </div>
                                </form>
                            </div>
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
        case "Colaboradores":
            return "groups";
        case "Mis ingresos":
            return "bar_chart";
        case "Mis redes":
            return "share";
        default:
            return "";
    }
};
