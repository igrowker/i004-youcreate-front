
import React from "react";

export const ProfileSection: React.FC = () => {
    return (
        <div >
            <h1 className="text-2xl font-bold mb-4">Perfil</h1>

            <div className="bg-white shadow-lg rounded-lg p-6">
                <form className="w-full max-w-3xl">

                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Nombre
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder="??????????????"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Apellido
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder="???????????????"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Correo electrónico
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="email"
                                placeholder="caro.perez@gmail.com"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Dirección
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder="******************"
                            />
                        </div>
                    </div>


                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Teléfono
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder="???????????"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                País
                            </label>
                            <select
                                className="block appearance-none w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            >
                                <option>Mexico</option>
                                <option>Estados Unidos</option>
                                <option>España</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-8">
                        <div className="w-full px-3">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Contraseña
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="password"
                                placeholder="******************"
                            />
                        </div>
                    </div>


                    <div className="flex justify-end">
                        <button className="bg-slate-600 text-white py-3 px-6 rounded-lg hover:bg-slate-700 transition duration-200">
                            EDITAR PERFIL
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

