import { usuarios } from "../utils/app.js";

const usuarioActual = window.localStorage.getItem('numeroCel');
const usuario = JSON.parse(usuarios.getItem(usuarioActual));

let nombre = document.getElementById('nombre');

nombre.innerHTML = usuario.nombre + ' ' + usuario.apellido;

