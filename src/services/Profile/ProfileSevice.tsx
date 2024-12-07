import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const updateUserProfile = async (userId: number, updatedData: object) => {
    try {
        const response = await axios.put(`${ baseUrl }/api/ v1 / user / ${ userId }, updatedData`);
        return response.data;
    } catch (error) {
        console.error("Error al actualizar", error);
        throw error;
    }
};

