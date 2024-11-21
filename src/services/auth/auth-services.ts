import {AxiosResponse} from "axios";
import {apiService} from "../api.ts";

export type LoginType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export const login = async (data: LoginType): Promise<AxiosResponse> => {
        return await apiService.post('/auth/login', data);
}