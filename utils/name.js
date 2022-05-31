const usuarioActual = window.localStorage.getItem('numeroCel');
const usuario = JSON.parse(window.localStorage.getItem(usuarioActual));

let nombre = document.getElementById('nombre');

nombre.innerHTML = usuario.nombre + ' ' + usuario.apellido;