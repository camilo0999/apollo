import React from 'react';

const DashboardReserva = () => {
    return (
        <div className="dashboard">
            <h2>Gestion de Reservas</h2>
            <div className='info-peliculas'>
                <div>
                    <p>Cantidad de peliculas registradas:</p>
                    <span>20</span>
                </div>
                <div>
                    <p>Cantidad de peliculas disponibles:</p>
                    <span>10</span>
                </div>
                <div>
                    <p>Cantidad de Usuarios registrados:</p>
                    <span>10.929.210</span>
                </div>
            </div>

            <div className="dashboard-peliculas">

                <div>
                    <button>Exportar PDF</button>
                    <button>Exportar Excel</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ReservaID</th>
                            <th>ClienteID</th>
                            <th>Fecha Reserva</th>
                            <th>Cantidad Boletos</th>
                            <th>Total Pago</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                       
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default DashboardReserva;
