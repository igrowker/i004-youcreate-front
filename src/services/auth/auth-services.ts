import { AxiosResponse } from "axios";
import { apiService } from "../api.ts";

export type LoginType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export const login = async (data: LoginType): Promise<AxiosResponse> => {
    return await apiService.post('/auth/login', data);
}



export type RegisterType = {
    userName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    confirPassword: string;
    email: string;
    country: string;
};

export const authRegister = async (data: RegisterType): Promise<AxiosResponse> => {
    return await apiService.post('/auth/register', data);
}

