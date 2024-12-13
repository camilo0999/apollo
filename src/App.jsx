import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Cartelera from './Paginas/Cartelera';
import Pronto from './Paginas/Pronto';
import Comida from './Paginas/Comida';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import VerPelicula from './Paginas/VerPelicula';
import AdminInicio from './Paginas/AdminInicio';
import AdminComidas from './Paginas/AdminComidas';
import AdminReservas from './Paginas/AdminReservas';
import AdminCliente from './Paginas/AdminCliente';
import AdminShowTimes from './Paginas/AdminShowTimes';

function App() {
  const location = useLocation();

  // Define las rutas que no necesitan Navbar y Footer
  const noNavbarFooterRoutes = ['/admin', '/admin-comida', '/admin-reservas', '/admin-cliente', '/admin-show-times'];

  const shouldShowNavbarFooter = !noNavbarFooterRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Cartelera />} />
        <Route path="/pronto" element={<Pronto />} />
        <Route path="/comida" element={<Comida />} />
        <Route path="/ver-pelicula/:id" element={<VerPelicula />} />
        <Route path="/admin" element={<AdminInicio />} />
        <Route path="/admin-comida" element={<AdminComidas />} />
        <Route path="/admin-reservas" element={<AdminReservas />} />
        <Route path="/admin-cliente" element={<AdminCliente />} />
        <Route path="/admin-show-times" element={<AdminShowTimes />} />
      </Routes>
      {shouldShowNavbarFooter && <Footer />}
    </div>
  );
}

function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default RootApp;



