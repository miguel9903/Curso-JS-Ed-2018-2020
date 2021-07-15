// Destructuring

/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

const person = {
    name: 'Juan',
    age: 32,
    email: 'juan@gmail.com'
}

// Forma tradcional
/* const name = person.name;
const age = person.age;
const email = person.email; */

// Destructuring
const {name, age, email} = person;
const {name: nombre, age: edad, email: correo} = person;

console.log(name, age, email);
console.log(nombre, edad, correo);

const numbers = [1,2,3,4];

const [a,b,terceraPos] = numbers;
console.log(terceraPos);

const printPerson = ({name}) => {
    console.log(name);
}

const printPerson2 = ({name: nombre}) => {
    console.log(nombre);
}

printPerson(person);
printPerson2(person);


const getUsers = async () => {
    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users'); 
    console.log(users);
}

getUsers();