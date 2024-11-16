import  {FC} from "react";
import {Routes, Route} from "react-router-dom";
import {Login} from "./components/RegistroLoginComponent/login.tsx";
import {Register} from "./components/RegistroLoginComponent/register.tsx";
import {RouterLayout} from "./pages/common/RouterLayout";
import VerifyAccountSuccess  from "./components/RegistroLoginComponent/VerifyAccountSuccess.tsx";




export const AppRouter: FC = () => {
        return (
            //esto lleva el layout de home en router layout  los componentes que lleven el menu y por fuera como el login que no muestra el navbar
            <Routes>
                <Route path="/" element={<RouterLayout/>}>

                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                <Route path="/verify/succesful" element={<VerifyAccountSuccess/>}/>
            </Routes>
        )
    }
;



