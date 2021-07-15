// AJAX - Objeto XMLHTTPRequest II

const form = document.getElementById('form');
const characters = document.getElementById('characters');
const table = document.getElementById('table');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const characterID = characters.children[characters.selectedIndex].value;
    getData(characterID);
})

const getData = (id) => {
    
    let xhr;

    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(id == undefined) {
        xhr.open('GET', 'marvel.php');
        xhr.addEventListener('load', (data)=>{
            const dataJSON = JSON.parse(data.target.response);
            // console.log(dataJSON);
            const fragment = document.createDocumentFragment();
            for(const character of dataJSON) {
                const option = document.createElement('option');
                option.textContent = character.Name;
                option.setAttribute('value', character.ID);
                fragment.appendChild(option);
            }
            characters.appendChild(fragment);
        });
    } else {
        xhr.open('GET', `marvel.php?id=${id}`);
        xhr.addEventListener('load', (data)=>{

            const dataJSON = JSON.parse(data.target.response);
            const fragment = document.createDocumentFragment();

            for(const character of dataJSON) {

                const row = document.createElement('tr');

                const characterID = document.createElement('td');
                const characterName = document.createElement('td');
                const characterAlignment = document.createElement('td');
                const characterGender = document.createElement('td');
                const characterHometown = document.createElement('td');
                const characterFightingSkiils = document.createElement('td');

                characterID.textContent = character.ID; 
                characterName.textContent = character.Name;
                characterAlignment.textContent = character.Alignment;
                characterGender.textContent = character.Gender;
                characterHometown.textContent = character.Hometown;
                characterFightingSkiils.textContent = character.Fighting_Skills;

                row.appendChild(characterID);
                row.appendChild(characterName);
                row.appendChild(characterAlignment);
                row.appendChild(characterGender);
                row.appendChild(characterHometown);
                row.appendChild(characterFightingSkiils);
                fragment.appendChild(row);
            }

            if(table.children[1]) {
                table.removeChild(table.children[1]);   
            }
            table.appendChild(fragment);
        });
    }
    xhr.send(); 
}

getData();