// Async/await

const getName =  async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dorian');
        }, 1500);
    })
}

// console.log(getName());
/* getName()
    .then(name => console.log(name)) */

const sayHello = async () => {
    const name = await getName();
    return `Hello ${name}`;
}

sayHello().then(res => console.log(res));