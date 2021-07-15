// DOM Introducción

/* 
    .id --> Devuelve el id del elemento
    .textContent --> Devuelve el contenido del elemento (etiqueta html)
    .nodeType --> Devuelve el tipo de nodo:
        1 --> Elemento Node (Etiqueta HTML)
        3 --> Text Node
        8 --> Comment Node
    .nodeName --> Devuelve el nombre del elemento (Ej: H1)
    .childNodes
*/

const title = document.getElementById("title");
console.log(title.id);