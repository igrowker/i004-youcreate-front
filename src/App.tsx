import  {FC} from 'react';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";


const App: FC = () => {
    return (
        <BrowserRouter>
            <ToastContainer />
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
