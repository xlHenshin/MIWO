const urlInit = window.localStorage.getItem('urlInicio')
const volver = document.getElementById('volver')

volver.addEventListener("click",(e)=>{
    window.location.href=urlInit;
})