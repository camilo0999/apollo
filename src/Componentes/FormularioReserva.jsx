import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FormularioReserva = () => {
  const { showID } = useParams(); // Obtener el ShowID de la URL
  const clienteID = localStorage.getItem('clientId'); // Obtener el ClienteID del localStorage

  const [cantidadBoletos, setCantidadBoletos] = useState(1);
  const [totalPago, setTotalPago] = useState(0); // Total del pago (puedes ajustarlo según el precio)
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Suponemos que el precio por boleto es 12500, lo puedes modificar o hacerlo dinámico
  const precioPorBoleto = 12500;

  // Calcular el total de pago cada vez que se cambie la cantidad de boletos
  useEffect(() => {
    setTotalPago(cantidadBoletos * precioPorBoleto);
  }, [cantidadBoletos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Validación de clienteID y showID
    if (!clienteID || !showID) {
      setMessage('Faltan datos necesarios para realizar la reserva.');
      setIsLoading(false);
      return;
    }

    const reservaData = {
      ClienteID: clienteID, // El ID del cliente
      ShowID: showID,       // El ID de la película tomado de la URL
      FechaReserva: new Date().toISOString(), // Fecha y hora actuales
      CantidadBoletos: cantidadBoletos,
      TotalPago: totalPago,   // El total de pago calculado
    };

    try {
      const response = await fetch('http://localhost:8080/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservaData), // Convertimos los datos en JSON
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Reserva exitosa! ID de Reserva: ${data.ReservaID}`);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || 'Algo salió mal, intentalo de nuevo.'}`);
      }
    } catch (error) {
      console.error('Error al realizar la reserva:', error);
      setMessage('Error al conectar con el servidor. Inténtalo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reserva tu Asiento</h2>
      
      <div>
        <label>Cantidad de Boletos:</label>
        <input
          type="number"
          min="1"
          value={cantidadBoletos}
          onChange={(e) => setCantidadBoletos(Number(e.target.value))}
          required
        />
      </div>

      <div>
        <p>Total a pagar: {totalPago} COP</p> {/* Mostrar el total de pago calculado */}
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Reservando...' : 'Reservar'}
      </button>

      {message && <p>{message}</p>} {/* Mostrar el mensaje de éxito o error */}
    </form>
  );
};

export default FormularioReserva;

