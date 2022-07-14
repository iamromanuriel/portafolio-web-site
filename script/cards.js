const containermain = document.getElementById('container');

var json = [
    {
        "title": "Lengueje de programacion",
        "elements":[
            "Java",
            "Kotlin",
            "JavaScritp"
        ]
    },
    {
        "title": "Base da datos",
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
    createElement(element.title)
})



//create elements

function createElement(name){
    const card = document.createElement("div");
    const leftcolumn = document.createElement("div");
    const rightcolumn = document.createElement("div");
    const div = document.createElement("div");

    const h6 = document.createElement("h6");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");

    const dificult = document.createElement("h4");
    const medida = document.createElement("h6");
    const aprende = document.createElement("h2");
    const parrafo = document.createElement("p");

    h6.textContent = "Control de versiones";
    h2.textContent = "Github";
    img.src  = '/image/1DESIGN.png';
    
    dificult.textContent = name;
    medida.textContent = "Media - baja";
    aprende.textContent = "Aprende Github en semanas";
    parrafo.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fuga quis suscipit nemo, et cum neque? Veritatis consequuntur laborum eos!";

    leftcolumn.appendChild(h6);
    leftcolumn.appendChild(h2);
    leftcolumn.appendChild(img);
    card.appendChild(leftcolumn);

    rightcolumn.appendChild(div);
    
    div.appendChild(dificult);
    div.appendChild(medida);
    div.appendChild(aprende);
    div.appendChild(parrafo);
    card.appendChild(rightcolumn);
    //add class
    containermain.classList.add("container");
    card.classList.add("card");
    leftcolumn.classList.add("left-column");
    rightcolumn.classList.add("right-column");

    containermain.appendChild(card);

    containermain.classList.add("container");
}
