// Eventos de ratón y teclado

/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón
Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');

button.addEventListener('click', ()=>{
    console.log('click')
});

button.addEventListener('dblclick', ()=>{
    console.log('Double click');
});

box.addEventListener('mouseenter', ()=>{
    // box.style.border = '2px solid green';
    box.classList.replace('green', 'red');
});

box.addEventListener('mouseleave', ()=>{
    // box.style.border = '2px solid blue';
    box.classList.replace('red', 'green');
})

box.addEventListener('mousedown', ()=>{
    console.log('Haz pulsado en la caja');
})

box.addEventListener('mouseup', ()=>{
    console.log('Has soltado el botón izquierado en la caja');
})

box.addEventListener('mousemove', ()=>{
    console.log('Estas moviendo el ratón en la caja');
})

input.addEventListener('keydown', ()=>{
    console.log('Has pulsado una tecla');
})

input.addEventListener('keyup', ()=>{
    console.log('Has soltado una tecla');
})

input.addEventListener('keypress', ()=>{
    console.log('Estas pulsando una tecla');
})