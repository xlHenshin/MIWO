const signInBtn = document.getElementById("signin");
const signUpBtn = document.getElementById("signup");

window.localStorage.setItem('yaPaso',false);
window.localStorage.setItem ('tarjeta',false);


signInBtn.addEventListener('click', ()=>{

    window.location.href = "./ingresar.html";
})

signUpBtn.addEventListener('click', ()=>{

    window.location.href = "./registro.html";

})