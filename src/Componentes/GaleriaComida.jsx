import React from 'react';
import Platos from '../Componentes/Platos';
import '../Estilos/GaleriaComida.css';
const comidas = [
    {
      nombre: 'Palomitas de Maíz',
      descripcion: 'Palomitas de maíz frescas y crujientes, con un toque de mantequilla derretida.',
      imagen: 'https://imgs.search.brave.com/Wf8yXPmwolnMkU_pu3rgLgU44K8yn8n5FK9NImeIneI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGUxMC5jb20ubXgv/cmVzaXplci92Mi9Z/V1lKVEs3UkJWRE5a/TTQ2Q1BKWE5ER0pR/TS5qcGc_YXV0aD0x/MWUzYjYyOGIwMDIx/ZThkNDRiMTQyMjVl/NjhiOTM0NDVmNjY1/NmViNDNlYzg1N2Uy/MjU1MWZjY2E1Mzc2/ZGIyJnNtYXJ0PXRy/dWUmaGVpZ2h0PTYy/MA',
      precio: '$4.50'
    },
    {
      nombre: 'Hot Dog',
      descripcion: 'Hot dog clásico con salchicha jugosa, acompañada de mostaza y ketchup.',
      imagen: 'https://imgs.search.brave.com/iqkrenP5qPc2VStnxxnYESJXIKh1z6LO4dxMauQegn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/MTc1MTc4L3Bob3Rv/L2NoaWxpLWNoZWVz/ZS1kb2cuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW9nOGt5/VkdReUpMMkpnVTU4/NkI1MWJsMGVRR1pn/WjNZTGVMdmU2WWNx/cnc9',
      precio: '$6.00'
    },
    {
      nombre: 'Nachos con Queso',
      descripcion: 'Crispantes nachos cubiertos con queso cheddar derretido y jalapeños.',
      imagen: 'https://imgs.search.brave.com/iK80rDX1K12FlM8lV3rtEa2JbdSZ_Bg23sHgkvy9j_E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9nYXJtYW5pYS5j/b20vYXJjaGl2b3Mv/MjAyMzA0L25hY2hv/cy1xdWVzbzMtWHhY/eDgwLmpwZw',
      precio: '$5.50'
    },
    {
      nombre: 'Refresco Grande',
      descripcion: 'Refresco de 600ml con hielo, disponible en varios sabores.',
      imagen: 'https://imgs.search.brave.com/4-d9FI9lOZKDvEQlo58_9taQls6OELWDWdnGRKosguI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg0LzY1LzYx/LzM2MF9GXzI4NDY1/NjE3NV9HNlNsR1RC/Vmw0cGc4b1hoNmpy/ODZjT21LVVpqZnJ5/bS5qcGc',
      precio: '$3.00'
    },
    {
      nombre: 'Pizza Individual',
      descripcion: 'Pizza de masa delgada con tomate, mozzarella y tu opción de toppings.',
      imagen: 'https://imgs.search.brave.com/ild7m0464EarDAuB-CwrV8FMmMNK19JIYjp227f8wkE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/OTcxNTc5OS9waG90/by9waXp6YS13aXRo/LWhhbS1hbmQtY2hl/ZXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ncFJNVmZx/eTQ0YWc0VGtyb1Q4/V0VlclJvdGxmS2hl/WlF1NmtRa2RobnhR/PQ',
      precio: '$8.00'
    },
    {
      nombre: 'Helado de Chocolate',
      descripcion: 'Helado cremoso de chocolate, ideal para el postre.',
      imagen: 'https://imgs.search.brave.com/UTVJbkhoTdQZxre3PNlZ--MPhuLQnH-lE56nYntr8So/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZXRhc2RlcmVj/aHVwZXRlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/Ny9zaHV0dGVyc3Rv/Y2tfMTAxMDI0ODM1/MS5qcGc',
      precio: '$4.00'
    },
    {
      nombre: 'Tacos al Pastor',
      descripcion: 'Tacos de carne al pastor con cebolla, cilantro y salsa de piña.',
      imagen: 'https://imgs.search.brave.com/avS69C_y9yPruLbBaLIpQUFRvs6whk0GatqvYW3RxFw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pYW1h/Zm9vZGJsb2cuYi1j/ZG4ubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA1L2Fs/LXBhc3Rvci0zNDk0/LmpwZw',
      precio: '$5.00'
    },
    {
      nombre: 'Burguer Doble Carne',
      descripcion: 'Hamburguesa doble con carne jugosa, queso, lechuga, tomate y mayonesa.',
      imagen: 'https://imgs.search.brave.com/TwQ8dsqHa5zRpfNzW1JL3VRb85bD1EAF3MOB9Gl4N9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXZp/cm1lam9yLm14L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzEw/L2NvbW8tcHJlcGFy/YXItY2FybmUtcGFy/YS1oYW1idXJndWVz/YS5qcGc',
      precio: '$9.50'
    },
    {
      nombre: 'Aros de Cebolla',
      descripcion: 'Aros de cebolla empanizados y fritos, perfectos para acompañar.',
      imagen: 'https://imgs.search.brave.com/Z3V5BmZMVoz6oOu6Y74G1L94_-78Yt0uAyrH03f0fhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF1bGluYWNvY2lu/YS5uZXQvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMTIvY2Vi/b2xsYS1mcml0YS5q/cGc',
      precio: '$4.00'
    },
    {
      nombre: 'Smoothie de Frutas',
      descripcion: 'Bebida refrescante de frutas naturales, perfecta para un día caluroso.',
      imagen: 'https://imgs.search.brave.com/gMVVxxj3ifMXtqnClfwI5Y0tsQcdXfs08Zx8Unoh5gM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbW9v/dGhpZXMuY29tLmVz/L2ltZy9zbW9vdGhp/ZS1kZS1mcnV0b3Mt/cm9qb3MtbWluLTgw/OS5qcGc',
      precio: '$5.00'
    }
  ];
  

const GaleriaComida = () => {
  return (
    <div className="galeria-comida">
      {comidas.map((comida, index) => (
        <Platos
          key={index}
          nombre={comida.nombre}
          descripcion={comida.descripcion}
          imagen={comida.imagen}
          precio={comida.precio}
        />
      ))}
    </div>
  );
};

export default GaleriaComida;
