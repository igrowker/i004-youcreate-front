import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const VerifyAccountSucces: React.FC = () => {
  
  const navigate = useNavigate();

  const handleContinue = () => {
    
    navigate('/login');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-gray-100">
      <div className=" bg-white md:p-16 text-center max-w-lg rounded-lg mx-4 shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">¡Verificación completada!</h2>
        <div className="flex justify-center mb-6">
          <HiCheckCircle className="text-black text-5xl" />
        </div>
        <p className="text-gray-600 text-lg mb-6">
          Tu cuenta ha sido verificada exitosamente.
        </p>
        <button
          onClick={handleContinue}
          className="bg-blue-600 text-white py-1 px-16 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default VerifyAccountSucces;
