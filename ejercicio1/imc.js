"use strict";
// declaracion variables y asignación valores
let masaCorporalMarcos = 95;
let alturaMarcos = 1.80;
let masaCorporalJuan = 77;
let alturaJuan = 1.92;

// función para el cálculo del IMC
function calcularIMC(masa, altura){
    return masa / (altura ** 2);
}

//calcular IMC de Marcos y Juan, asigno valores a variables
let imcMarcos = calcularIMC(masaCorporalMarcos, alturaMarcos);
let imcJuan = calcularIMC(masaCorporalJuan, alturaJuan);
let marcosTieneMayorIMC = imcMarcos > imcJuan;

//muestro los resultados por consola
console.log(`El IMC de Marcos es ${imcMarcos}`);

//uso método .toFixed() para formatear la salida a 2 decimales
console.log(`El IMC de Juan es ${imcJuan.toFixed(2)}`);

//Uso operador ternario
console.log(`¿Tiene Marcos un IMC mayor que el de Juan? ${marcosTieneMayorIMC ? "Sí." : "No."}`);



