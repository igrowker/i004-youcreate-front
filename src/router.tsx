import  {FC} from "react";
import {Routes, Route} from "react-router-dom";
import {Login} from "./components/RegistroLoginComponent/login.tsx";
import {RouterLayout} from "./pages/common/RouterLayout";
import TwoFactorAuth from "./components/RegistroLoginComponent/TwoFactorAuth.tsx";




export const AppRouter: FC = () => {
        return (
            //esto lleva el layout de home en router layout  los componentes que lleven el menu y por fuera como el login que no muestra el navbar
            <Routes>
                <Route path="/auth" element={<TwoFactorAuth/>}/>
                <Route path="/" element={<RouterLayout/>}>

                </Route>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        )
    }
;