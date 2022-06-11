const button = document.getElementById('mainbutton');
const iconnavbar = document.getElementById('icon');
const buttonhome = document.getElementById("button_home");

//EVENTOS

button.addEventListener("click", reload);
iconnavbar.addEventListener('click',navbarbutton);
buttonhome.addEventListener('click',reload)
//FUNCIONES

function reload (){
    location.reload();
}

function navbarbutton(){
    $('ul').toggleClass('show');
}