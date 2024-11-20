import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom'

type LoginType = {
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm<LoginType>();

    const onSubmit: SubmitHandler<LoginType> = data => {
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                    <img className="w-20 h-20" src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="Login Logo" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-center">Iniciar sesión</h2>
                        <p className="text-center text-sm">
                            ¿No tenés una cuenta?{' '}
                            <a href="http://localhost:5173/register" className="text-blue-500 underline">
                                Registrate acá
                            </a>
                        </p>
                        <input
                            {...register('email', {required: 'Email es requerido'})}
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="mt-4">
                        <input
                            {...register('password', {
                                required: { value: true, message: 'Este campo es requerido, por favor ingrese su contraseña' },
                                minLength: { value: 3, message: 'El password debe tener al menos 3 caracteres, por favor ingrese una contraseña válida' },
                                maxLength: { value: 20, message: 'El password debe tener menos de 20 caracteres, por favor ingrese una contraseña válida' }

                            })}
                            type="password"
                            placeholder="Contraseña"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 mt-4 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Continuar
                    </button>

                    <Link to="/reset-password" className=" text-blue-500  hover:underline">
                    ¿Olvidaste tu contraseña?
                    </Link>
                </form>

                <div className="flex items-center justify-center my-4">
                    <span className="w-full border-t border-gray-300"></span>
                    <span className="px-2 text-gray-500">o</span>
                    <span className="w-full border-t border-gray-300"></span>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 mb-2 text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                    <FaGoogle className="w-5 h-5 mr-2"/>
                    Continuar con Google
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 mt-2 text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                    <FaApple className="w-5 h-5 mr-2"/>
                    Continuar con Apple
                </button>
            </div>
        </div>
    );
};