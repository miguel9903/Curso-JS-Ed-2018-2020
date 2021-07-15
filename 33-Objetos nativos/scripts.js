// Objetos nativos

const button = document.getElementById('button');

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

// window.alert('Hola');

/* addEventListener('click', (e)=>{
    console.log(e);
}) */

/* addEventListener('load', (e)=>{
    console.log(e);
}) */

/* addEventListener('scroll', (e)=>{
    console.log(e);
}) */

/* let name = prompt('Escribe tu nombre');
console.log(name); */

/* if(confirm('Acepta?')) {
    console.log('El usuario aceptó');
} else {
    console.log('El usuario no aceptó');
} */


/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

const persona = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 29,
    correo: 'juan@gmail.com'
}

console.log(button);
console.dir(button);
console.error('Error');

// console.log(persona);
console.table(persona);

let array = [1,2,3,4,5];
console.table(array);


/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/

console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash);

// location.reload();
// location.href = 'https://www.google.com/?hl=es';

/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    back()
    forward()
    go(n|-n)
    length
*/

/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

const date = new Date();
console.log(date.getDay());
console.log(date.getDate());
console.log(date);

/*
Timers
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

const saludar = () =>{
    console.log('Hola');
}

const timeout = setTimeout(() => {
    console.log('adios');
}, 3000);

/* button.addEventListener('click', ()=>{
     setTimeout(saludar, 2000);
     setTimeout(() => {
        console.log('adios');
     }, 3000); 
     clearTimeout(timeout);
}) */

/* const interval = setInterval(()=>{
    console.log('Ejecutando ...');
}, 2000);  */

// const interval = setInterval(saludar, 3000);

let cont = 0;

const interval = setInterval(() => {
   console.log(cont);
   cont++; 
}, 1000);

button.addEventListener('click', ()=>{
    clearInterval(interval);
})