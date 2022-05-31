import { usuarios } from "../utils/app.js";

const usuarioActual = window.localStorage.getItem('numeroCel');
const usuario = JSON.parse(usuarios.getItem(usuarioActual));

let nombre = document.getElementById('nombre');

nombre.innerHTML = usuario.nombre + ' ' + usuario.apellido;

const tarjet = document.getElementById('tarjeta');

tarjet.addEventListener('click', (event) => {
    const url = location.href;
    window.localStorage.setItem ('urlInicio', url);
    const tarj = window.localStorage.getItem ('tarjeta');
    if (tarj === 'true'){
        window.location.href = './vertarjeta.html'
    } else {
        window.location.href = './tarjeta-miwo.html'
    }
    
})

const url = document.getElementById('url');

url.addEventListener('click', (event) => {

    const bol = window.localStorage.getItem('yaPaso');
    if (bol==='false') {
          window.location.href='./desbloquearseccion.html'
        } else {
            window.location.href='./aprendizaje.html'
        }
});

