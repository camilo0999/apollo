import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Gestión de Cine</h2>
            <ul>
                <li><a href="/admin">Gestión de Películas</a></li>
                <li><a href="/admin-cliente">Clientes</a></li>
                <li><a href="/admin-reservas">Reservas</a></li>
                <li><a href="/admin-show-times">Horarios de las Películas</a></li>
                <li><a href="/admin-comida">Comidas</a></li>
                <li><a href="/">Salir</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
