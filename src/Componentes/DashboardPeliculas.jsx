import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const DashboardPeliculas = () => {
  const [formData, setFormData] = useState({
    Titulo: '',
    Duracion: '',
    Genero: '',
    Clasificacion: '',
    Estreno: '',
    Imagenes: '',
    Descripcion: '',
    LinkTrailer: ''
  });

  const [message, setMessage] = useState(''); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [peliculas, setPeliculas] = useState([]); 

  useEffect(() => {
    // Función para obtener las películas desde la API
    const fetchPeliculas = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/peliculas');
        if (response.ok) {
          const data = await response.json();
          setPeliculas(data); // Asignar las películas a nuestro estado
        } else {
          setMessage('No se pudo cargar las películas.');
        }
      } catch (error) {
        setMessage('Error en la conexión. Inténtalo más tarde.');
      }
    };

    fetchPeliculas(); 
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/peliculas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Película registrada exitosamente!');
        setFormData({
          Titulo: '',
          Duracion: '',
          Genero: '',
          Clasificacion: '',
          Estreno: '',
          Imagenes: '',
          Descripcion: '',
          LinkTrailer: ''
        });
        setIsModalOpen(false); // Cierra el modal
        // Volver a obtener las películas después de agregar una nueva
        const data = await response.json();
        setPeliculas((prevPeliculas) => [...prevPeliculas, data]); // Añadir la película recién registrada a la lista
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || 'No se pudo registrar la película'}`);
      }
    } catch (error) {
      setMessage('Error en la conexión. Inténtalo más tarde.');
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setMessage(''); // Limpia el mensaje al abrir el modal
  };

  return (
    <div className="dashboard">
      <h2>Gestión de Películas</h2>
      <div className="info-peliculas">
        <div>
          <p>Cantidad de películas registradas:</p>
          <span>{peliculas.length}</span>
        </div>
        <div>
          <p>Cantidad de películas disponibles:</p>
          <span>{peliculas.filter((pelicula) => pelicula.disponible).length}</span> {/* Filtrar las disponibles */}
        </div>
        <div>
          <p>Cantidad de Usuarios registrados:</p>
          <span>10.929.210</span>
        </div>
      </div>

      <div className="dashboard-peliculas">
        <div>
          <button onClick={toggleModal}>Agregar Película</button>
          <button>Exportar PDF</button>
          <button>Exportar Excel</button>
        </div>

        <table>
          <thead>
            <tr>
            <th>Id</th>
              <th>Imagen</th>
              <th>Título</th>
              <th>Duración</th>
              <th>Género</th>
              <th>Clasificación</th>
              <th>Estreno</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {peliculas.map((pelicula) => (
              <tr key={pelicula.PeliculaID}>
                 <td>{pelicula.PeliculaID}</td>
                <td>
                <img src={pelicula.Imagenes} alt={`Imagen de ${pelicula.Titulo}`} />
                </td>

                <td>{pelicula.Titulo}</td>
                <td>{pelicula.Duracion}</td>
                <td>{pelicula.Genero}</td>
                <td>{pelicula.Clasificacion}</td>
                <td>{format(new Date(pelicula.Estreno), 'dd/MM/yyyy')}</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal2-overlay">
          <div className="modal2">
            <form onSubmit={handleSubmit}>
              <h3 className="modal2-title">Registrar Película</h3>
              <div>
                <label>Título:</label>
                <input
                  type="text"
                  name="Titulo"
                  placeholder="Ingrese el título"
                  value={formData.Titulo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Descripción:</label>
                <textarea
                  name="Descripcion"
                  placeholder="Ingrese la descripción"
                  value={formData.Descripcion}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Duración:</label>
                <input
                  type="text"
                  name="Duracion"
                  placeholder="Ej. 120 min"
                  value={formData.Duracion}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Género:</label>
                <input
                  type="text"
                  name="Genero"
                  placeholder="Ej. Acción"
                  value={formData.Genero}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Clasificación:</label>
                <input
                  type="text"
                  name="Clasificacion"
                  placeholder="Ej. PG-13"
                  value={formData.Clasificacion}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Fecha de Estreno:</label>
                <input
                  type="date"
                  name="Estreno"
                  value={formData.Estreno}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Imágenes (URL):</label>
                <input
                  type="text"
                  name="Imagenes"
                  placeholder="URL de la imagen"
                  value={formData.Imagenes}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Link del Trailer:</label>
                <input
                  type="text"
                  name="LinkTrailer"
                  placeholder="URL del trailer"
                  value={formData.LinkTrailer}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="modal2-actions">
                <button type="submit">Guardar</button>
                <button type="button" onClick={toggleModal}>
                  Cancelar
                </button>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPeliculas;
