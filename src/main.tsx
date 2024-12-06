
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)

import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/UserContext";
import App from "./App";
import "./index.css"; 

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

