// Operador ternario

let num = 1;

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

(num % 2 == 0) ?
    (
        console.log(`${num} es par`), 
        console.log(`${num} es par`)
    )
:  console.log(`${num} es impar`);
