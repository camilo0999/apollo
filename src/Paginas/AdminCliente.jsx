import React from 'react';
import Sidebar from '../Componentes/Sidebar';
import DashboarCliente from '../Componentes/DashboarCliente';
import '../Estilos/Dashboard.css';

const AdminCliente = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <DashboarCliente />
        </div>
    );
};

export default AdminCliente;