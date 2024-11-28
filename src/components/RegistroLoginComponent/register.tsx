import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/vectors/uCreate.svg";
import { authRegister as registerService, RegisterType } from "../../services/auth/auth-services.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register: React.FC = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<RegisterType>();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    setIsLoading(true);
    const toastId = toast.loading("Cargando...");
    try {
      await registerService(data);
      toast.update(toastId, {
        render: "Registro exitoso. Por favor verifica tu correo.",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });
      navigate("/verifyRegister", { state: { email: data.email } });
    } catch (error: any) {
      toast.update(toastId, {
        render: error.response?.status === 409
          ? "El correo o nombre de usuario ya está registrado."
          : `Error: ${error.message}`,
        type: "error",
        isLoading: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-300 p-10 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <img className="w-20 h-20" src={Logo} alt="YouCreate Logo" />
          <span>Paso 1 de 2</span>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Crear una cuenta</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://myaccount.google.com/">
            <button type="button" className="bg-gray-800 hover:bg-black text-white text-2xl font-bold w-10 h-10 rounded-full">
              <FontAwesomeIcon icon={faGoogle} />
            </button>
          </a>
          <a href="https://www.icloud.com/">
            <button type="button" className="bg-gray-800 hover:bg-black text-white text-2xl font-bold w-10 h-10 rounded-full">
              <FontAwesomeIcon icon={faApple} />
            </button>
          </a>
        </div>
        <input
          type="text"
          {...register("userName", { required: "El nombre es obligatorio" })}
          placeholder="Nombre *"
          className="mb-2 p-2 border rounded w-full"
        />
        {errors.userName && <span className="text-red-500 text-sm">{errors.userName.message}</span>}
        <input
          type="text"
          {...register("lastName", { required: "El apellido es obligatorio" })}
          placeholder="Apellido *"
          className="mb-2 p-2 border rounded w-full"
        />
        {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
        <select
          {...register("country", { required: "El país es obligatorio" })}
          className="mb-2 p-2 border rounded w-full"
        >
          <option value="">País</option>
          <option value="MX">México</option>
          <option value="US">Estados Unidos</option>
          <option value="ES">España</option>
        </select>
        {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
        <input
          type="text"
          {...register("phoneNumber", { required: "El número de teléfono es obligatorio" })}
          placeholder="Número de teléfono *"
          className="mb-2 p-2 border rounded w-full"
        />
        {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
        <input
          type="email"
          {...register("email", { required: "El email es obligatorio", pattern: /^\S+@\S+$/i })}
          placeholder="Email *"
          className="mb-2 p-2 border rounded w-full"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        {["password", "confirmPassword"].map((field, index) => (
          <div className="relative mb-2" key={field}>
            <input
              type={passwordVisibility[field as keyof RegisterType] ? "text" : "password"}
              {...register(field as keyof RegisterType, {
                required: `${index === 0 ? "Contraseña" : "Confirmar contraseña"} es obligatoria`,
                ...(field === "password" && {
                  minLength: { value: 8, message: "Debe tener al menos 8 caracteres" },
                }),
                ...(field === "confirmPassword" && {
                  validate: (value) => value === getValues("password") || "Las contraseñas no coinciden",
                }),
              })}
              placeholder={`${index === 0 ? "Contraseña" : "Confirmar contraseña"} *`}
              className="p-2 border rounded w-full"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility(field as keyof RegisterType)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700"
            >
              <FontAwesomeIcon
                icon={passwordVisibility[field as keyof RegisterType] ? faEye : faEyeSlash}
              />
            </button>
            {errors[field as keyof RegisterType] && (
              <span className="text-red-500 text-sm">
                {(errors as any)[field]?.message}
              </span>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-gray-800 text-white p-2 rounded w-full flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Continuar"}
        </button>
      </form>
    </div>
  );
};
