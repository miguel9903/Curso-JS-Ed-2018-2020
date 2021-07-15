/* Ejercicio 09:

Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y
longitud de la palabra. */

let palabra = prompt('Ingresa una palabra: ').toLowerCase();
let consonantes = 0;
let vocales = 0;

for (let letra of palabra) {
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        vocales++;
    } else {
        consonantes++;
    }
}

console.log(`Longitud de la palabra: ${palabra.length}`);
console.log(`Cantidad de vocales: ${vocales}`);
console.log(`Cantidad de consonantes: ${consonantes}`);