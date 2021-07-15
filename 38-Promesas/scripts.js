/* 
  Una promesa es un objeto con 2 callbacks internos. Para crear una promesa
  se sigue la siguiente sintaxis: 

    const promise = new Promise((resolve, reject) => {
        
    });

    resolve y reject son callbacks que ya trae preprogramada la promesa

    resolve --> Se ejecuta cuando todo salga bien, es decir, ha terminado la promesa
                y tenemos unos datos
    reject --> Se ejecuta cuando algo salga mal, es decir, ha terminado la promesa
                pero no tenemos datos, sino un error

*/


const users = [
    {
        id: 1,
        name: 'Dorian'
    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }
];

const emails = [
    {
        id: 1,
        email: 'dorian@gmail.com'
    },
    {
        id: 2,
        email: 'laura@gmail.com'
    }
];

const getUser = (id) => {
    const user = users.find(user => user.id == id);
    const promise = new Promise((resolve, reject) => {
        if(!user) reject(`Does not exist a user with id ${id}`);
        else resolve(user);
    });
    return promise;
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id);
    return promise = new Promise((resolve, reject) => {
        if(!email) reject(`${user.name} has not a email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        });
    });
}

getUser(2)
    .then(user => {
        return getEmail(user)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

// El código anterior se puede simplificar se la siguiente manera:
getUser(2)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Y este a la vez, de la siguiente manera:
getUser(2)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)

/* getUser(13)
    .then(user => console.log(user))
    .catch(err => console.log(err)); */

// console.log(getUser(1));

/*
    if(err) return console.log(err);
    getEmail(user, (err, res) => {
        if(err) return console.log(err);
        getEmail(user, (err, res) => {
            if(err) return console.log(err);
            getEmail(user, (err, res) => {
                if(err) return console.log(err);
                getEmail(user, (err, res) => {
                    if(err) return console.log(err);
                    console.log(res);
                });
            });
        });
    });
*/