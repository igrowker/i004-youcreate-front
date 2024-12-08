import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/vectors/Notificaciones.svg";

type ResetPasswordType = {
  email: string;
};

export const ResetPassword: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordType>();

  const onSubmit: SubmitHandler<ResetPasswordType> = async (data) => {
    const baseUrl = import.meta.env.VITE_API_URL; 
    try {
      const response = await axios.post(`${baseUrl}/reset/${data.email}`);
      if (response.status === 200) {
        toast.success("Se envió un enlace de restablecimiento a tu correo electrónico.", {
          autoClose: 4000,
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Error al enviar el enlace de restablecimiento.";
        toast.error(errorMessage, {
          autoClose: 4000,
        });
      } else {
        toast.error("Ocurrió un error inesperado. Por favor, inténtalo de nuevo.", {
          autoClose: 4000,
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center  bg-[url('/images/fondoDash.png')]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img className="w-20 h-20" src={Logo} alt="Restablecer contraseña" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">¿Problemas para iniciar sesión?</h2>
          <p className="text-center text-sm text-gray-600">
            Ingresa tu dirección de correo electrónico registrada para recibir un enlace de restablecimiento de contraseña.
          </p>
          <div className="mt-4">
            <input
              {...register("email", {
                required: "El correo electrónico es requerido",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ingresa un correo válido",
                },
              })}
              type="email"
              placeholder="Correo Electrónico"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-[#56588C] hover:bg-gray-900 rounded-lg hover:bg-gray-500"
          >
            ENVIAR ENLACE DE RESTABLECIMIENTO
          </button>
        </form>
      </div>
    </div>
  );
};
