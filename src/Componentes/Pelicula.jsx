import React from 'react';
import '../Estilos/Peliculas.css';

const Pelicula = ({ title, description, image,_id }) => {
    return (
        <div className="pelicula">
            <img src={image} alt={title} className="pelicula-imagen" />
            <h2>{title}</h2>
            <p><strong>Descripción:</strong> {description}</p>
            <a href={`/ver-pelicula/${_id}`} rel="noopener noreferrer" className="boton-ver">
                Ver Película
            </a>
        </div>
    );
};

export default Pelicula;

