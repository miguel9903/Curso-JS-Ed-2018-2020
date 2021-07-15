// Spread operator

const numeros = [-12,2,3,23,43,2,3];
console.log(numeros);
console.log(...numeros);

// Enviar elementos en un array a una funcion
const sumarNumeros = (a,b,c) => {
    console.log(a + b + c);
}

const numerosASumar = [1,2,3];
sumarNumeros(...numerosASumar);

// Añadir un array a otro array
let usuarios = ['javier', 'david', 'rosa', 'juan', 'mercedes'];
let nuevosUsuarios = ['marta', 'jaime', 'laura'];

// usuarios.push(nuevosUsuarios[0], nuevosUsuarios[1], nuevosUsuarios[2]);
usuarios.push(...nuevosUsuarios);
// usuarios.unshift(...nuevosUsuarios);
// usuarios.splice(2,0,...nuevosUsuarios);
console.log(usuarios);

// Copiar arrays
let arr1 = [1,2,3,4,5];
let arr2 = [...arr1];
console.log(arr2);

// Concatenar arrays
let arr3 = [1,2,3,4,5];
let arr4 = [6,7,8];

// let arrConcat = arr3.concat(arr4);
let arrConcat = [...arr3, ...arr4];
console.log(arrConcat);

// Enviar un numero indefinido de argumentos a una función (parámetros REST)
const restParams = (...numeros) => {
    console.log(numeros);
}

// restParams();
restParams(1,2,3,4,5);

// Libreria Math

const numeros2 = [-12,2,3,23,43,2,3];
console.log(Math.max(...numeros2));
console.log(Math.min(...numeros2));

// Eliminar elementos duplicados de un array
console.log(new Set(numeros2));
console.log([...new Set(numeros2)]);
