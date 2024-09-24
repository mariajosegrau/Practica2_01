"use strict";

// Función que recibe el nombre del producto, precio e impuesto
function calcularPrecioFinal(nombreProducto = "Producto genérico", precio = 100, impuesto = 21) {
    // Validar si precio e impuesto son números válidos
    if (isNaN(precio) || isNaN(impuesto)) {
        console.log("Error: El precio o el impuesto no son válidos.");
        return;
    }
    //convertir a number en caso que se introduzcan cadenas.
    precio = Number(precio);
    impuesto = Number(impuesto);
    // Calcular el precio final incluyendo impuestos
    let precioFinal = precio + (precio * (impuesto / 100));
    
    // Mostrar el nombre del producto y el precio final
    console.log(`Producto: ${nombreProducto}`);
    console.log(`Precio final: ${precioFinal.toFixed(2)} €`);
}

// Ejemplos de prueba:
// Con todos los valores
calcularPrecioFinal("Ordenador", 500, 21);  // Producto: Ordenador, Precio final: 605.00 €
// Con los valores por defecto
calcularPrecioFinal();  // Producto: Producto genérico, Precio final: 121.00 €
// con una cadena como precio
calcularPrecioFinal("telefono", "300", 10);
// Introduciendo una cadena en lugar de un número
calcularPrecioFinal("Teléfono", "no es número", 10);  // Error: El precio o el impuesto no son válidos.
