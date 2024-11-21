import axios, {AxiosInstance} from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_URL;

export const apiService: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});