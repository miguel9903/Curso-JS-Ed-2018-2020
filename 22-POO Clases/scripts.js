// POO - Clases

class Persona {

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
    }

    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
    }
}

const juan = new Persona('Juan', 'Garcia', 25);
const marta = new Persona('Marta', 'Garcia', 35);

console.log(juan);
console.log(juan.saludar());