//AJAX - Objeto XMLHTTPRequest I

const button = document.getElementById('button');
const list = document.getElementById('list');

button.addEventListener('click', ()=>{

    let xhr;

    if(window.XMLHttpRequest) {
       xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.addEventListener('load', (data)=>{
        // console.log(JSON.parse(data.target.response));
        const dataJSON = JSON.parse(data.target.response);
        const fragment = document.createDocumentFragment();
        for(user of dataJSON) {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.id} - ${user.name}`;
            fragment.appendChild(listItem);
        }
        list.appendChild(fragment);
    })
    xhr.send();
})