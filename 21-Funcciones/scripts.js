// Funciones en Javascript

function saludar() {
    console.log('Hola');
}

const saludar2 = () => console.log('Hola');
const saludarUsuario = (usuario) => console.log(`Hola ${usuario}`);

saludar();
saludar2();
saludarUsuario('Pepe');

/* const suma = (num1, num2) => {
    if (num1 == 2) {
        return num1 + num2;
    }
    console.log('Esto no se va a ejacutar si entra en el if');
    return num1;
} */

// console.log(suma(7,3));

const suma = (num1, num2) => num1 + num2;

let resultado = suma(7,3);
console.log(resultado);