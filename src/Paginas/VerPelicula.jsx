import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModalReserva from "../Componentes/ModalReserva";
import FormularioReserva from "../Componentes/FormularioReserva"; // Asegúrate de tener este componente
import '../Estilos/VerPelicula.css';

const VerPelicula = () => {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    const obtenerPelicula = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/peliculas/${id}`);
        const data = await response.json();
        setPelicula(data);
      } catch (error) {
        console.error("Error al obtener la película:", error);
      }
    };

    obtenerPelicula();
  }, [id]);

  const handleOpenModal = () => {
    setShowModal(true); // Abre el modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Cierra el modal
  };

  if (!pelicula) {
    return <div className="loading">Cargando...</div>;
  }

  // Extraer el ID del trailer de YouTube desde el enlace
  const trailerId = pelicula.LinkTrailer.split('v=')[1];

  return (
    <div className="ver-pelicula-container">

      <div className="pelicula-imagen-info">
        <div className="pelicula-imagen">
          <img src={pelicula.Imagenes} alt={pelicula.Titulo} />
        </div>
        <div className="pelicula-info">
          <h1>{pelicula.Titulo}</h1>
          <p><strong>Duración:</strong> {pelicula.Duracion} minutos</p>
          <p><strong>Género:</strong> {pelicula.Genero}</p>
          <p><strong>Clasificación:</strong> {pelicula.Clasificacion}</p>
          <p><strong>Estreno:</strong> {new Date(pelicula.Estreno).toLocaleDateString()}</p>
          <p><strong>Descripción:</strong> {pelicula.Descripcion}</p>
          <button className="boton-reservar" onClick={handleOpenModal}>Reservar</button>
        </div>
      </div>

      <div className="pelicula-trailer">
        <h3>Ver Trailer</h3>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailerId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Modal de reserva */}
      <ModalReserva show={showModal} onClose={handleCloseModal}>
        <FormularioReserva pelicula={pelicula} />
      </ModalReserva>

    </div>
  );
};

export default VerPelicula;
