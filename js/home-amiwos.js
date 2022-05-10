const parchesNav = document.getElementById("parchesNav");
const homeDinero = document.getElementById("homeDinero");
const homeSubscripciones = document.getElementById("homeSubscripciones");

parchesNav.addEventListener('click', ()=>{

    window.location.href = "./parches-principal.html";
})

homeDinero.addEventListener('click', ()=>{

    window.location.href = "./home-mi-dinero.html";
})

homeSubscripciones.addEventListener('click', ()=>{

    window.location.href = "./home-subscripciones.html";
})