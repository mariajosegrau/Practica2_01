"use strict";

// Array de facturas con los valores proporcionados
const facturas = [124, 48, 268];

// Función calcular la propina según valor
const calcularPropina = factura => {
  if (factura < 50) return factura * 0.2;
  if (factura <= 200) return factura * 0.15;
  return factura * 0.1;
};

// Crear arrays de propinas y montos finales
const propinas = facturas.map(calcularPropina);
const totales = facturas.map((factura, i) => factura + propinas[i]);

const mostrarResultados = (facturas, propinas, totales) => {
    facturas.forEach((factura, i) => {
      console.log(`La factura de importe ${factura}€ tiene una propina de ${propinas[i].toFixed(2)}€ y el total a pagar es ${totales[i].toFixed(2)}€.`);
    });
  };

// Llamar a la función para mostrar los resultados
mostrarResultados(facturas, propinas, totales);