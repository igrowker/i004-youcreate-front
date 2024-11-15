import React from "react";
import NotFoundImg from "../assets/images/404img 1.webp";
import { Link, useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-[100vh] flex items-center justify-center overflow-hidden">
      <div className=" text-xl flex flex-col w-full p-3 max-w-[800px] items-center justify-center m-auto gap-5">
        <h2 className="text-[#423279] font-bold text-2xl">
          ¡Oops! Página no encontrada
        </h2>
        <figure>
          <img className="w-full" src={NotFoundImg} alt="image not found" />
        </figure>
        <p>
          Parece que esta página decidió tomar un descanso de desarrollo 😅 No
          te preocupes, vuelve al
          <Link to={"/"}>
            <span className="text-[#5E40E7] border-b-2 border-[#5E40E7] " > inicio </span>
          </Link>
          o dirígete al
          <Link to={"/Dashboard"}>
            <span className="text-[#5E40E7] border-b-2 border-[#5E40E7] "> Dashboard </span>
          </Link>
          mientras le damos una charla motivacional.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
