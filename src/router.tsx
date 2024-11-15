import  {FC} from "react";
import {Routes, Route} from "react-router-dom";
import {Login} from "./components/RegistroLoginComponent/login.tsx";
import {RouterLayout} from "./pages/common/RouterLayout";
import VerifyAccountSucces  from "./components/RegistroLoginComponent/VerifyAccountSucces.tsx";




export const AppRouter: FC = () => {
        return (
            //esto lleva el layout de home en router layout  los componentes que lleven el menu y por fuera como el login que no muestra el navbar
            <Routes>
                <Route path="/" element={<RouterLayout/>}>

                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/verify/succesful" element={<VerifyAccountSucces/>}/>
            </Routes>
        )
    }
;