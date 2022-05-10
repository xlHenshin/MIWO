import { usuarios, parches } from "../utils/app.js";

const url = location.href;
const line = url.split('/');
const name = line[3];

let nombreParche = document.getElementById('nombreParche');
let descripcion = document.getElementById('descripcionParche');
let lugar = document.getElementById('lugarParche');
let fecha = document.getElementById('fechaParche');
let checkP = document.getElementById('checkboxPublic');
let checkPr = document.getElementById('checkboxPriv');
let checkDiario = document.getElementById('checkboxDiario');
let checkSemanal = document.getElementById('checkboxSemanal');
let checkMensual = document.getElementById('checkboxMensual')



let crearParcheBtn = document.getElementById('crearParcheBtn');


crearParcheBtn.addEventListener('click', (e) => {

    const inputstext = [nombreParche.value, fecha.value, descripcion.value, lugar.value]
    const inputsCheck = [checkP.checked, checkPr.checked];
    const inputsFrec = [checkDiario.checked, checkSemanal.checked, checkMensual.checked]
    
    let textos = inputstext.some((e) => {
        return e === '';
    });

    let tipoParche = inputsCheck.every((e) => {
        return e == false;
    })

    let tipoFrec = inputsFrec.every((e) => {
        return e == false;
    })

    if (textos) {
        alert('Rellene los campos faltantes');
    } else if (tipoParche) {
        alert('Seleccione el tipo de parche que desea');
    } else if (tipoFrec) {
        alert('Seleccione la frecuencia de pago que desea');
    } else {

        const usuarioActual = window.localStorage.getItem('numeroCel');
        const usuario = JSON.parse(usuarios.getItem(usuarioActual));

        let parche = {
            holder : usuario.nombre + ' ' + usuario.apellido,
            nombreParche : nombreParche.value,
            descripcionParche : descripcionParche.value,
            lugarParche : lugarParche.value,
            publico : checkP.checked,
            privado : checkPr.checked,
            Semanal : checkSemanal.checked,
            Mensual : checkMensual.checked,
            Diario : checkDiario.checked,
            fecha : fecha.value
        }

        parches.setItem(usuario.celular, JSON.stringify(parche));
        window.location.href = "./parches-principal.html"
    }


});
