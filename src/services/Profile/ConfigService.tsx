/* import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export interface Profile {
    id: number;
    country: string;
    userName: string;
    lastName: string;
    email: string;
    phone: string;
}

// Llamada a la API para obtener el perfil del usuario
export const getUserProfile = async (id:number): Promise<Profile> => {
    try {
        const response = await axios.get(`${baseUrl}/api/v1/user/${id}`);
        return response.data.data;
    } catch (error) {
        console.error("Error al obtener el perfil:", error);
        throw error; // Lanza el error para ser manejado en el componente
    }
};

 */