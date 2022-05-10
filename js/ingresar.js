
import { usuarios } from "../utils/app.js";

const celularLogin = document.getElementById("celularLogin");
const claveLogin = document.getElementById("claveLogin");
const ingresarLogin = document.getElementById("ingresarLogin");
const signUpBtn = document.getElementById("signup");

ingresarLogin.addEventListener('click', (e) => {

    let celular = celularLogin.value;
    let clave = claveLogin.value;

    let user = {
        celular: celular,
        clave:clave
    }

    // usuarios.setItem(celular, JSON.stringify(user));

    //let example = JSON.parse(localStorage.getItem(celular)); 

   // console.log(example);


})