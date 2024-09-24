"use strict";
//declaracion array y asignacion valores

let puntosEquipoJuan = [89, 12, 103];
let puntosEquipoMiguel = [116, 94, 123];
let puntosEquipoMaria = [97, 134, 105];

/* gana Juan
let puntosEquipoJuan = [89, 112, 183];
let puntosEquipoMiguel = [116, 94, 123];
let puntosEquipoMaria = [97, 134, 105];
*/
/*gana Miguel
let puntosEquipoJuan = [89, 12, 103];
let puntosEquipoMiguel = [116, 194, 123];
let puntosEquipoMaria = [97, 134, 105];
*/
/*empate
let puntosEquipoJuan = [89, 12, 103];
let puntosEquipoMiguel = [89, 10, 105];
let puntosEquipoMaria = [98, 18, 87];
*/
// funcion para calcular la media de puntos de cada equipo
// el parámetro puntuaciones será sustituido por el valor de cada array
function calcularMediaPuntos(puntuaciones){
    var i, acumulado = 0;
    for (i = 0; i < puntuaciones.length; i += 1) {
       acumulado += puntuaciones[i];
    }
    return acumulado/puntuaciones.length;
}

//paso por parámetro los puntos de cada equipo y asigno la media
let mediaEquipoJuan = calcularMediaPuntos(puntosEquipoJuan);
let mediaEquipoMiguel = calcularMediaPuntos(puntosEquipoMiguel);
let mediaEquipoMaria = calcularMediaPuntos(puntosEquipoMaria);

function mostrarEquipoGanador(mediaEquipoJuan, mediaEquipoMiguel, mediaEquipoMaria){
    if(mediaEquipoJuan > mediaEquipoMiguel && mediaEquipoJuan > mediaEquipoMaria){
        console.log(`El equipo de Juan es el ganador con una media ${mediaEquipoJuan.toFixed(2)} puntos.`);
    }else if(mediaEquipoMiguel > mediaEquipoJuan && mediaEquipoMiguel > mediaEquipoMaria){
        console.log(`El equipo de Miguel es el ganador con una media de ${mediaEquipoMiguel.toFixed(2)} puntos.`);
    }else if(mediaEquipoMaria > mediaEquipoJuan && mediaEquipoMaria > mediaEquipoMiguel){
        console.log(`El equipo de María es el ganador con una media ${mediaEquipoMaria.toFixed(0)} puntos.`);
    }else{
        console.log(`Hay empate entre los equipos. La puntuacion media del equipo de Juan es ${mediaEquipoJuan.toFixed(2)} puntos, la del equipo de Miguel ${mediaEquipoMiguel.toFixed(2)} puntos, y la del equipo de María ${mediaEquipoMaria.toFixed(0)} puntos.`)
    }
}
//muesto el equipo ganador o si hay empate
mostrarEquipoGanador(mediaEquipoJuan, mediaEquipoMiguel, mediaEquipoMaria);
