import React from "react";
import NotFoundImg from "../assets/images/NotFoundImg.webp";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section className="w-[95%] h-[100vh] max-h-[1000px] max-w-[1400px] flex flex-col m-auto items-center justify-center overflow-hidden lg:flex-row lg:justify-between">
      <div className="px-4 flex  flex-col max-w-[500px] gap-5 lg:relative lg:top-[-100px]">
        <h3 className="text-center text-5xl"> <strong>OOPS! </strong></h3>
        <p className="text-xl">
          Lo sentimos, no pudimos encontrar la página que buscabas. Tal vez fue
          un error, o la página ya no existe.
        </p>
        <button className="h-12 rounded-xl text-white font-semibold bg-black w-full max-w-[300px] mt-10 m-auto">
          <Link to={"/"}>VOLVER AL INICIO</Link>
        </button>
      </div>

      <img  className="w-full max-w-[500px] lg:max-w-[700px] lg:relative lg:bottom-[-100px]" src={NotFoundImg} alt="imagen de error" />
    </section>
  );
};

export default NotFound;
