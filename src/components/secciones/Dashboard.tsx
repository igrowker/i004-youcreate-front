import React from "react";
import logo from "../../assets/icons/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faGear, faUser, faSliders } from "@fortawesome/free-solid-svg-icons";



export const Dashboard: React.FC = () => {
    return (

        <div className=" bg-gradient-to-r from-pink-400 to-purple-600 h-100 w-screen">
            <header>
                <nav className="flex justify-between items-end w-full p-4 mb-6">

                    <div className="flex">
                        <img src={logo} alt="Logo" className="h-24 mx-5" />
                    </div>

                    <div className="pl-7 absolute ml-44 transform">
                        <div className="relative">
                            <input className="rounded-md h-12 text-xl pl-10 w-[900px]" type="search" placeholder="Buscar" />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-800">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 pt-5 mr-7">
                        <button type="button" className="bg-gray-200 hover:bg-gray-400 text-black text-2xl font-bold w-10 h-10 rounded-full">
                            <FontAwesomeIcon icon={faGear} />
                        </button>
                        <button type="button" className="bg-gray-200 hover:bg-gray-400 text-black text-5xl font-bold w-24 h-24 rounded-full">
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    </div>
                </nav >
            </header >

            <main className="flex justify-center pb-36">
                < div className="flex bg-gray-200 h-full w-[95%] justify-center py-12 rounded-r-3xl">
                    < div className="flex bg-gray-50 h-full w-[95%] rounded-r-3xl">
                        <div className="flex flex-col">
                            <nav className="flex-1  h-full  bg-gray-300">
                                <ul className="flex flex-col">
                                    <button>
                                        <li className="flex items-center px-6 py-8 hover:bg-white text-black  text-xl font-semibold hover:border-r-8 border-pink-500">
                                            <span className="material-icons">dashboard</span>
                                            <span className="ml-4">Dashboard</span>
                                        </li>
                                    </button>

                                    <button>
                                        <li className="flex items-center px-6 py-8 hover:bg-white text-black  text-xl font-semibold hover:border-r-8 border-pink-500">
                                            <span className="material-icons">payments</span>
                                            <span className="ml-4">Mis pagos</span>
                                        </li>
                                    </button>

                                    <button>
                                        <li className="flex items-center px-6 py-8 hover:bg-white text-black  text-xl font-semibold hover:border-r-8 border-pink-500">
                                            <span className="material-icons">groups</span>
                                            <span className="ml-4">Colaboradores</span>
                                        </li>
                                    </button>

                                    <button>
                                        <li className="flex items-center px-6 py-8 hover:bg-white text-black  text-xl font-semibold hover:border-r-8 border-pink-500">
                                            <span className="material-icons">bar_chart</span>
                                            <span className="ml-4">Mis ingresos</span>
                                        </li>
                                    </button>

                                    <button>
                                        <li className="flex items-center px-6 py-8 hover:bg-white text-black  text-xl font-semibold hover:border-r-8 border-pink-500">
                                            <span className="material-icons">share</span>
                                            <span className="ml-4">Mis redes</span>
                                        </li>
                                    </button>
                                </ul>

                                <div className="px-6 pt-6 mt-12 border-t border-gray-300">
                                    <button className="flex items-center w-full px-4 py-9 text-red-600 hover:bg-white  text-2xl font-semibold">
                                        <span className="material-icons">logout</span>
                                        <span className="ml-4">Cerrar sesión</span>
                                    </button>
                                </div>
                            </nav>
                        </div>



                        <div className="flex bg-slate-200 w-full justify-around text-gray-700"> {/* Todo el box */}

                            {/* Elemento 1 */}


                            <div className="w-[45%] my-12">
                                <div className="flex justify-between ">
                                    <h1 className="text-3xl font-bold ">Ingresos totales</h1>
                                    <FontAwesomeIcon className="text-3xl" icon={faSliders} />
                                </div>


                                <div className="flex row rounded-xl space-x-3 border-0 my-8">
                                    <div className="w-[45%] card rounded-xl shadow-lg text-2xl text-center font-bold flex flex-col bg-slate-100">
                                        <h1 className="flex items-center justify-center pb-54 pt-6">*Mes del Año*</h1>
                                    </div>

                                    <div className="w-[55%] space-y-4 flex-col">
                                        <div className="flex items-center justify-center rounded-xl shadow-lg text-2xl text-center font-bold h-14 bg-slate-100">
                                            <h1 className="px-10">YouTube</h1>
                                        </div>
                                        <div className="flex items-center justify-center card rounded-xl shadow-lg text-2xl text-center font-bold flex-col h-14 bg-slate-100">
                                            <h1 className="px-10">Twitch</h1>
                                        </div>
                                        <div className="flex items-center justify-center card rounded-xl shadow-lg text-2xl text-center font-bold flex-col h-14 bg-slate-100">
                                            <h1 className="px-10">Colaboraciones</h1>
                                        </div>
                                        <div className="flex items-center justify-center card rounded-xl shadow-lg text-2xl text-center font-bold flex-col h-14 bg-slate-100">
                                            <h1 className="px-10">Campañas</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Elemento 2 */}

                            <div className="w-[45%] my-12 h-full">
                                <div className="flex justify-between ">
                                    <h1 className="text-3xl font-bold ">Evolución de Ingresos</h1>
                                    <FontAwesomeIcon className="text-3xl" icon={faSliders} />
                                </div>


                                <div className="flex row rounded-xl space-x-3 border-0 my-8">
                                    <div className="w-full h-[100%] card rounded-xl shadow-lg text-2xl text-center font-bold flex flex-col bg-slate-100">
                                        <h1 className="flex items-center justify-center pb-54 pt-6">$$$$$$$$$$$$</h1>
                                    </div>

                                    

                                </div>
                            </div>






                        </div>
                    </div>
                </div>


            </main >
        </div >
    );
};


