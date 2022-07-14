const button = document.getElementById('mainbutton');
const iconnavbar = document.getElementById('icon');
const buttonhome = document.getElementById("button_home");

//EVENTOS

button.addEventListener("click", reloader);
iconnavbar.addEventListener('click',navbarbutton);
buttonhome.addEventListener('click',reloader)
//FUNCIONES

function reloader (){
    location.reload();
}

function navbarbutton(){
    $('ul').toggleClass('show');
}