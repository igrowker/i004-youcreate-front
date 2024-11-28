import React from "react";
import logo from "../../assets/icons/logo.svg";

export const Dashboard: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex w-full h-full bg-white  rounded-lg">
                <aside className="w-64 bg-gray-200 flex flex-col h-full">
                    <div className="flex items-center justify-center h-17 bg-gray-300">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-12"
                        />
                    </div>
                    <nav className="flex-1 mt-4">
                        <ul className="space-y-2">
                            <li className="flex items-center px-6 py-2 bg-gray-300 text-black rounded-l-full font-medium">
                                <span className="material-icons">dashboard</span>
                                <span className="ml-4">Dashboard</span>
                            </li>
                            <li className="flex items-center px-6 py-2 hover:bg-gray-300 text-gray-600 rounded-l-full font-medium">
                                <span className="material-icons">payments</span>
                                <span className="ml-4">Mis pagos</span>
                            </li>
                            <li className="flex items-center px-6 py-2 hover:bg-gray-300 text-gray-600 rounded-l-full font-medium">
                                <span className="material-icons">groups</span>
                                <span className="ml-4">Colaboradores</span>
                            </li>
                            <li className="flex items-center px-6 py-2 hover:bg-gray-300 text-gray-600 rounded-l-full font-medium">
                                <span className="material-icons">bar_chart</span>
                                <span className="ml-4">Mis ingresos</span>
                            </li>
                            <li className="flex items-center px-6 py-2 hover:bg-gray-300 text-gray-600 rounded-l-full font-medium">
                                <span className="material-icons">share</span>
                                <span className="ml-4">Mis redes</span>
                            </li>
                        </ul>
                    </nav>
                    <div className="px-6 py-4 border-t border-gray-300">
                        <button className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-300 rounded-l-full font-medium">
                            <span className="material-icons">logout</span>
                            <span className="ml-4">Cerrar sesión</span>
                        </button>
                    </div>
                </aside>

                <main className="flex-1 flex flex-col">
                    <header className="flex items-center justify-between h-16 px-6 bg-white   rounded-t-lg">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar"
                                className="px-4 py-2 text-sm bg-gray-100 border rounded-full w-80"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 bg-gray-100 rounded-full">
                                <span className="material-icons">settings</span>
                            </button>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThb5AgCfaHxn6DHzRwwEL-j8WfcJcbqsy-0A&s"
                                alt="User avatar"
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                    </header>

                    <section className="flex-1 p-6">
                        <div className="h-full bg-white rounded-b-lg shadow-md">

                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};