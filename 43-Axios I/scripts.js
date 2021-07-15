// Libreria Axios I - Peticiones GET

const button = document.getElementById('button');
const list = document.getElementById('list');

button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res => {
        console.log(res.data);
        const fragment = document.createDocumentFragment();
        for(const user of res.data) {
            const itemList = document.createElement('li');
            itemList.textContent = `${user.id} - ${user.name}`;
            fragment.appendChild(itemList);
        }
        list.appendChild(fragment);
    }).catch(err => console.log(err))
})