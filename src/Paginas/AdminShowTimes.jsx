import React from 'react';
import Sidebar from '../Componentes/Sidebar';
import DashboardShowTime from '../Componentes/DashboardShowTime';
import '../Estilos/Dashboard.css';

const AdminShowTimes = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <DashboardShowTime />
        </div>
    );
};

export default AdminShowTimes;