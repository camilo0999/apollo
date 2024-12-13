import React, { useState, useEffect } from 'react';

const DashboardComida = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Precio: '',
    Descripcion: '',
    Imagenes: ''
  });

  const [message, setMessage] = useState(''); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comidas, setComidas] = useState([]); 

  useEffect(() => {
    // Función para obtener las comidas desde la API
    const fetchComidas = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/comidas');
        if (response.ok) {
          const data = await response.json();
          setComidas(data); // Asignar las comidas a nuestro estado
        } else {
          setMessage('No se pudo cargar las comidas.');
        }
      } catch (error) {
        setMessage('Error en la conexión. Inténtalo más tarde.');
      }
    };

    fetchComidas(); 
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/comidas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Comida registrada exitosamente!');
        setFormData({
          Nombre: '',
          Precio: '',
          Descripcion: '',
          Imagenes: ''
        });
        setIsModalOpen(false); // Cierra el modal
        // Volver a obtener las comidas después de agregar una nueva
        const data = await response.json();
        setComidas((prevComidas) => [...prevComidas, data]); // Añadir la comida recién registrada a la lista
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || 'No se pudo registrar la comida'}`);
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
      <h2>Gestión de Comidas</h2>
      <div className="info-peliculas">
        <div>
          <p>Cantidad de comidas registradas:</p>
          <span>{comidas.length}</span>
        </div>
      </div>

      <div className="dashboard-peliculas">
        <div>
          <button onClick={toggleModal}>Agregar Comida</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
             
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {comidas.map((comida) => (
            <tr key={comida.ComidaID}>
                <td>
                <img src={comida.Imagenes} alt={`Imagen de ${comida.Nombre}`} />
                </td>
                <td>{comida.Nombre}</td>
                <td>{comida.Precio}</td>
                <td>{comida.Descripcion}</td>
                
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
              <h3 className="modal-title">Registrar Comida</h3>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="Nombre"
                  placeholder="Ingrese el nombre"
                  value={formData.Nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Precio:</label>
                <input
                  type="number"
                  name="Precio"
                  placeholder="Ingrese el precio"
                  value={formData.Precio}
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

export default DashboardComida;
