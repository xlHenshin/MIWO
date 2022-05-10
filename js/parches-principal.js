const homeNav = document.getElementById("homeNav");
const backBtn = document.getElementById("backBtn");
const crearPrimerParcheBtn = document.getElementById("crearPrimerParcheBtn");

homeNav.addEventListener('click', ()=>{

    window.location.href = "./home-mi-dinero.html";
})

crearPrimerParcheBtn.addEventListener('click', ()=>{

    console.log("SIRVO")
    window.location.href = "./crear-parches.html";
})