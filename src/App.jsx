import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cartelera from './Paginas/Cartelera';
import Pronto from './Paginas/Pronto';
import Comida from './Paginas/Comida';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import VerPelicula from './Paginas/VerPelicula';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cartelera />} />
          <Route path="/pronto" element={<Pronto />} />
          <Route path="/comida" element={<Comida />} />
          <Route path="/ver-pelicula/:id" element={<VerPelicula />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


