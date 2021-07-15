/* Ejercicio 05:

 Escriba un programa que pida un número entero mayor que cero y calcule su factorial. 
 El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.*/

 let factorial = 1;

 let num = parseInt(prompt('Ingresa un numero entero'));

 while (isNaN(num)) {
    num = parseInt(prompt('Ingresa solo valores numéricos'));
 }

 while (num <= 0) {
    num = parseInt(prompt('Ingresa un numero entero'));
 }

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(`El factorial de ${num} es ${factorial}`);