import React from 'react';
import '../Estilos/Peliculas.css';
import { format } from 'date-fns';


const Pelicula = ({ Titulo, Descripcion, Imagenes,PeliculaID, Duracion,Genero,Estreno }) => {
    return (
        <div className="pelicula">
            <img src={Imagenes} alt={Titulo} className="pelicula-imagen" />
            <h2>{Titulo}</h2>
            <p><strong>Descripción:</strong> {Descripcion}</p>
            <p><strong>Duración:</strong> {Duracion}</p>
            <p><strong>Genero:</strong> {Genero}</p>
            <p><strong>Estreno:</strong> {format(new Date(Estreno), 'yyyy-MM-dd')}</p>
            <a href={`/ver-pelicula/${PeliculaID}`} rel="noopener noreferrer" className="boton-ver">
                Ver Película
            </a>
        </div>
    );
};

export default Pelicula;

