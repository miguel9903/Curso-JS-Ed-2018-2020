// DOM - Crear e insertar elementos

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const daysSelect = document.getElementById('daysSelect');

/* 
    Crear un elemento: document.createElement(element)

    Escribir texto en un elemento: element.textContent = texto

    Escribir HTML en un elemento: element.innerHTML = código HTML

    Añadir un elemento al DOM: parent.appendChild(element)

    Fragmentos de código: document.createDocumentFragment()
*/

// const itemList = document.createElement('li');
// itemList.textContent = 'Lunes';
// console.log(itemList);

//daysList.appendChild(itemList);
// title.textContent = 'DOM - <span>Crear e insertar elementos I</span>';
title.innerHTML = 'DOM - <span>Crear e insertar elementos I</span>';

const fragment = document.createDocumentFragment();

for (const day of days) {
    // daysList.innerHTML += `<li>${day}</li>`; Forma incorrecta de hacerlo!!!
    const itemList = document.createElement('li');
    itemList.textContent = day;
    fragment.appendChild(itemList);
}

console.log(fragment);
daysList.appendChild(fragment);

const fragment2 = document.createDocumentFragment();

for (const day of days) {
    const optionList = document.createElement('option');
    optionList.textContent = day;
    optionList.value = day.toLocaleLowerCase();
    fragment2.appendChild(optionList);
}

daysSelect.appendChild(fragment2);