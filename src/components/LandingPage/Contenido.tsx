import landing from "../../assets/images/img-landing.png"

const Contenido: React.FC = () => {
       return (
              <div className="flex justify-center w-[90%] py-36 gap-20">
                     <section className="flex flex-col px-[100px] py-[10px] justify-center items-center">
                            <h2 className="text-center text-4xl font-bold text-[#1A1A1A]">
                                   Queremos que tengas el control total de tus finanzas
                            </h2>
                            <p className="mt-10 text-2xl text-center text-[#1A1A1A]">
                                   En YouCreate, nuestro propósito es desarrollar herramientas innovadoras y accesibles que faciliten la gestión de tu dinero, impulsando tu crecimiento financiero de manera segura y eficiente.
                            </p>
                     </section>
              <img src={landing} alt="Imagen principal" className="justify-center"/>
                     
       </div>
       
       )
}

export default Contenido;