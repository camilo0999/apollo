import React, { useState, useEffect } from 'react';
import '../Estilos/Carrusel.css'; // Importa el archivo CSS para el estilo del carrusel

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://pbs.twimg.com/media/Fywj9mZWwAEHylb.jpg:large',
    'https://moviefilmsla.wordpress.com/wp-content/uploads/2023/05/img_1746.png?w=1920&h=768&crop=1',
    'https://www.thebatman.com/images/banner_img.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Cambiar cada 10 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>❮</button>
      <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carrusel;
