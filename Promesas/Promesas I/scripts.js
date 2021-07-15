// Promesas I

console.log('Inicio');

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Se terminó el timeout');
    }, 2000);
});

promise
    .then(message => console.log(message))
    .catch(error => console.log(error));

console.log('Fin');