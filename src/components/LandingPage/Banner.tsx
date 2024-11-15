import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/imagesLanding/Banner01.png';
import banner2 from '../../assets/imagesLanding/Banner02.png';
import banner3 from '../../assets/imagesLanding/Banner03.png';

const Banner: React.FC = () => {
  
  const images = [banner1, banner2, banner3];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  // Cambiar la imagen cada 2 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Inicia el fade-out
      setTimeout(() => {
        setCurrentImage(prev => (prev + 1) % images.length);
        setFade(true); // Aplica el fade-in después del cambio de imagen
      }, 500); // Tiempo para que dure el fade-out antes de cambiar la imagen
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center px-48 mt-16">
      <img
        src={images[currentImage]}
        alt="Banner"
        className={`w-full h-full object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export default Banner;