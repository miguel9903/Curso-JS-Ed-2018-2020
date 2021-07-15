/* Ejercicio 02:

Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo 
y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita 
los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h 
círculo = π * r2 (pi * radio al cuadrado)
*/

let figura = parseInt(prompt('Elige una figura para calcular el área: 1 - Triángulo, 2 - Rectángulo, 3 - Circulo'));
let area, base, altura, radio;


switch (figura) {
    case 1:
        base = parseFloat(prompt('Ingresa la base: '));
        altura = parseFloat(prompt('Ingresa la altura: '));
        area = (base * altura) / 2;
        break;
    case 2:
        base = parseFloat(prompt('Ingresa la base: '));
        altura = parseFloat(prompt('Ingresa la altura: '));
        area = base * altura;
        break;
    case 3:
        radio = parseFloat(prompt('Ingresa el radio: '));
        area = Math.PI * Math.pow(radio,2);
        break;
    default:
        console.log('Figura no válida');
}
console.log(`Area de la figura: ${area}`);