import React from 'react';

const BotonOperacion = ({ operacion, onClick }) => {
    return (
        <button onClick={onClick}>
            {operacion}
        </button>
    );
};

export default BotonOperacion;