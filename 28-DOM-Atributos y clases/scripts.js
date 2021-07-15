// Atributos desde Javascript

const title = document.getElementById('title');
const input = document.getElementById('name');

/*
   Atributos:
        element.getAttribute('attribute')
        element.setAttribute('attribute', value)
*/
console.log(input.getAttribute('type'));
// input.setAttribute('type', 'number');

/*
    Clases:
        element.classList.add('class','class',...)
        element.classList.remove('class','class',...)
        element.classList.contains('class')
        element.classList.replace('oldClass', newClass)
        element.classList.toggle('class'[,force])
*/

title.classList.add('main-title', 'other-title');

title.classList.remove('other-title');

if(title.classList.contains('title')) console.log('Contiene la clase title')
else console.log('No contiene la clase title');

title.classList.replace('title', 'new-title');

/* 
    Atrubutos directos
        id
        value
*/

console.log(title.id);
console.log(title.textContent);
console.log(title.innerHTML);
console.log(input.value);
console.log(input.value.length);

console.log(title);
console.log(input);

