import { FC, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "../../assets/vectors/lockedVerify.svg";
import arrowLeft from "../../assets/vectors/arrowLeft.svg";

const TwoFactorAuth: FC = () => {
  const [userCode, setUserCode] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate("/register");
    }
  }, [email, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newCode = [...userCode];
    newCode[index] = e.target.value.slice(0, 1);
    setUserCode(newCode);
  };

  const verifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const baseUrl = import.meta.env.VITE_API_URL;
    const codeString = userCode.join("");

    try {
      const response = await axios.post(`${baseUrl}/verifyRegister/verificar-2fa`, {
        email: email,
        token: codeString,
      });

      if (response.status === 200 && response.data.toLowerCase().includes("verificacion exitosa")) {
        toast.success("Verificación exitosa. Redirigiendo...", { autoClose: 4000 });
        navigate("/verify/successful");
      } else {
        toast.error("El código ingresado es incorrecto. Por favor, inténtalo de nuevo.", { autoClose: 4000 });
      }
    } catch {
      toast.error("Hubo un problema al verificar el código. Inténtalo más tarde.", { autoClose: 4000 });
    }
  };

  return (
    <section className="bg-gray-100 w-full h-[100vh] relative overflow-hidden flex items-center">
      <img
        onClick={() => navigate(-1)}
        className="absolute top-7 left-5"
        src={arrowLeft}
        alt="Regresar"
      />
      <form
        onSubmit={verifyCode}
        className="bg-white rounded-xl m-auto w-4/5 max-w-[630px] p-3 flex flex-col justify-center items-center gap-5"
      >
        <img src={Verify} alt="Verificación" />
        <span className="absolute top-5 right-5">Paso 2 de 2</span>
        <h2 className="text-center font-bold text-2xl">Verificación de seguridad</h2>
        <p className="w-full max-w-[400px] text-center">
          Hemos enviado un código de verificación a tu correo. Por favor, ingrésalo a continuación.
        </p>
        <div className="flex my-6 gap-3">
          {userCode.map((digit, index) => (
            <input
              className="w-[35px] h-[40px] text-center border border-gray-300 outline-none"
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-md w-[200px] h-[50px] hover:bg-gray-700"
        >
          Verificar cuenta
        </button>
      </form>
    </section>
  );
};

export default TwoFactorAuth;
