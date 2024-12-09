import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;
const user = JSON.parse(localStorage.getItem("loginData") as string);

export interface ConfigProfile {
    id: string;
    userName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
}

// Llamada a la API para actualizar el perfil del usuario
export const updateUserProfile = async (profileData: ConfigProfile): Promise<void> => {
    try {
        const response = await axios.put(`${baseUrl}/api/v1/user/${user.id}`, profileData, );
        return response.data; // Puede ser un mensaje o cualquier otra respuesta que tu API devuelva
    } catch (error) {
        console.error("Error al actualizar el perfil:", error);
        throw error; // Lanza el error para que sea manejado en el componente
    }
};

