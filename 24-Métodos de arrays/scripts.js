// Métodos de arrays

/* 
.from(iterable) - Convierte en array el elemento iterable  
*/
let palabra = 'Hola mundo';
console.log(Array.from(palabra));
console.log(palabra.split(''));

/*
sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le 
pasamos un callback los ordena en función del algoritmo que le pasemos.
*/
const letras = ['b','c','z','a','d'];
const numeros = [1,8,100,300,3];

console.log(letras);
console.log(letras.sort());

console.log(numeros.sort());
console.log(numeros.sort((a,b) => a-b)); // Ordena de menor a mayor
console.log(numeros.sort((a,b) => b-a)); // Ordena de mayor a menor

/*
.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada 
elemento del array.
*/

const numeros2 = [12,25,47,84,98];
numeros2.forEach((numero) => console.log(numero));
numeros2.forEach((numero,index) => 
    console.log(`${numero} está en la posición ${index}`));

/*
.some(callback) - Comprueba si al menos un elemento del array cumple la condición
.every(callback) - Comprueba si todos los elementos del array cumplen la condición
*/
const palabras = ['HTML','CSS','Javascript','PHP'];
console.log(palabras.some(palabra => palabra.length > 10));
console.log(palabras.every(palabra => palabra.length > 2));

/*
.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
*/
const numeros3 = [12,25,47,84,98];
//console.log(numeros2.map(numero => numero * 2));
numeros3.map(numero => console.log(numero * 2));

/* for (const numero of numeros3) {
    console.log(numero * 2);
} */

const numerosMult = numeros3.map(numero => numero * 2);
console.log(numerosMult);

/* 
.filter(callback) - Filtra todos los elementos del array que cumplan la condición y 
devuelve un nuevo array
*/
const numeros4 = [12,25,47,84,98];
const numerosFilter = numeros4.filter(numero => numero > 40);
console.log(numerosFilter);

/*
.reduce(callback) - Reduce todos los elementos del array a un único valor 
*/
const numeros5 = [5,2,3,1,8];
console.log(numeros5.reduce((a,b) => a+b));
console.log(numeros5.reduce((a,b) => a*b));

const usuarios = [
    {
        nombre: 'usuario 1',
        online: true
    },
    {
        nombre: 'usuario 2',
        online: true
    },
    {
        nombre: 'usuario 3',
        online: false
    },
    {
        nombre: 'usuario 4',
        online: true
    },
    {
        nombre: 'usuario 5',
        online: false
    },
    {
        nombre: 'usuario 1',
        online: true
    }
];

const usuariosOnline = usuarios.reduce((cont, usuario) => {
    if(usuario.online) cont++
    return cont;
},0);

console.log(`Hay ${usuariosOnline} usuarios conectados`);