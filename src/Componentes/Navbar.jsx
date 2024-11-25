import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './ Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../Estilos/Navbar.css';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState('login');
  const [menuActive, setMenuActive] = useState(false);

  const openModal = (type) => {
    setFormType(type);
    setShowModal(true);
    setMenuActive(false); // Cerrar el menú al abrir el modal
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="logo"
          />
          <h3>Teatro Apollo</h3>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${menuActive ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Cartelera
            </Link>
          </li>
          <li>
            <Link to="/comida" onClick={toggleMenu}>
              Comida
            </Link>
          </li>
          <li className="mobile-buttons">
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('register')}>Register</button>
          </li>
        </ul>
        <div className="navbar-buttons">
          <button onClick={() => openModal('login')}>Login</button>
          <button onClick={() => openModal('register')}>Register</button>
        </div>
      </div>
      {showModal && (
        <Modal show={showModal} onClose={closeModal}>
          {formType === 'login' ? <LoginForm /> : <RegisterForm />}
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;



