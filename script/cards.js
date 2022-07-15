const containermain = document.getElementById('container');
const containercards = document.createElement("div");
const titleskin = document.createElement("h2");
titleskin.classList.add("title__skin");
titleskin.textContent = "Habilidades";
containermain.appendChild(titleskin);
containermain.appendChild(containercards);

var json = [
    {
        "title": "Lenguejes de programación",
        "elements":[
            "Java",
            "Kotlin",
            "JavaScritp"
        ]
    },
    {
        "title": "Base de datos",
        "elements":[
            "SQL",
            "MONGODB",
            "FIREBASE"
        ]
    },
    {
        "title": "Herramientas",
        "elements":[
            "Android studio",
            "Visual studio",
            "Git"
        ]
    }
]

json.forEach(function(element){
    createElement(element.title, element.elements)
})



//create elements

function createElement(name, listelemento){
    const card = document.createElement("div");
    const leftcolumn = document.createElement("div");
    const rightcolumn = document.createElement("div");
    const div = document.createElement("div");
    const containerlist = document.createElement("div");

    const h6 = document.createElement("h6");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const listskin = document.createElement("ul");

    const dificult = document.createElement("h4");
    const medida = document.createElement("h6");

    h6.textContent = name;
    h2.textContent = "Github";
    img.src  = '/image/1DESIGN.png';
    
    dificult.textContent = "Dificultad";
    medida.textContent = "Media - baja";
    leftcolumn.appendChild(h6);
    leftcolumn.appendChild(h2);
    leftcolumn.appendChild(img);
    card.appendChild(leftcolumn);

    rightcolumn.appendChild(div);
    
    div.appendChild(dificult);
    div.appendChild(medida);
    card.appendChild(rightcolumn);
    listelemento.forEach(function(skin){
        console.log(skin)
        let myskin = document.createElement("li");
        myskin.textContent = skin;
        listskin.appendChild(myskin);
    })

    rightcolumn.appendChild(listskin)
    


    //add class
    containercards.classList.add("container__card");
    card.classList.add("card");
    leftcolumn.classList.add("left-column");
    rightcolumn.classList.add("right-column");

    

    containercards.appendChild(card);

}
