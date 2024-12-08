/* import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../services/Profile/ProfileSevice"; // Asegúrate de que la ruta es correcta
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext"; // Si estás usando un contexto para el usuario

export const ProfileSection: React.FC = () => {
    const { user } = useUser(); // Si estás usando un contexto para obtener los datos del usuario
    const userId = user?.id; // Asegúrate de que 'user' y 'id' existen
    const [profile, setProfile] = useState<any>(null); // Estado para almacenar la información del perfil
    const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga

    // Función para obtener los datos del perfil desde la API
    const fetchProfile = async () => {
        if (userId) {
            try {
                const profileData = await getUserProfile(userId); // Llamada al servicio con el 'id'
                setProfile(profileData);
                setLoading(false); // Actualizamos el estado cuando los datos están disponibles
            } catch (error) {
                toast.error("Error al cargar los datos del perfil");
                setLoading(false);
            }
        } else {
            toast.error("No se encontró el id del usuario");
            setLoading(false);
        }
    };

    // Usamos useEffect para llamar a la API cuando el componente se monta
    useEffect(() => {
        fetchProfile();
    }, [userId]); // Se ejecuta cada vez que 'userId' cambia

    // Verificamos si los datos aún están cargando
    if (loading) {
        return <div>Cargando...</div>;
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
                                placeholder={profile.userName || "Nombre"}
                                value={profile.userName || ""}
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
                                placeholder={profile.lastName || "Apellido"}
                                value={profile.lastName || ""}
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
                                placeholder={profile.email || "Correo electrónico"}
                                value={profile.email || ""}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Teléfono
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder={profile.phone || "Teléfono"}
                                value={profile.phone || ""}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                País
                            </label>
                            <select
                                className="block appearance-none w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                value={profile.country || ""}
                                disabled
                            >
                                <option>{profile.country || "País"}</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}; */