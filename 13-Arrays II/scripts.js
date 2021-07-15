// Arrays II

let numeros = [1,2,3,4,5];


// PROPIEDADES
/* 
    .length - devuelve el número de posiciones que contiene el array
*/
console.log(numeros.length);


// MÉTODOS
/*
    Array.isArray(variable a evaluar) - Devuelve true si la variable es un array.
*/
let numero = 4;
console.log(Array.isArray(numero));
console.log(Array.isArray(numeros));

/*
    Eliminar un elemento
        .shift() - Elimina el primer elemento del array y devuelve ese elemento
        .pop() - Elimina el último elemento de un array y devuelve ese elemento

    Estos dos métodos devuelven el elemento eliminado, por lo que se puede guardar
    en una variable
*/
console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.pop();
console.log(numeros);

/*
    Añadir elementos
        .push(element1, element2,...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.
        .unshift(element1, element2,...) - Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
*/
console.log(numeros);
let newLength = numeros.push(6);
numeros.push(1);
console.log(newLength);

let newLength2 = numeros.unshift(0);
console.log(newLength2); 
console.log(numeros);

/*    
    .indexOf() - Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/
console.log(numeros);
console.log(numeros.indexOf(2));
console.log(numeros.indexOf(8));

/* 
    .lastIndexOf() - Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/
console.log(numeros);
console.log(numeros.lastIndexOf(1));

/* 
    .reverse() - Invierte el orden de los elementos del array.
*/
console.log(numeros);
numeros.reverse();
console.log(numeros);

/*       
    .join('separador') - Devuelve un string con el separador que indiquemos, por defecto son comas 
*/
console.log(numeros);
console.log(numeros.join());
let arrayString = numeros.join('-');
console.log(arrayString);


/*     
    .splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        a - Indice de inicio
        b - Número de elementos (opcional)
        items - Elementos a añadir en el caso de que se añadan. (opcional)
*/
//console.log(numeros);
//numeros.splice(3);
//console.log(numeros);
//numeros.splice(2,2);
//console.log(numeros);
//numeros.splice(2,2,4,5,6);
//console.log(numeros);


/* 
    .slice(a,b) - Extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.
*/
let newNumbers = numeros.slice(2,4);
console.log(numeros);
console.log(newNumbers);