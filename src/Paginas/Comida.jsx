import React from "react";
import Banner from "../Componentes/Banner";
import GaleriaComida from "../Componentes/GaleriaComida";

function Comida() {
    return (
        <div>
           <Banner />
            <div style={{ backgroundColor: 'white' }}>
                <h2>Comida</h2>
                <GaleriaComida />
            </div>
            
        </div>
    );
}

export default Comida;
