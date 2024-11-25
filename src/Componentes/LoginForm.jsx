import React, { useState } from 'react';
import '../Estilos/LoginForm.css';

const LoginForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(''); // Para manejar mensajes de éxito o error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    try {
      const response = await fetch('https://teatro-apolo-back.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Inicio de sesión exitoso:', data);

        // Muestra un mensaje de éxito
        setMessage('Inicio de sesión exitoso.');

        // Opcional: Guarda el token
        // localStorage.setItem('token', data.token);

        // Cierra la modal automáticamente después de un tiempo
        setTimeout(() => {
          closeModal(); // Llama a la función pasada por props para cerrar la modal
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error('Error al iniciar sesión:', errorData);

        // Muestra un mensaje de error
        setMessage('Error al iniciar sesión. Verifica tus credenciales.');
      }
    } catch (error) {
      console.error('Error en la conexión:', error);

      // Muestra un mensaje de error general
      setMessage('Error al conectar con el servidor. Inténtalo más tarde.');
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
            placeholder="Enter your email"
            required
            className="form-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="form-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
        {message && <p className="form-message">{message}</p>} {/* Mensaje dinámico */}
      </form>
    </div>
  );
};

export default LoginForm;
