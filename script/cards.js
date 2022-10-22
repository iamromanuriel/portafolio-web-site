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
        "url": "/image/iconcode.svg",
        "elements":[
            "Java",
            "Kotlin",
            "JavaScritp"
        ]
    },
    {
        "title": "Base de datos",
        "url": "/image/bxs-data.svg",
        "elements":[
            "SQL",
            "MONGODB",
            "FIREBASE"
        ]
    },
    {
        "title": "Herramientas",
        "url": "/image/icontools.svg",
        "elements":[
            "Android studio",
            "Visual studio",
            "Git"
        ]
    }
]

json.forEach(function(element){
    createElement(element.title,element.url, element.elements)
})



//create elements

function createElement(name,url, listelemento){
    const card = document.createElement("div");
    const leftcolumn = document.createElement("div");
    const rightcolumn = document.createElement("div");
    const div = document.createElement("div");

    const h6 = document.createElement("h6");
    const img = document.createElement("img");
    const listskin = document.createElement("ul");


    h6.textContent = name;
    img.src  = url;
    
    leftcolumn.appendChild(h6);
    leftcolumn.appendChild(img);
    card.appendChild(leftcolumn);

    rightcolumn.appendChild(div);
    
    card.appendChild(rightcolumn);

    listelemento.forEach(function(skin){
        let myskin = document.createElement("li");
        myskin.textContent = skin;
        listskin.appendChild(myskin);
    })

    rightcolumn.appendChild(listskin)
    


    //add class
    containercards.classList.add("container__card");
    card.classList.add("card");
    img.classList.add("iconcard");
    leftcolumn.classList.add("left-column");
    rightcolumn.classList.add("right-column");

    

    containercards.appendChild(card);

}
