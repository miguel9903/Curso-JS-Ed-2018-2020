// Strings en Javascript

let cadena = 'Hola mundo';

/* PROPIEDADES: Son las caracteristicas que tiene una cadena 
por el hecho de ser una cadena */

// length --> Devuelve la longitud de la cadena
 console.log(cadena.length);



/* MÉTODOS: Es todo lo que la cadena puede hacer. Todos los 
métodos devuelven una cadena nueva. La cadena original no 
será modificada*/

/* toUpperCase() --> Devuelve la cadena en mayúsculas */
console.log(cadena.toUpperCase());
console.log(cadena);

let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);

/* toLowerCase() --> Devuelve la cadena en minúsculas */
console.log(cadena.toLowerCase());

/* indexOf(string) --> Devuelve la posición en la que se 
encuentra el string. Devuelve la primera coincidencia. 
Si no lo encuentra, devuelve -1*/
console.log(cadena.indexOf('Hola'));
console.log(cadena.indexOf('o'));
console.log(cadena.indexOf('z'));

/* replace(valor_a_buscar, valor_nuevo) --> Reeemplaza el valor
de cadena que le digamos y pone el valor nuevo */
console.log(cadena.replace('mundo', 'alumnos'));

/* substring(inicio, [,fin]) --> Extrae los caracteres desde el
inicio hasta el final (el final no se incluye). Si no se incluye
fin (opcional), extrae hasta el final */
console.log(cadena.substring(3));
console.log(cadena.substring(3,7));

/* slice(inicio, [,fin]) --> Igual que substring(), pero 
admite valores negativos. Si ponemos valores negativos,
empezará desde atras.  Si no se incluye fin (opcional), 
extrae hasta el final */
console.log(cadena.slice(-3));
console.log(cadena.slice(2));
console.log(cadena.slice(0,-6));

/* trim() --> Elimina los espacios al principio y al final
de una cadena */
let cadena2 = '   Hola, estamos trabajando con cadenas en js   ';
console.log(cadena2);
console.log(cadena2.trim());


/* ---------------------- ES6 -------------------------- */

/* stratsWith(valor, [,inicio]) --> Sirve para saber si la cadena
empieza por ese valor. Devuelve true o false */
console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('m', 5));

/* endsWith(valor, [,longitud]) --> Sirve para saber si la cadena
termina por ese valor. Devuelve true o false */
console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a', 4));
console.log(cadena.endsWith('n', 8));
console.log(cadena.endsWith('mundo'));

/* includes(valor, [,inicio]) --> Igual que indexOF(), pero
devuelve true o false */
console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));
console.log(cadena.includes('a',2));

/* repeat(valor) --> Repite el string el numero de veces que
le indiquemos */
let cadena3 = 'Hola';
console.log(cadena3.repeat(3));
console.log('r'.repeat(10));

/* Template Strings */
let nombre = 'Juan';
let apellido = 'Gomez';
let edad = 32;

console.log('Hola, ' + nombre + ' ' + apellido + ', tienes ' + edad + ' años');
console.log(`Hola, ${nombre} ${apellido}, tienes ${edad} años`);
console.log(`Hola, ${nombre} ${apellido}, el año que viene tendrás ${edad + 1} años`);