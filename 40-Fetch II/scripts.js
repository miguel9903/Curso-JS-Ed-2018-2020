// Fetch II

/*
    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parámetro.
        fetch(url, {
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
        headers: {
            cabeceras de información sobre lo que estamos enviando
            https://developer.mozilla.org/es/docs/Web/HTTP/Headers
        }
    })
   
     console.log(newPost)
     console.log(JSON.stringify(newPost))
*/

const button = document.getElementById('button');
const div = document.getElementById('div');

button.addEventListener('click', () => {

    const newPost = {
        title: "New post",
        body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam inventore illo totam eos vitae tempore quae, labore laudantium sint laborum atque. Fuga obcaecati officiis ipsam necessitatibus in dolorum, architecto modi.",
        userId: 1
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        div.textContent = JSON.stringify(data);
    })
});