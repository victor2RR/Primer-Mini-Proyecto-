const API_URL = 'http://localhost:8080/api/calculadora';

export const sumar = async (a, b) => {
    const response = await fetch(`${API_URL}/suma?a=${a}&b=${b}`);
    if (!response.ok) {
        throw new Error('Error al realizar la operación');
    }
    return await response.json();
};

export const restar = async (a, b) => {
    const response = await fetch(`${API_URL}/resta?a=${a}&b=${b}`);
    if (!response.ok) {
        throw new Error('Error al realizar la operación');
    }
    return await response.json();
};

export const multiplicar = async (a, b) => {
    const response = await fetch(`${API_URL}/multiplicacion?a=${a}&b=${b}`);
    if (!response.ok) {
        throw new Error('Error al realizar la operación');
    }
    return await response.json();
};

export const dividir = async (a, b) => {
    const response = await fetch(`${API_URL}/division?a=${a}&b=${b}`);
    if (!response.ok) {
        throw new Error('Error al realizar la operación');
    }
    return await response.json();
};

export const obtenerHistorial = async () => {
    const response = await fetch(`${API_URL}/historial`);
    if (!response.ok) {
        throw new Error('Error al obtener el historial');
    }
    return await response.json();
};