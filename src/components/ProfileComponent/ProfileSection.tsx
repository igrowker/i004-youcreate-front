import React, { useEffect, useState } from "react";
import { updateUserProfile } from "../../services/Profile/ProfileSevice";  // Asegúrate de tener este servicio correctamente configurado

interface UserProfile {
    id: number;
    country: string;
    userName: string;
    lastName: string;
    email: string;
    phone: string;
}

export const ProfileSection: React.FC = () => {
    // Estado para manejar los datos del perfil
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    // Llamada a la API cuando el componente se monta
    useEffect(() => {
        // Asume que tienes un servicio para obtener la información del usuario.
        const fetchUserProfile = async () => {
            try {
                const response = await fetch("URL_DEL_ENDPOINT_AQUI"); // Reemplaza con tu URL de API real
                const data = await response.json();

                // Verificamos si la respuesta es exitosa antes de actualizar el estado
                if (data.statusCode === 0) {
                    setUserProfile(data.data); // Actualizamos el estado con la información del usuario
                } else {
                    console.error("Error al obtener los datos del perfil");
                }
            } catch (error) {
                console.error("Error de red:", error);
            }
        };

        fetchUserProfile();
    }, []);

    // Si los datos no están cargados, mostramos un mensaje de carga
    if (!userProfile) {
        return <div>Cargando perfil...</div>;
    }

    return (
        <div>
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
                                value={userProfile.userName} // Valor dinámico desde el estado
                                readOnly
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Apellido
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                value={userProfile.lastName} // Valor dinámico desde el estado
                                readOnly
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
                                value={userProfile.email} // Valor dinámico desde el estado
                                readOnly
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
                                value={userProfile.country} // Valor dinámico desde el estado
                                readOnly
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
                                value={userProfile.phone} // Valor dinámico desde el estado
                                readOnly
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                País
                            </label>
                            <select
                                className="block appearance-none w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                value={userProfile.country} // Valor dinámico desde el estado
                                readOnly
                            >
                                <option>{userProfile.country}</option>
                            </select>
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