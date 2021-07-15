// Condicionales en Javascript

/* Condicional simple */
let num = 0;

if (num > 0) console.log(`${num} es mayor que cero`);

if (num > 0) {
    console.log(`${num} es mayor que cero`);
    console.log(`${num} es mayor que cero`);
}

/* Condicional compuesto */
if (num > 0) {
    console.log(`${num} es mayor que cero`);
} else {
    console.log(`${num} es menor que cero`);
}

/* Condicional multiple */
if (num > 0) {
    console.log(`${num} es mayor que cero`);
} else if (num < 0) {
    console.log(`${num} es menor que cero`);
} else {
    console.log(`${num} es igual a cero`);
}


/* Operadores logicos */
let num1 = 1;
let num2 = 0;

/* if (num1 > 0 && num2 > 0) {
    console.log(`${num1} y ${num2} son mayores que cero`);
} */

if (num1 > 0) {
    if (num2 > 0) {
        console.log(`${num1} y ${num2} son mayores que cero`);
    } else if (num2 < 0) {
        console.log(`${num1} es mayor que cero y ${num2} es menor que cero`);    
    } else {
        console.log(`${num1} es mayor que cero y ${num2} es igual a cero`);   
    }
}

let word = 'Hola';

if (word.length > 4) {
    console.log(`${word} tiene mas de cuatro letras`);
} else if (word.length < 4) {
    console.log(`${word} tiene menos de cuatro letras`);
} else {
    console.log(`${word} tiene cuatro letras`);
}

let respuesta = true;

if (respuesta) console.log('Respuesta tiene el valor true');
if (!respuesta) console.log('Respuesta tiene el valor false');
