import React from 'react';

const HistorialOperaciones = ({ historial }) => {
    return (
        <div>
            <h2>Historial de Operaciones</h2>
            <ul>
                {historial.map((operacion, index) => (
                    <li key={index}>{operacion}</li>
                ))}
            </ul>
        </div>
    );
};

export default HistorialOperaciones;