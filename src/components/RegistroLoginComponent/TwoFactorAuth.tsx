import axios from "axios";
import React, { useState } from "react";
import iconYoucreate from "../../assets/vectors/iconYoucreate.svg";
import arrowLeft from "../../assets/vectors/arrowLeft.svg";
import { useNavigate } from "react-router-dom";

const TwoFactorAuth: React.FC = () => {
  const [userCode, setUserCode] = useState(["", "", "", ""]); // Un solo estado para los 4 dígitos

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...userCode]; // Crear una copia del estado actual
    newCode[index] = e.target.value.slice(0, 1); // Solo permitimos un carácter
    setUserCode(newCode); // Actualizar el estado
  };

  const navigate = useNavigate();

  const verifyCode = async (): Promise<void> => {
    const codeString = userCode.join(""); // Unir los 4 dígitos en una cadena de texto
    try {
      const response = await axios.post("/api/verify-2fa", {
        code: codeString, // El código ingresado por el usuario
      });
    } catch (err) {
      console.error("Error verifying code", err);
    }
  };

  return (
    <section className="bg-[#E7DEFF] w-full h-[100vh] relative overflow-hidden flex ali items-center">
      <img
        onClick={() => navigate(-1)}
        className="absolute top-7 left-5 lg:top-10 lg:left-10"
        src={arrowLeft}
        alt=""
      />
      <form className="bg-[#FFFFFF] relative rounded-xl m-auto w-[95%] h-[500px]  max-w-[630px] p-3 flex flex-col justify-center items-center  gap-5 ">
        <img src={iconYoucreate} alt="icon youcreate" />
        <span className="absolute top-5 right-5">Paso 2 de 2</span>
        <h2 className="text-center font-bold text-2xl ">
          Verificación de seguridad
        </h2>
        <p className=" w-full  max-w-[400px]">
          Hemos enviado un código de verificación a tu email. Por favor,
          ingrésalo a continuación para verificar tu cuenta.
        </p>
        <div className="flex my-6 gap-3">
          {userCode.map((digit, index) => (
            <input
              className="  w-[35px] h-[40px] text-center  border border-gray-300 outline-none"
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <button
          className="bg-[#7E008F] rounded-md text-[#FFFFFF] w-[200px] h-[50px]"
          onClick={verifyCode}
        >
          Verificar cuenta
        </button>
      </form>
    </section>
  );
};

export default TwoFactorAuth;
