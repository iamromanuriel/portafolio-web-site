const foltercontainer = document.getElementById('folter');
foltercontainer.classList.add('card_container');

var proyects = [
    {
        "name":"loginfirebasemvvm",
        "url":"https://github.com/iamromanuriel/LoginFirebaseMVVM",
        "description":"De los primeras aplicaciones que constri, integra metodos de autenticación proporcionados por Firebase.",
        "elements":["Firebase", "Kotlin", "MVVM"]
    },
    {
        "name":"appnote",
        "url":"https://github.com/iamromanuriel/LoginFirebaseMVVM",
        "description":"Esta app permite crear, actualizar, eliminar y leer nuestras notas mediante la libreria Room, para el uso de base de datos SQLite.",
        "elements":["Room", "Kotlin", "corutines"]
    },
    {
        "name":"pokeapi",
        "url":"https://github.com/iamromanuriel/LoginFirebaseMVVM",
        "description":"Descubre las caracteristicas de tu pokemon favorito dentro de la app, con ayuda de la Api de PokeApi",
        "elements":["Retrofit", "Kotlin","PokeApi"]
    }
]


proyects.forEach(function(element){
    createElement(element)
})

function createElement(proyect){
    const card = document.createElement('div');
    const name = document.createElement('h3');
    const description = document.createElement('p');
    const url = document.createElement('a');
    const img = document.createElement('img');
    const imgicon = document.createElement('img');
    const containerElemets = document.createElement('div');

    name.textContent = proyect.name
    description.textContent = proyect.description
    url.setAttribute("href", proyect.url)
    img.src = "/image/bx-folder.svg"
    imgicon.src = "/image/icons8-external-link.svg"

    proyect.elements.forEach(function(e){
        let nameElement = document.createElement('p');
        nameElement.textContent = e;
        containerElemets.appendChild(nameElement);
        console.log(e)
    })

    card.appendChild(img)
    card.appendChild(name)
    card.appendChild(description)
    url.appendChild(imgicon)
    card.appendChild(url)    
    card.appendChild(containerElemets)
    foltercontainer.appendChild(card)

    imgicon.classList.add('iconElement');
    containerElemets.classList.add('container_element')
    card.classList.add('card_folder')

}