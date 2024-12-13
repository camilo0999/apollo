import React, { useState } from 'react';
import '../Estilos/LoginForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Apellido: '',
    Telefono: '',
    Correo: '',
    Contraseña: '',
    FechaNacimiento: '',
    NumeroDocumento: ''
  });

  const [message, setMessage] = useState(''); // Estado para mensajes de éxito/error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Registro exitoso. ¡Bienvenido!');
        console.log('Registro exitoso:', data);
        setFormData({
          Nombre: '',
          Apellido: '',
          Telefono: '',
          Correo: '',
          Contraseña: '',
          FechaNacimiento: '',
          NumeroDocumento: ''
        });
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || 'No se pudo registrar'}`);
        console.error('Error al registrar:', errorData);
      }
    } catch (error) {
      setMessage('Error en la conexión. Inténtalo más tarde.');
      console.error('Error en la conexión:', error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Registro de Usuario</h2>

        {message && <p className="form-message">{message}</p>}

        <div className="form-group">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            required
            className="form-input"
            name="Nombre"
            value={formData.Nombre}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Apellido:</label>
          <input
            type="text"
            required
            className="form-input"
            name="Apellido"
            value={formData.Apellido}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Documento:</label>
          <input
            type="number"
            required
            className="form-input"
            name="NumeroDocumento"
            value={formData.NumeroDocumento}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Teléfono:</label>
          <input
            type="number"
            required
            className="form-input"
            name="Telefono"
            value={formData.Telefono}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Correo:</label>
          <input
            type="email"
            required
            className="form-input"
            name="Correo"
            value={formData.Correo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            required
            className="form-input"
            name="Contraseña"
            value={formData.Contraseña}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Fecha de nacimiento:</label>
          <input
            type="date"
            required
            className="form-input"
            name="FechaNacimiento"
            value={formData.FechaNacimiento}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="form-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
