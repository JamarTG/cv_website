const hamburger = document.getElementById('hamburger')
const burgers = document.querySelectorAll('burger');
const main = document.getElementById('main')
const body = document.getElementById('body')
const content = document.getElementById('content')
const socials = document.getElementById('socials')

const highBurger = document.getElementById('high');
const midBurger = document.getElementById('mid');
const lowBurger = document.getElementById('low');


let openOrClosed = false;

hamburger.onclick = function () {

    content.classList.add('unrotate')
    content.style.transform = openOrClosed ? 'rotateZ(0deg)' : 'rotateZ(20deg)'
    
    socials.classList.toggle('move-left');

    main.classList.toggle('rotate') 
    main.classList.toggle('dark-bg')
    main.classList.toggle('add-border')
    main.classList.toggle('add-height')

    highBurger.classList.toggle('closed-high')
    midBurger.classList.toggle('closed-mid')
    lowBurger.classList.toggle('closed-low')
      

    body.classList.toggle('gradient')


    openOrClosed = !openOrClosed
    }
