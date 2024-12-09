import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../services/Profile/ProfileSevice"; // Asegúrate de que la ruta es correcta
import { ConfigProfile, mapProfileToConfigProfile, updateUserProfile } from "../../services/Profile/ConfigService"; // Importamos el servicio para actualizar el perfil
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext";

export const ConfigSection: React.FC = () => {
    const [profile, setProfile] = useState<any>(null); // Estado para almacenar los datos del perfil
    const [loading, setLoading] = useState<boolean>(true); // 
    const [isEditing, setIsEditing] = useState<boolean>(false); 
    const {user}=useUser()

    // Función para obtener los datos del perfil
    const fetchProfile = async () => {
        if (user) {
            try {
                
                const profileData = await getUserProfile(user.id); // Llamada al servicio para obtener los datos del perfil
                setProfile(profileData);
                console.log(profileData);
                
                setLoading(false); 
            } catch (error) {
                toast.error("Error al cargar los datos del perfil");
                setLoading(false);
            }
        } else {
            toast.error("No se encontró el id del usuario");
            setLoading(false);
        }
    };

  



// Lógica de actualización de perfil
const handleUpdateProfile = async () => {
    if (user) {
        try {
            const profileData: ConfigProfile = mapProfileToConfigProfile(profile); // 👈 Conversión de Profile a ConfigProfile
            console.log('Datos a enviar:', profileData); // 👈 Depuración para ver el payload de la API
            await updateUserProfile(profileData); 
            
            toast.success("Perfil actualizado correctamente");
            setIsEditing(false); 
            fetchProfile(); 
        } catch (error) {
            toast.error("Error al actualizar el perfil");
        }
    }
};

// Hook useEffect para cargar el perfil
useEffect(() => {
    fetchProfile();
}, [user]); 

// Mostrar un mensaje de carga mientras se obtienen los datos
if (loading) {
    return <div>Cargando...</div>;
}


    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Editar Perfil</h1>

            <div className="bg-white w-3/5 items-center shadow-lg rounded-lg p-6">
                <form className=" max-w-3xl">
                    <div className="flex flex-wrap -mx-3">
                    <div className=" px-3 mb-2 md:mb-0">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Nombre
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                value={profile.userName || ""}
                                disabled={!isEditing}
                                onChange={(e) =>
                                    setProfile({ ...profile, userName: e.target.value })
                                }
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Apellido
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 border-2 text-gray-700 border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                value={profile.lastName || ""}
                                disabled={!isEditing}
                                onChange={(e) =>
                                    setProfile({ ...profile, lastName: e.target.value })
                                }
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
                                value={profile.email || ""}
                                readOnly
                                onChange={(e) =>
                                    setProfile({ ...profile, email: e.target.value })
                                }
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
                                value={profile.phone || ""}
                                disabled={!isEditing}
                                onChange={(e) =>
                                    setProfile({ ...profile, phone: e.target.value })
                                }
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
                                disabled={!isEditing}
                                onChange={(e) =>
                                    setProfile({ ...profile, country: e.target.value })
                                }
                            >
                                <option value="Bolivia">Bolivia</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Spain">España</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Dominican Republic">Republica Dominicana</option>
                            </select>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-end mt-6 space-x-3">
                        <button
                            type="button"
                            onClick={() => setIsEditing(!isEditing)}
                            className=" flex bg-gray-700 text-white px-4 py-2 rounded-md text-end"
                        >
                            {isEditing ? "Cancelar" : "Editar Perfil"}
                        </button>

                        {isEditing && (
                            <button
                                type="button"
                                onClick={handleUpdateProfile}
                                className="bg-purple-400 text-white px-4 py-2 rounded-md"
                            >
                                Guardar
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
