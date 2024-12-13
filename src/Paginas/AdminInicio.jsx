import React from 'react';
import Sidebar from '../Componentes/Sidebar';
import DashboardPeliculas from '../Componentes/DashboardPeliculas';
import '../Estilos/Dashboard.css';

const AdminInicio = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <DashboardPeliculas />
        </div>
    );
};

export default AdminInicio;
