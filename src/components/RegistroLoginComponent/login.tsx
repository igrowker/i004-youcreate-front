import React from 'react';

export const Login: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
            <div className="w-full max-w-md p-8 space-y-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full">
                        LOGO
                    </div>
                </div>
                <h2 className="text-xl font-semibold text-center">Iniciar sesión</h2>
                <p className="text-center text-sm">
                    ¿No tenés una cuenta?{' '}
                    <a href="#" className="text-blue-500 underline">
                        Registrate acá
                    </a>
                </p>
                <form className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Contraseña *"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-white bg-gray-800 rounded-lg"
                    >
                        Continuar
                    </button>
                </form>
                <div className="flex items-center justify-center my-4">
                    <span className="w-full border-t border-gray-300"></span>
                    <span className="px-2 text-gray-500">o</span>
                    <span className="w-full border-t border-gray-300"></span>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 mb-2 text-gray-800 bg-white border border-gray-300 rounded-lg"
                >
                    <img src="path-to-google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
                    Continuar con Google
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
                >
                    <img src="path-to-apple-icon.png" alt="Apple" className="w-5 h-5 mr-2" />
                    Continuar con Apple
                </button>
            </div>
        </div>
    );
};


