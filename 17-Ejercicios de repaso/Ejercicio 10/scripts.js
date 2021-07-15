/* Ejercicio 10: 

 Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un 
 color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
let color = prompt('Ingresa un color: ').toLowerCase();

if (colores.indexOf(color) != -1) {
    console.log(`El color ${color} se encuentra en el array`);
} else {
    console.log(`El color ${color} no se encuentra en el array`);
}