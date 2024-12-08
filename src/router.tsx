
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/RegistroLoginComponent/login.tsx";
import { Register } from "./components/RegistroLoginComponent/register.tsx";
import { RouterLayout } from "./pages/common/RouterLayout";
import LandingPage from "./components/LandingPage/LandingPage.tsx";
import TwoFactorAuth from "./components/RegistroLoginComponent/TwoFactorAuth.tsx";
import NotFound from "./pages/NotFound.tsx";
import VerifyAccountSuccess from "./components/RegistroLoginComponent/VerifyAccountSuccess.tsx";

import UserAdmin from "./pages/UserAdmin.tsx";
import { ResetPassword } from "./components/RegistroLoginComponent/ResetPassword.tsx";
import {Dashboard} from "./components/secciones/Dashboard.tsx";
import {ProfileSection} from "./components/ProfileComponent/ProfileSection.tsx";

export const AppRouter: FC = () => {
    return (
        
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/admin" element={<UserAdmin />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfileSection/>} />


            <Route path="/" element={<RouterLayout />}>
                <Route index element={<LandingPage />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify/successful" element={<VerifyAccountSuccess />} />
            
            {/* Ruta para la verificación de la cuenta */}
            <Route path="/verifyRegister" element={<TwoFactorAuth />} />
        
        
        </Routes>
    );
};
