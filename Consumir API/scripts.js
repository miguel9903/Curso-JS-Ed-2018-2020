// Consumir una API con JS

const button = document.getElementById('button');
const tableBody = document.getElementById('table-body');

button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {

            console.log(users);
            const fragment = document.createDocumentFragment();

            for(const user of users) {

                const row = document.createElement('tr');

                const id = document.createElement('td');
                const name = document.createElement('td');
                const username = document.createElement('td');
                const email = document.createElement('td');
                const phone = document.createElement('td');

                id.textContent = user.id;
                name.textContent = user.name;
                username.textContent = user.username;
                email.textContent = user.email;
                phone.textContent = user.phone;

                row.appendChild(id);
                row.appendChild(name);
                row.appendChild(username);
                row.appendChild(email);
                row.appendChild(phone);

                fragment.appendChild(row);
            }
            tableBody.appendChild(fragment);
        });
})