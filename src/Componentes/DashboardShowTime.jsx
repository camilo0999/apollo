import React, { useEffect, useState } from 'react';


const DashboardCliente = () => {
  const [showtimes, setShowtimes] = useState([]); // Estado para almacenar los showtimes
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar la visibilidad del modal
  const [newShow, setNewShow] = useState({
    Fecha: '',
    Hora: '',
    Sala: '',
    BoletosDisponibles: 0,
    PeliculaID: 1, // Asumimos que seleccionas la película por defecto (esto puede cambiar según la lógica)
  });

  useEffect(() => {
    const fetchShowtimes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/showtimes');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setShowtimes(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchShowtimes();
  }, []);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para manejar los cambios en el formulario del modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewShow({ ...newShow, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/showtimes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newShow),
      });

      if (!response.ok) {
        throw new Error('Error al crear el show');
      }

      const data = await response.json();
      // Actualiza el estado de los showtimes con el nuevo show
      setShowtimes([...showtimes, data]);

      // Cierra el modal
      closeModal();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="dashboard">
      <h2>Gestión de Funciones de Cine</h2>

      <div className="info-peliculas">
        <div>
          <p>Cantidad de funciones registradas:</p>
          <span>{showtimes.length}</span>
        </div>
        <div>
          <p>Cantidad de boletos disponibles:</p>
          <span>{showtimes.reduce((acc, show) => acc + show.BoletosDisponibles, 0)}</span>
        </div>
      </div>

      <div className="dashboard-showtimes">
        <div>
          <button onClick={openModal}>Crear Show</button>
          <button>Exportar PDF</button>
          <button>Exportar Excel</button>
        </div>

        {loading ? (
          <p>Cargando datos...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ShowID</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Sala</th>
                <th>Boletos Disponibles</th>
                <th>PeliculaID</th>
              </tr>
            </thead>
            <tbody>
              {showtimes.map((show, index) => (
                <tr key={index}>
                  <td>{show.ShowID}</td>
                  <td>{new Date(show.Fecha).toLocaleDateString()}</td> {/* Formatear la fecha */}
                  <td>{show.Hora}</td>
                  <td>{show.Sala}</td>
                  <td>{show.BoletosDisponibles}</td>
                  <td>{show.PeliculaID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal para crear un nuevo show */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <h3>Crear un nuevo Show</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Fecha:</label>
                <input
                  type="date"
                  name="Fecha"
                  value={newShow.Fecha}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Hora:</label>
                <input
                  type="time"
                  name="Hora"
                  value={newShow.Hora}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Sala:</label>
                <input
                  type="text"
                  name="Sala"
                  value={newShow.Sala}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Boletos Disponibles:</label>
                <input
                  type="number"
                  name="BoletosDisponibles"
                  value={newShow.BoletosDisponibles}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>PeliculaID:</label>
                <input
                  type="number"
                  name="PeliculaID"
                  value={newShow.PeliculaID}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <button type="submit">Crear Show</button>
                <button type="button" onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardCliente;
