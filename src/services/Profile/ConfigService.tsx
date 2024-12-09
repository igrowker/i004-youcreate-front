import axios from "axios";
import { Profile } from "./ProfileSevice";
const baseUrl = import.meta.env.VITE_API_URL;
const user = JSON.parse(localStorage.getItem("loginData") as string);

export interface ConfigProfile {

    userName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    country: string;
}

export const updateUserProfile = async (profileData: ConfigProfile): Promise<void> => {
    try {
        const response = await axios.put(`${baseUrl}/api/v1/user/${user.id}`, profileData);
        return response.data;
    } catch (error: any) { // ❗️Usar 'any' puede generar errores no detectados
        console.error("Error al actualizar el perfil:", error.response?.data || error.message);
        throw error;
    }
};

// Función para convertir Profile a ConfigProfile
export const mapProfileToConfigProfile = (profile: Profile): ConfigProfile => {
    return {
        userName: profile.userName,
        lastName: profile.lastName,
        email: profile.email,
        phoneNumber: profile.phone, 
        country: profile.country
    };
};

export const getUserProfile = async (id:number): Promise<ConfigProfile> => {
    try {
        const response = await axios.get(`${baseUrl}/api/v1/user/${id}`);
        console.log(response)
        return response.data.data;
    } catch (error) {
        console.error("Error al obtener el perfil:", error);
        throw error; // Lanza el error para ser manejado en el componente
    }
};