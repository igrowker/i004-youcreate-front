import React from "react";
import card1 from '../../assets/imagesLanding/card1.png';
import card2 from '../../assets/imagesLanding/card2.png';
import card3 from '../../assets/imagesLanding/card3.png';

const Features: React.FC = () => {
  const worksData = [
    {
      title: "Registrate y asegura tus finanzas",
      description: (
        <>
          Con <strong>YouCreate</strong>, gestionar tus finanzas es más sencillo que nunca. 
          Regístrate y conecta todas tus fuentes de ingresos en un solo lugar. 
          La seguridad de tus datos está garantizada con nuestras medidas de protección y encriptación.
        </>
      ),
      image: card1,
      color: '#87F1FF',
    },
    {
      title: "Controla tus ingresos, gastos e impuestos",
      description: (
        <>
          Monitorea tus ingresos, controla tus gastos y paga impuestos de manera personalizada.  
          <strong> YouCreate</strong> está diseñada específicamente para influencers que buscan 
          tener un control total sobre sus finanzas.
        </>
      ),
      image: card2,
      color: '#CFBDFF',
    },
    {
      title: "Mantente al día con notificaciones automáticas",
      description: (
        <>
          Con <strong>YouCreate</strong>, nunca perderás de vista las fechas importantes. 
          Recibe alertas automáticas sobre tus pagos e impuestos para que puedas concentrarte 
          en lo que mejor haces.
        </>
      ),
      image: card3,
      color: '#F7BDFF'
    },
  ];
  return (
    <div className="px-48">
      <h2 className="text-center font-bold text-[#5B0068] text-3xl my-32">¿Cómo funciona?</h2>
      <div className="space-y-20">
        {worksData.map(({ title, description, image, color }, index) => {
          const isInverted = index % 2 === 1;
          return (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className={`flex flex-col h-[450px] ${
                isInverted ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-x-5 justify-between`}
            >
              {/* Imagen */}
              <div className="h-full">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-[700px] shadow-md"
                />
              </div>
              {/* Texto */}
              <div className="w-[800px] px-16 space-y-12">
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="text-2xl">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
