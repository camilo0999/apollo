import React from 'react';
import Sidebar from '../Componentes/Sidebar';
import DashboardReserva from '../Componentes/DashboardReserva';
import '../Estilos/Dashboard.css';

const AdminReservas = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <DashboardReserva />
        </div>
    );
};

export default AdminReservas;
