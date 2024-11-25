import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams
import Navbar from "../Componentes/Navbar";
import '../Estilos/VerPelicula.css';

const VerPelicula = () => {
    const { id } = useParams();
    console.log(id);
    const [pelicula, setPelicula] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPelicula = async () => {
            try {
                const response = await fetch(`https://teatro-apolo-back.onrender.com/api/movies/${id}`);
                if (!response.ok) {
                    throw new Error("Error al obtener los datos de la película");
                }
                const data = await response.json();
                setPelicula(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPelicula();
    }, [id]); // Dependencia en el parámetro id

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="contenedor-pelicula">
                <div className="pelicula-contenedor">
                    {pelicula && (
                        <>
                            <img src={pelicula.image} alt={pelicula.titulo} />
                            <div className="pelicula-info">
                                <h2 className="pelicula-titulo">{pelicula.title}</h2>
                                <p className="pelicula-descripcion">{pelicula.description}</p>
                                <button className="boton-reservar">Reservar</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VerPelicula;
