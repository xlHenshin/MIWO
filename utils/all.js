const url = document.getElementById('url');

url.addEventListener('click', (event) => {

    const bol = window.localStorage.getItem('yaPaso');
    if (bol==='false') {
          window.location.href='./desbloquearseccion.html'
        } else {
            window.location.href='./aprendizaje.html'
        }
});