// DOM - Acceder a elementos/nodos 

 /*   
 document.getElementById('id') --> Permite acceder a un elemento a traves de sus id 
 */
const title = document.getElementById('title');
console.log(title);
//title.textContent = 'DOM - Accediendo a nodos';

/*    
document | element.querySelector('selectorCSS') --> Permire acceder al primer elemento que coincida con el
selector CSS 
*/
const paragraph = document.querySelector('.paragraph');
console.log(paragraph);

const span = paragraph.querySelector('span');
console.log(span);

const span2 = document.getElementById('title').querySelector('span');
console.log(span2);

/*   
 document | element.querySelectorAll() Permire acceder a todos los  elementos que coincida con el
selector CSS, devuelve un nodeList    
*/
const paragraphs = document.querySelectorAll('.paragraph');
console.log(paragraphs); 

paragraphs[0].style.color = 'red';
/* paragraphs.map(paragraph => paragraph.style.color = 'blue');  DEmostracion de que un nodeList
no es un array */

/* Convertir un nodeList en un array: Se puede hacer con el spread operator (no está
    completamente soprtado por los navegadores) o con Array.from() */
const paragraphsSpread = [...document.querySelectorAll('.paragraph')];
console.log(paragraphsSpread);
paragraphsSpread.map(paragraph => paragraph.style.color = 'green');

const paragraphsFrom = Array.from(document.querySelectorAll('.paragraph')); 
console.log(paragraphsFrom);
paragraphsFrom.map(paragraph => paragraph.style.color = 'dodgerblue');

