// Objetos en Javascript

const persona = {
    nombre: 'Alex',
    edad: 29,
    hijos: ['Paula', 'Lucia', 'Mario']
}

console.log(persona);

console.log(persona.nombre);
console.log(persona['nombre']);

for (const key in persona) {
    console.log(key);
}

for (const key in persona) {
    console.log(persona[key]);
}

for (hijo of persona.hijos) {
    console.log(hijo);
}

console.log(`Hola ${persona.nombre}, tienes ${persona.edad} y tus hijos son: ${persona.hijos.join()}`);