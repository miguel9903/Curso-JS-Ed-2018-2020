/* Ejercicio 04:

Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. 
Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/

let divisores = 0;
let num = parseInt(prompt('Ingresa un numero: '));

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        divisores++;
    }
}

if (divisores == 2) console.log(`${num} es primo`)
else console.log(`${num} no es primo`);