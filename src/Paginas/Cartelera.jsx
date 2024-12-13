import React from 'react';
import Carrusel from '../Componentes/Carrusel';
import Galeria from '../Componentes/Galeria';


const Cartelera = () => {
  return (
    <div>
      <Carrusel />
      <h2 style={{ textAlign: 'center', marginTop: '20px'}}>En Cartelera</h2>
      <Galeria />
    </div>
  );
};

export default Cartelera;
