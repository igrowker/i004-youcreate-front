import React from 'react';
import Verify from "../../assets/vectors/verify.svg";
import { useNavigate } from 'react-router-dom';

const VerifyAccountSuccess: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center  bg-[url('/images/fondoDash.png')]">
      <div className="bg-white md:p-16 text-center max-w-lg rounded-lg mx-4 shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            className="w-20 h-20"
            src={Verify}
            alt="Restablecer contraseña"
          />
        </div>
        <h2 className="text-3xl font-raleway font-bold text-black mb-4">
          ¡Verificación completada!
        </h2>
        <div className="flex justify-center mb-6"></div>
        <p className="text-gray-600 text-lg mb-6">
          Tu cuenta ha sido verificada exitosamente.
        </p>
        <button
          onClick={handleContinue}
          className="bg-[#56588C] hover:bg-gray-900 text-white py-2 w-full rounded-lg  transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default VerifyAccountSuccess;
