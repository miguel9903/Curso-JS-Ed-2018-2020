/* Ejercicio 06:

Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su 
suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos 
números se han introducido */

let suma = 0;
let contador = 0;

while (suma < 50) {
    let num = parseInt(prompt('Ingresa un numero: '));
    suma += num;
    contador++;
}

console.log(`Total acumulado: ${suma}`);
console.log(`Numeros ingresados: ${contador}`);