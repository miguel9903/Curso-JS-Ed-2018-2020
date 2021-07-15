/* 
Practica guiada POO

Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan 
a ese género usando un el método que devuelve la información
*/

class Libro {

    constructor(titulo, autor, anio, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
    }

    getInfoLibro() {
        return ` Titulo: ${this.titulo} \n Autor: ${this.autor} \n Año: ${this.anio} \n Género: ${this.genero}`;
    }
}

let libros = [];

for (let i = 1; i <= 3; i++) {

    let titulo = prompt(`Ingresa el titulo del libro ${i}: `);    
    while (titulo.length == 0) {
        titulo = prompt(`Ingresa el titulo del libro ${i}: `);  
    }

    let autor = prompt(`Ingresa el autor del libro ${i}: `);    
    while (autor.length == 0) {
        autor = prompt(`Ingresa el autor del libro ${i}: `);  
    }

    let anio = prompt(`Ingresa el año del libro ${i}: `);
    while(anio.length != 4 || isNaN(anio)) {
        anio = prompt(`Ingresa el año del libro ${i}: `);
    }
    anio = parseInt(anio);

    let genero = prompt(`Ingresa el género del libro ${i}: `).toLowerCase();
    while(genero != 'aventuras' && genero != 'terror' && genero != 'fantasía') {
        genero = prompt(`Ingresa el género del libro ${i}: `);
    }

    let libro = new Libro(titulo, autor, anio, genero);
    libros.push(libro);
}

mostrarLibros();
mostrarAutoresEnOrden();
mostrarLibrosPorGenero();

const mostrarLibros = () => {
    for(let libro of libros) {
        console.log(libro.getInfoLibro());
    }
}

const mostrarAutoresEnOrden = () => {
    let autores = [];
    for (let libro of libros) {
        autores.push(libro.autor);
    }
    autores.sort();
    console.log(autores);
}

const mostrarLibrosPorGenero = () => {
    let genero = prompt('Ingresa un genero: ').toLowerCase();
    console.log(`Informacion de los libros del género: ${genero}`);
    for (let libro of libros) {
        if(libro.genero == genero) {
            console.log(libro.getInfoLibro());
        }
    }
}

/*
function validarCampoVacio(campo) {
    if (campo.length == 0) return true
    else return false;
}

function validarValorNumerico(campo) {
    if(!isNaN(campo) && campo.length == 4) return true
    else return false;
}

function validarGenero(campo) {
    campo = campo.toLowerCase();
    if (campo == 'aventuras' || campo == 'terror' || campo == 'fantasía') return true
    else return false;   
}
*/