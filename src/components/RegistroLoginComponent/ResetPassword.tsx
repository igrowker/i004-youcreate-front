import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Logo  from "../../assets/uCreate.svg"
type ResetPasswordType = {
    email: string;
}

export const ResetPassword: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordType>();

    const onSubmit: SubmitHandler<ResetPasswordType> = data => {
      

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                    <img
                        className="w-20 h-20"
                        src={Logo}
                        alt="Restablecer contraseña"
                    />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center">¿Problemas para iniciar sesión?</h2>
                    <p className="text-center text-sm text-gray-600">
                        Ingresa tu dirección de correo electrónico registrada para recibir un enlace de restablecimiento de contraseña.
                    </p>
                    <div className="mt-4">
                        <input
                            {...register('email', {
                                required: 'El correo electrónico es requerido',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Ingresa un correo válido'
                                }
                            })}
                            type="email"
                            placeholder="Correo Electrónico"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 mt-4 text-white bg-black rounded-lg hover:bg-gray-500 "
                    >
                    ENVIAR ENLACE DE RESTABLECIMIENTO
                    </button>
                </form>
            </div>
        </div>
    );
};