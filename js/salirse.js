import { usuarios, parches } from "../utils/app.js";

let salir = document.getElementById('adios');

salir.addEventListener('click', ()=>{
    var respuesta = confirm("¿Estás seguro que quieres abandonar este parche?")
         
if(respuesta){
  alert("¡Has abandonado el parche con éxito! Se te devolverá tu dinero");
  const usuarioActual = window.localStorage.getItem('numeroCel');
  parches.removeItem(usuarioActual);

  window.location.href = './parches-principal.html'


} else {
  alert("¡Que disfrutes tu parche!"); 
}
})