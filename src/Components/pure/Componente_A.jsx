import React, { useState } from "react";
import { Contacto } from './Contacto_Class';
import Conectado from "./Componente_B";
import PropTypes from 'prop-types';

const Componente_A = () => {
    const defaultContacto = new Contacto('Tomas','Rodriguez','tomasrodriguez.epet20@gmail.com',true);

    
    return(
        <div>
            <div>
                <h1>Contacto</h1>
            </div>
            <Conectado Contacto={defaultContacto}></Conectado>
        </div>
    );
};

Componente_A.propTypes = {
    Nombre: PropTypes.string,
    Apellido: PropTypes.string,
    Email: PropTypes.string,
    Conectado: PropTypes.bool
};

export default Componente_A;