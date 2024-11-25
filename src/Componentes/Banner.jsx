import React from 'react';
import '../Estilos/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-half banner-solid">
        <div className="banner-message">
          <h1>¡Satisfacción al primer bocado!</h1>
          <p>Explora nuestro menú y disfruta de comidas irresistibles.</p>
          <button className="banner-button">Ordena Ahora</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

