"use strict";

// Función que imprime el segundo parámetro tantas veces como indica el primer parámetro,
// multiplicando por 2 en cada iteración
function imprimirEneVecesMultiplicando(veces, valor) {
    const resultados = []; // Array para almacenar los resultados

    // Itero tantas veces como indica el parámetro veces  
    for (let i = 0; i < veces; i++) {
        resultados.push(valor); // Agrego el valor al array
        valor *= 2;  // Multiplica por 2 en cada iteración
    }
    // Imprime los resultados en una sola línea, separados por espacios
    console.log(resultados.join(" ")); 
}

// Llamada a la función. Debe imprimir 6 12 24 48
imprimirEneVecesMultiplicando(4, 6);
imprimirEneVecesMultiplicando(3, 6);