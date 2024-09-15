import React, { useState } from 'react';
import { sumar, restar, multiplicar, dividir, obtenerHistorial } from '../services/CalculadoraService';

const Calculadora = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [resultado, setResultado] = useState(null);
    const [historial, setHistorial] = useState([]);

    const handleOperacion = async (operacion) => {
        let res;
        switch (operacion) {
            case 'suma':
                res = await sumar(a, b);
                break;
            case 'resta':
                res = await restar(a, b);
                break;
            case 'multiplicacion':
                res = await multiplicar(a, b);
                break;
            case 'division':
                res = await dividir(a, b);
                break;
            default:
                return;
        }
        setResultado(res);
        actualizarHistorial();
    };

    const actualizarHistorial = async () => {
        const historial = await obtenerHistorial();
        setHistorial(historial);
    };

    return (
        <div>
            <h1>Calculadora</h1>
            <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
            <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
            <button onClick={() => handleOperacion('suma')}>Sumar</button>
            <button onClick={() => handleOperacion('resta')}>Restar</button>
            <button onClick={() => handleOperacion('multiplicacion')}>Multiplicar</button>
            <button onClick={() => handleOperacion('division')}>Dividir</button>
            {resultado !== null && <h2>Resultado: {resultado}</h2>}
            <HistorialOperaciones historial={historial} />
        </div>
    );
};

export default Calculadora;