import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { authRegister as registerService, RegisterType } from "../../services/auth/auth-services.ts";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/vectors/arrowLeft.svg";


interface PasswordVisibility {
  password: boolean;
  confirmPassword: boolean;
}

export const Register: React.FC = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<RegisterType>();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState<PasswordVisibility>({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = (field: keyof PasswordVisibility) => {
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
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center  bg-[url('/images/fondoDash.png')]">
      <img
        onClick={() => navigate("/")}
        className="absolute top-7 left-5"
        src={arrowLeft}
        alt="Regresar"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
      >


        <h2 className="text-3xl font-nunito font-bold text-center mb-4">Registro</h2>



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
          <option value="Bolivia">Bolivia</option>
          <option value="Argentina">Argentina</option>
          <option value="Spain">España</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Colombia">Colombia</option>
          <option value="Dominican Republic">Republica Dominicana</option>
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
          placeholder="Correo electrónico *"
          className="mb-2 p-2 border rounded w-full"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

        {["password", "confirmPassword"].map((field, index) => (
          <div className="relative mb-2" key={field}>
            <input
              type={passwordVisibility[field as keyof PasswordVisibility] ? "text" : "password"}
              {...register(field as keyof RegisterType, {
                required: `${index === 0 ? "Contraseña" : "Confirmar contraseña"} es obligatoria`,
                minLength: field === "password" ? { value: 8, message: "Debe tener al menos 8 caracteres" } : undefined,
                validate: field === "confirmPassword"
                  ? (value) => value === getValues("password") || "Las contraseñas no coinciden"
                  : undefined,
              })}
              placeholder={`${field === "password" ? "Contraseña" : "Confirmar contraseña"} *`}
              className="p-2 border rounded w-full"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility(field as keyof PasswordVisibility)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700"
            >
              <FontAwesomeIcon icon={passwordVisibility[field as keyof PasswordVisibility] ? faEye : faEyeSlash} />
            </button>
            {errors[field as keyof RegisterType] && (
              <span className="text-red-500 text-sm">{(errors as any)[field]?.message}</span>
            )}

          </div>
        ))}
       
        <button
          type="submit"
          className="bg-[#56588C] hover:bg-gray-900 text-white p-2 rounded w-full flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Continuar"}
        </button>

        <p className="mt-6 text-sm text-center text-gray-500">
          ¿Ya eres usuario?{" "}
          <Link to="/login" className="text-gray-500  font-bold underline font-medium">
            Inciar sesion
          </Link>
        </p>
      </form>
      
    </div>
  );
};
