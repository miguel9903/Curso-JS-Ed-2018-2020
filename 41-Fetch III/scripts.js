// Fetch III - Lectura de archivos

const buttonImg = document.getElementById('buttonImg');
const buttonPDF = document.getElementById('buttonPDF');

buttonImg.addEventListener('click', () => {
    console.log('Hola');
    fetch('dog.jpg')
        .then(res => console.log(res))
})

