import React, { useState, useEffect } from 'react';
import Pelicula from './Pelicula';
import '../Estilos/Galeria.css';
import axios from 'axios';

const Galeria = () => {
    // Estado para almacenar las películas obtenidas de la API
    const [peliculas, setPeliculas] = useState([]);

    // Estado para manejar posibles errores
    const [error, setError] = useState(null);

    // useEffect para realizar la llamada a la API
    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const response = await axios.get('https://teatro-apolo-back.onrender.com/api/movies/');
                setPeliculas(response.data); // Suponiendo que el API devuelve un array
            } catch (err) {
                console.error(err);
                setError('Error al cargar las películas.');
            }
        };

        fetchPeliculas();
    }, []);

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (peliculas.length === 0) {
        return <div className="loading">Cargando películas...</div>;
    }

    return (
        <div className="galeria">
            {peliculas.map((pelicula) => (
                <Pelicula
                    key={pelicula.id}
                    title={pelicula.title}
                    description={pelicula.description}
                    image={pelicula.image}
                    _id={pelicula._id}
                />
            ))}
        </div>
    );
};

export default Galeria;
