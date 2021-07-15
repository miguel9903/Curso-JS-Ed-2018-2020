// DOM - Insertar y eliminar elementos

/*
    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia
    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)
    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)
    positions: 
        beforebegin - Antes de que empiece (hermano anterior)
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)
        afterend - después de que acabe (hermano siguiente)
    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const list = document.getElementById('list');
const newElement = document.createElement('li');
newElement.textContent = "I'm a new element";

//list.insertBefore(newElement, list.children[0]); 
/* newElement se va a colocar antes del hijo 0,
es decir, como primer hijo */

// list.children[0].insertAdjacentElement("beforebegin", newElement);

// list.replaceChild(newElement, list.children[1]);


/*
    DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like
    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente) 
        child.replaceWith(newChild)
*/

// list.children[0].before(newElement);
// list.prepend(newElement);
// list.append(newElement);
// list.children[0].after(newElement);

// list.children[0].replaceWith(newElement);
// document.getElementById('child-to-replace').replaceWith(newElement);

// list.after(list.cloneNode(true));

// list.remove();
list.removeChild(list.children[0]);


