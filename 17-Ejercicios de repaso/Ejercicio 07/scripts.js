/* Ejercicio 07:

Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, 
ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número 
aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es
impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con 
su resultado con el formato 2 x 3 = 6 -el array de pares e impares */

let numeros = [12,32,24,29,35];
let pares = [];
let impares = [];

for (numero of numeros) {
    let aleatorio = Math.round(Math.random() * (10 - 1) + 1);
    numero = numero * aleatorio;
    if (numero % 2 == 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
    console.log(`${numero} x ${aleatorio} = ${numero * aleatorio}`);
}

console.log('Numeros pares: ');
console.log(pares);

console.log('Numeros impares: ');
console.log(impares);
