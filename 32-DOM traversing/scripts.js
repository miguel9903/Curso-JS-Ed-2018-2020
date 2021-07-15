// DOM traversing

/* 
Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre
    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, 
    parentNode y parentElement devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devueleve el primer nodo hijo
    - firstElementChild - Devueleve el primer nodo elemento hijo
    - lastChild - Devueleve el último nodo hijo
    - lastElementChild - Devueleve el último nodo elemento hijo
    - hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene

Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousSibling - Devuelve el anterior nodo hermano
    - previousElementSibling - Devuelve el anterior nodo elemento hermano

Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla      con el selector, aún es experimental.
*/

const parent = document.getElementById('parent');

console.log(parent.parentNode);
console.log(parent.parentElement);
console.log(document.parentNode); /* Los nodos de tipo document o documentFragment no
tienen un nodo padre, por lo que se devuelve null */
console.log(parent.parentElement.parentElement);

/* Se recomienda usar las propiedaddes que no utilizan 'Node(s)', por ejemplo usar children
en vez de childNodes, ya que esta ultimo por ejemplo, devuelve todos los nodos hijos (incluyendo
nodos de tipo texto, saltos de linea, espacios en blanco, etc), en cambio, children solo devuelve 
nodos de tipo elemento (etiquetas HTML) */
console.log(parent.childNodes);
console.log(parent.children);
console.log(parent.children[2]);

console.log(parent.firstChild);
console.log(parent.firstElementChild);

console.log(parent.lastChild);
console.log(parent.lastElementChild);

console.log(parent.hasChildNodes());
console.log(parent.firstChild.hasChildNodes());

console.log(parent.nextSibling);
console.log(parent.nextElementSibling);
console.log(parent.parentElement.nextElementSibling);

console.log(parent.parentElement.previousSibling);
console.log(parent.parentElement.previousElementSibling);

