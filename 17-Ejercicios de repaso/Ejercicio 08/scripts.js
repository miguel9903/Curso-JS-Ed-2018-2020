/* Ejercicio 08:
 Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número
 no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del 
 módulo del número introducido entre 23
*/

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let num = parseInt(prompt('Ingrese un numero: '));

while (num < 0 || cantidadDigitos(num) > 8) {
    num = parseInt(prompt('Ingrese un numero: '));
}

console.log(`Posicion: ${num % 23}`);
console.log(`La letra correspondiente es: ${letras[num % 23]}`);

function cantidadDigitos(num) {
    let cantidad = 0;
    while (num > 0) {
        num = parseInt(num / 10);
        cantidad++;
    }
    return cantidad;
}