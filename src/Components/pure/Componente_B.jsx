import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Contacto } from './Contacto_Class';

const Conectado = ({ Contacto }) => {
    
    const [ Conectado, setConectado ] = useState(true);

    const Cambiar_Estado = () => {
        setConectado(Conectado + false);
    }

    return(
        <div>
            <h2>
                Nombre: {Contacto.Nombre}
            </h2>
            <h2>
                Apellido: {Contacto.Apellido}
            </h2>
            <h2>
                Email: {Contacto.Email}
            </h2>
            <h3>
                Contacto: {Contacto.Conectado ? 'En Linea':'No Disponible' }
            </h3>
            <button onClick={Cambiar_Estado}>
                Cambiar Estado
            </button>
        </div>
    );
};

Conectado.propTypes = {
    Contacto: PropTypes.instanceOf(Contacto)
};

export default Conectado;