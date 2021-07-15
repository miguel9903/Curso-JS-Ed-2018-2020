// Objeto Math

/* Es un objeto estático, lo que significa que debemos usar su nombre
para utilizarlo */

/* PROPIEDADES
    Math.PI -- Math.E
*/
console.log(Math.PI);
console.log(Math.E);

/* MÉTODOS */
let num = 5;
console.log(Math.abs(num));

num = 5.3;
console.log(Math.ceil(num));

num = 5.9;
console.log(Math.floor(num));

console.log(Math.pow(2,3));

console.log(Math.random() * 100);

console.log(Math.round(Math.random() * 100));

/* Generar un numero entre un minimo y un maximo 
Math.random() * (max - min) + min */
console.log(Math.round(Math.random() * (10 - 5) + 5));

console.log(Math.sign(6));
console.log(Math.sign(-6));
console.log(Math.sign(0));

console.log(Math.sqrt(16));
console.log(Math.sqrt(2));
