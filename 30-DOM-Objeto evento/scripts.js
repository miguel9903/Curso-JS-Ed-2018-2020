// Objeto evento

const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const gallery = document.getElementById('gallery');
const link = document.getElementById('link');

input.addEventListener('keyup', (e)=>{
    // console.log(input.value);
    // console.log(e);
    console.log(e.key);
})

/* addEventListener('click', (e)=>{
    console.log(e);
}) */

/* button.addEventListener('click', (e)=>{
    console.log(e.target);
}) */

gallery.addEventListener('click', (e)=>{
    // console.log(e.target.textContent);
     e.target.classList.add('blue');
})

form.addEventListener('submit', (e)=>{
    console.log('El formulario se ha enviado');
    e.preventDefault();
})

link.addEventListener('click', (e)=>{
    e.preventDefault();
    // button.click();
})

// form.submit();


button.addEventListener('click', ()=>{
    input.value = 'Has hecho un click';
})

button.click();