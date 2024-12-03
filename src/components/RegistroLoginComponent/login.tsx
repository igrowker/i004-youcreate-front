import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login, LoginType } from "../../services/auth/auth-services.ts";
import { Flip, toast } from "react-toastify";
import { Loader } from "../Loader/Loader.tsx";

export const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginType>();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    setIsLoading(true);
    const id = toast.loading("Cargando...", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });

    try {
      const response = await login(data);
      if (response.status === 200) {
        localStorage.setItem("loginData", JSON.stringify(response.data));
        toast.update(id, {
          render: "Sesión iniciada correctamente.",
          type: "success",
          isLoading: false,
          autoClose: 4000,
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast.update(id, {
        render: error.response?.status === 401
          ? "Contraseña incorrecta. Inténtalo de nuevo."
          : "Error al iniciar sesión. Verifique su cuenta",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbzQSwEkbwmAZ0yt9AKLOPbz_8mYlFM7bCg&s"
            alt="Fondo"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute bottom-0 left-4 transform translate-y-1/2 bg-gray-200 rounded-full border-4 border-white w-24 h-24 flex items-center justify-center shadow-lg">
            <span className="text-3xl text-gray-600">👤</span>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-medium text-center mb-6">
           Bienvenido a YouCreate <span className="font-bold"></span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Formato de correo inválido",
                  },
                })}
                placeholder="Correo Electrónico"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: "La contraseña es obligatoria" })}
                placeholder="Contraseña"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" {...register("rememberMe")} className="mr-2" />
                Recordarme
              </label>
              <Link to="/reset-password" className="text-gray-500 hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition focus:ring-2 focus:ring-gray-300 focus:outline-none"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-sm text-gray-500">o inicia sesión con</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-md hover:bg-gray-200">
                <FaFacebook className="text-blue-600 text-xl" />
              </button>
              <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-md hover:bg-gray-200">
                <FaGoogle className="text-red-500 text-xl" />
              </button>
            </div>
          </div>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-gray-800 underline font-medium">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
