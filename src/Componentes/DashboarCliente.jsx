import React, { useEffect, useState } from 'react';

const DashboardCliente = () => {
  const [clientes, setClientes] = useState([]); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/clientes');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setClientes(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div className="dashboard">
      <h2>Gestión de Cliente</h2>

      <div className="info-peliculas">
        <div>
          <p>Cantidad de películas registradas:</p>
          <span>20</span>
        </div>
        <div>
          <p>Cantidad de películas disponibles:</p>
          <span>10</span>
        </div>
        <div>
          <p>Cantidad de Usuarios registrados:</p>
          <span>10.929.210</span>
        </div>
      </div>

      <div className="dashboard-peliculas">
        <div>
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
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Número de Documento</th>
                <th>Correo</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index}>
                  <td>{cliente.Nombre}</td>
                  <td>{cliente.Apellido}</td>
                  <td>{cliente.NumeroDocumento}</td>
                  <td>{cliente.Correo}</td>
                  <td>{cliente.Telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardCliente;
