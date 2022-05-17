
import { usuarios,parches } from "../utils/app.js";

const url = location.href;
const line = url.split('/');
const name = line[3];

if( name === 'MIWO'){
    const name = line[4];
}

if (name === 'registro.html'){
    
    let type = document.getElementById('documentType');
    let numero = document.getElementById('numero');

    let continuar = document.getElementById('continuar')

    continuar.addEventListener('click', (e) =>{
        if (numero.value === '' || type.value === ''){
            alert('llene todos los datos, por favor');
        } else {
           window.localStorage.setItem('numero',numero.value);

            let user = {
                documento: type.value,
                numeroDeDocumento: numero.value
            }

            usuarios.setItem(numero.value, JSON.stringify(user));
            window.location.href = "./registro3.html";
        }
    })

};


if (name=== 'registro3.html'){

    const usuarioActual = window.localStorage.getItem('numero');

    const usuario = JSON.parse(usuarios.getItem(usuarioActual));

    let nombre = document.getElementById('nombre');
    let nombre2 = document.getElementById('2donombre');
    let apellido = document.getElementById('apellido');
    let apellido2 = document.getElementById('apellido2');
    let email = document.getElementById('email');
    let continuar = document.getElementById('continuar')

    


    continuar.addEventListener('click', (e) =>{
        
        const inputs = [nombre.value,apellido.value,apellido2.value,email.value];

        const llenos = inputs.some((e)=>{
        return e === '';
    })
        if (llenos) {
            alert('Digite todos los datos, por favor');
        } else {
            let user = {
                documento: usuario.documento,
                numeroDeDocumento: usuario.numeroDeDocumento,
                nombre:nombre.value,
                nombre2:nombre2.value,
                apellido:apellido.value,
                apellido2:apellido2.value,
                email:email.value
            }

            usuarios.setItem(user.numeroDeDocumento, JSON.stringify(user));
            window.location.href = "./registro4.html";
        }
    });

}
if (name === 'registro4.html'){

    const usuarioActual = window.localStorage.getItem('numero');

    const usuario = JSON.parse(usuarios.getItem(usuarioActual));

    let celularRegistro = document.getElementById('celularRegistro');
    
    let continuar = document.getElementById('continuar')

    continuar.addEventListener('click', (e) =>{
        
        if (celularRegistro.value === '') {
            alert('Digite todos los datos, por favor');
        } else {
            let user = {
                documento: usuario.documento,
                numeroDeDocumento: usuario.numeroDeDocumento,
                nombre:usuario.nombre,
                nombre2:usuario.nombre2,
                apellido:usuario.apellido,
                apellido2:usuario.apellido2,
                email:usuario.email,
                celular: celularRegistro.value
            }

            usuarios.setItem(user.celular, JSON.stringify(user));
            usuarios.setItem(user.numeroDeDocumento, JSON.stringify(user));
            window.localStorage.setItem('numeroCel',user.celular);
            window.location.href = "./registro5.html";
        }
    });
}

if (name === 'registro5.html'){

    const usuarioActual = window.localStorage.getItem('numeroCel');
    console.log(usuarioActual);

    let clave1 = document.getElementById('clave1');
    let clave2 = document.getElementById('clave2');
    let clave3 = document.getElementById('clave3');
    let clave4 = document.getElementById('clave4');

    let mensaje = document.getElementById('mensajeR5');

    mensaje.innerHTML = 'al ' + usuarioActual + ' para confirmar tu número';

    let inputs2 = [clave1,clave2,clave3,clave4];

    const myVar = setTimeout(() =>{
        inputs2.forEach(input =>{
            input.value = Math.floor(Math.random() * 10);
        })
         
    },3000);
   
    let continuar = document.getElementById('continuar')

    continuar.addEventListener('click', (e) =>{
        var cool = inputs2.some((e)=>{
            return e.value === '';
        });    
        if (cool){
            alert('Digite el código enviado, por favor');
        } else {
            window.location.href = "./registro6.html";
        }

    });
}

if (name === 'registro6.html'){

    let clave = document.getElementById('clave');
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let input3 = document.getElementById('input3');
    let input4 = document.getElementById('input4');

    setInterval(() => {
        if (clave.value.length  >= 1) {
            input1.style.background = 'rgba(121, 29, 213, 1)';
        } else {
            input1.style.background = '#FFFFFF';  
        } 
        if (clave.value.length  >= 2) {
            input2.style.background = 'rgba(121, 29, 213, 1)';
        } else {
            input2.style.background = '#FFFFFF';  
        } 
        if (clave.value.length  >= 3) {
            input3.style.background = 'rgba(121, 29, 213, 1)';
        } else {
            input3.style.background = '#FFFFFF';  
        } 
        if (clave.value.length  >= 4) {
            input4.style.background = 'rgba(121, 29, 213, 1)';
        } else {
            input4.style.background = '#FFFFFF';  
        } 
    },100)
    let continuar = document.getElementById('continuar')

    continuar.addEventListener('click', (e) =>{

        if (clave.value === '' || clave.value.length < 4){
            alert('Recuerde que la clave debe tener 4 digitos');
        } else {
        const usuarioActual = window.localStorage.getItem('numeroCel');
        const usuario = JSON.parse(usuarios.getItem(usuarioActual));

        let user = {
            documento: usuario.documento,
            numeroDeDocumento: usuario.numeroDeDocumento,
            nombre:usuario.nombre,
            nombre2:usuario.nombre2,
            apellido:usuario.apellido,
            apellido2:usuario.apellido2,
            email:usuario.email,
            celular: usuario.celular,
            clave: clave.value
        }

        usuarios.setItem(user.celular, JSON.stringify(user));
        usuarios.setItem(user.numeroDeDocumento, JSON.stringify(user));
        window.location.href = "./huella.html";
    }
    });

}

