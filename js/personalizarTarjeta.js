const card = document.getElementById('card');
const pat1 = document.getElementById('pat1');
const pat2 = document.getElementById('pat2');
const pat3 = document.getElementById('pat3');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const grey = document.getElementById('grey');
const violet = document.getElementById('violet');
const black = document.getElementById('black');
const blue = document.getElementById('blue');

let pattern = 1;

pat1.addEventListener('click',()=>{
    card.src = './img/card/1.png'
    pattern = 1;
    window.localStorage.setItem('card', '1');
});

pat2.addEventListener('click',()=>{
    card.src = './img/card/7.png'
    pattern = 2;
    window.localStorage.setItem('card', '7');
});

pat3.addEventListener('click',()=>{
    card.src = './img/card/13.png'
    pattern = 3;
    window.localStorage.setItem('card', '13');
});

orange.addEventListener('click',(e)=>{
    
    switch (pattern){
        case 1: 
        card.src = './img/card/1.png'
        window.localStorage.setItem('card', '1');
        break;
        case 2: 
        card.src = './img/card/7.png'
        window.localStorage.setItem('card', '7');
        break;
        case 3: 
        card.src = './img/card/13.png'
        window.localStorage.setItem('card', '13');
        break;
    }
})

yellow.addEventListener('click',(e)=>{
    switch (pattern){
        case 1: 
        card.src = './img/card/2.png'
        window.localStorage.setItem('card', '2');
        break;
        case 2: 
        card.src = './img/card/8.png'
        window.localStorage.setItem('card', '8');
        break;
        case 3: 
        card.src = './img/card/14.png'
        window.localStorage.setItem('card', '14');
        break;
    }
})
grey.addEventListener('click',(e)=>{
    switch (pattern){
        case 1: 
        card.src = './img/card/3.png'
        window.localStorage.setItem('card', '3');
        break;
        case 2: 
        card.src = './img/card/9.png'
        window.localStorage.setItem('card', '9');
        break;
        case 3: 
        card.src = './img/card/15.png'
        window.localStorage.setItem('card', '15');
        break;
    }
})

violet.addEventListener('click',(e)=>{
    switch (pattern){
        case 1: 
        card.src = './img/card/4.png'
        window.localStorage.setItem('card', '4');
        break;
        case 2: 
        card.src = './img/card/10.png'
        window.localStorage.setItem('card', '10');
        break;
        case 3: 
        card.src = './img/card/16.png'
        window.localStorage.setItem('card', '16');
        break;
    }
})

black.addEventListener('click',(e)=>{
    switch (pattern){
        case 1: 
        card.src = './img/card/5.png'
        window.localStorage.setItem('card', '5');
        break;
        case 2: 
        card.src = './img/card/11.png'
        window.localStorage.setItem('card', '11');
        break;
        case 3: 
        card.src = './img/card/17.png'
        window.localStorage.setItem('card', '17');
        break;
    }
})

blue.addEventListener('click',(e)=>{
    switch (pattern){
        case 1: 
        card.src = './img/card/6.png'
        window.localStorage.setItem('card', '6');
        break;
        case 2: 
        card.src = './img/card/12.png'
        window.localStorage.setItem('card', '12');
        break;
        case 3: 
        card.src = './img/card/18.png'
        window.localStorage.setItem('card', '18');
        break;
    }
})
