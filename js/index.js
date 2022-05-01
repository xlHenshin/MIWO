const signInBtn = document.getElementById("signin");
const signUpBtn = document.getElementById("signup");

signInBtn.addEventListener('click', ()=>{

    console.log("SIGNIN");
    window.location.href = "../ingresar.html"
})

signUpBtn.addEventListener('click', ()=>{

    console.log("SIGNUP");
})