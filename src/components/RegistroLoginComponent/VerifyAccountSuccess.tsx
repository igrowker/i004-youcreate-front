import React from 'react';
import Verify from "../../assets/vectors/verify.svg";
import { useNavigate } from 'react-router-dom';

const VerifyAccountSuccess: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/login');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="bg-white md:p-16 text-center max-w-lg rounded-lg mx-4 shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            className="w-20 h-20"
            src={Verify}
            alt="Restablecer contraseña"
          />
        </div>
        <h2 className="text-3xl font-semibold text-black mb-4">
          ¡Verificación completada!
        </h2>
        <div className="flex justify-center mb-6"></div>
        <p className="text-gray-600 text-lg mb-6">
          Tu cuenta ha sido verificada exitosamente.
        </p>
        <button
          onClick={handleContinue}
          className="bg-black text-white py-2 w-full rounded-lg hover:bg-gray-700 transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default VerifyAccountSuccess;
