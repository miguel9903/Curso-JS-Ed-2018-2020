// Web storage

/*
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:

            - sessionStorage mantiene un área de almacenamiento separada para cada origen que está disponible 
              mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de 
              página y restablecimientos).
            - localStorage hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.

        Ambos funcionan con clave:valor y tienen dos métodos fundamentales setItem() para asignar una clave:valor 
        y getItem() que recibe como parámetro la clave de la que quieremos obtener el valor.

       if(localStorage) --> Preguntar si localstorage existe (en caso de trabajar con navegadores antiguos)

*/

const form = document.getElementById('form');
const keys = document.getElementById('keys');
const infoValue = document.getElementById('infoValue');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    /* const person = {
        name: 'Juan',
        email: 'juan@gmail.com'
    }
    
    sessionStorage.setItem('name', 'Juan');
    sessionStorage.setItem('person', JSON.stringify(person)); */

    sessionStorage.setItem(form.key.value, form.value.value);

    const option = document.createElement('option');
    option.value = sessionStorage.getItem(form.key.value);
    option.textContent = form.key.value;
    keys.appendChild(option);
    form.reset();
})


keys.addEventListener('change', () => {
    // infoValue.textContent = keys.children[keys.selectedIndex].value;
    infoValue.textContent = sessionStorage.getItem(keys.children[keys.selectedIndex].textContent);
    // console.log(keys.children[keys.selectedIndex].textContent);
})

const cargarSelect = () => {
   if(sessionStorage.length > 0) {
        for(let i = 0; i < sessionStorage.length; i++) {
           const option = document.createElement('option');
           option.value = sessionStorage.getItem(sessionStorage.key(i));
           option.textContent = sessionStorage.key(i);
           keys.appendChild(option);
        }
   }
}

cargarSelect();
// sessionStorage.clear();
// sessionStorage.removeItem('name');