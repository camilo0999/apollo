import React, { useState } from 'react';
import '../Estilos/LoginForm.css'; // Asegúrate de importar el archivo CSS

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    try {
      const response = await fetch('https://teatro-apolo-back.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registro exitoso:', data);
        // Aquí puedes redirigir o mostrar un mensaje al usuario
      } else {
        const errorData = await response.json();
        console.error('Error al registrar:', errorData);
        // Manejar errores (mostrar mensaje de error al usuario)
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Registro de Usuario</h2>

        <div className="form-group">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            required
            className="form-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Apellido:</label>
          <input
            type="text"
            required
            className="form-input"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Telefono:</label>
          <input
            type="number"
            required
            className="form-input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Correo:</label>
          <input
            type="email"
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
            required
            className="form-input"
            name="password"
            value={formData.password}
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
