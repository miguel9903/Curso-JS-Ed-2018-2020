// Libreria Axios I - Peticiones GET

const button = document.getElementById('button');
const list = document.getElementById('list');

button.addEventListener('click', () => {
   axios({
       method: 'POST',
       url: 'https://jsonplaceholder.typicode.com/posts',
       data: {
            title: "New post",
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam inventore illo totam eos vitae tempore quae, labore laudantium sint laborum atque. Fuga obcaecati officiis ipsam necessitatibus in dolorum, architecto modi.",
            userId: 1
        }
   }).then(res => console.log(res.data))
     .catch(err => console.log(err))
})