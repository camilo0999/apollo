import React from 'react';
import '../Estilos/Platos.css'; // Importa el archivo CSS para los estilos

const Platos = ({ nombre, descripcion, imagen, precio }) => {
  return (
    <div className="comida">
      <img src={imagen} alt={nombre} className="comida-imagen" />
      <div className="comida-detalle">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p className="comida-precio">{precio}</p>
        <button className="boton-comprar">Ver</button>
      </div>
    </div>
  );
};

export default Platos;
