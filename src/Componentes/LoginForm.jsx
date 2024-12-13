import React, { useState } from 'react';
import '../Estilos/LoginForm.css';

const LoginForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    correo: '', // Cambié 'correo' por 'email' para coincidir con el campo input
    password: '',
  });

  const [message, setMessage] = useState(''); // Para manejar mensajes de éxito o error
  const [isLoading, setIsLoading] = useState(false); // Para mostrar un estado de carga mientras esperamos la respuesta de la API

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    setIsLoading(true); // Inicia el estado de carga
    setMessage(''); // Resetea el mensaje antes de hacer la petición

    try {
      // Enviar las credenciales a la API de login
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Inicio de sesión exitoso:', data);

        // Obtiene el token y el id de la respuesta
        const { token, id } = data; // Desestructuramos el token y el id

        // Guardar el token y el id en localStorage
        localStorage.setItem('token', token);  // Guardamos el token
        localStorage.setItem('clientId', id);  // Guardamos el id del cliente

        // Muestra un mensaje de éxito
        setMessage('Inicio de sesión exitoso y datos guardados.');

        // Opcional: Cierra la modal automáticamente después de un tiempo
        setTimeout(() => {
          closeModal(); // Llama a la función pasada por props para cerrar la modal
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error('Error al iniciar sesión:', errorData);

        // Muestra un mensaje de error con la descripción del error
        setMessage(errorData.message || 'Error al iniciar sesión. Verifica tus credenciales.');
      }
    } catch (error) {
      console.error('Error en la conexión:', error);

      // Muestra un mensaje de error general
      setMessage('Error al conectar con el servidor. Inténtalo más tarde.');
    } finally {
      setIsLoading(false); // Termina el estado de carga
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-image-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Login Illustration"
            className="login-image"
          />
        </div>
        <h2 className="login-title">Iniciar Sesión</h2>
        <div className="form-group">
          <label className="form-label">Correo:</label>
          <input
            type="email"
            placeholder="Introduce tu correo"
            required
            className="form-input"
            name="correo"  // Cambié 'email' a 'correo' para que coincida con el estado
            value={formData.correo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            placeholder="Introduce tu contraseña"
            required
            className="form-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-button" disabled={isLoading}>
          {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </button>
        {message && <p className="form-message">{message}</p>} {/* Mensaje dinámico */}
      </form>
    </div>
  );
};

export default LoginForm;
