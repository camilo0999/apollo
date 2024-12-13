import React from 'react';
import Sidebar from '../Componentes/Sidebar';
import DashboardComida from '../Componentes/DashboardComida';
import '../Estilos/Dashboard.css';

const AdminComidas = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <DashboardComida />
        </div>
    );
};

export default AdminComidas;
