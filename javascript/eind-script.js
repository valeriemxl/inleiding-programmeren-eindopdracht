// Deze constanten zorgen ervoor...
const knopSlapen = document.querySelector("#knop-slapen")
const knopEten = document.querySelector("#knop-eten")
const knopSpelen = document.querySelector("#knop-spelen")
const nijntjeBlauw = document.querySelector("#nijntje-blauw")


let pElement = document.querySelector("p")
let nijntjeStatus = false

// Deze functions zorgen ervoor dat als je op een van de knoppen klikt je actie wordt omgezet in tekst. Dus je ziet wat je hebt gedaan
function gaSlapen() {
    pElement.textContent = "Nijntje is aan het slapen"
    if (nijntjeStatus) {
        nijntjeBlauw.src = "images/nijntje-blauw.webp"
        nijntjeStatus = false
    }
    else {
        nijntjeBlauw.src = "images/slapen.jpeg"
        nijntjeStatus = true
    }
}

function gaEten() {
    pElement.textContent = "Nijntje is aan het eten"
    if (nijntjeStatus) {
        // nijntjeBlauw.src = "images/nijntje-blauw.webp"
        nijntjeStatus = false
    }
    else {
        nijntjeBlauw.src = "images/eten.jpeg"
        nijntjeStatus = true
    }
}

function gaSpelen() {
    pElement.textContent = "Nijntje is aan het spelen"
    if (nijntjeStatus) {
        // nijntjeBlauw.src = "images/nijntje-blauw.webp"
        nijntjeStatus = false
    }
    else {
        nijntjeBlauw.src = "images/spelen.jpeg"
        nijntjeStatus = true
    }
}

// Deze event listeners zorgen ervoor dat...
knopSlapen.addEventListener("click", gaSlapen)
knopEten.addEventListener("click", gaEten)
knopSpelen.addEventListener("click", gaSpelen)



/*
let slapen = document.querySelector("#slapen")
let nijntjeBlauw = document.querySelector("#nijntje-blauw")
let nijntjeStatus = false

function slapenKnop() {
    if (nijntjeStatus) {
        nijntjeBlauw.src = "images/nijntje-blauw.webp"
        nijntjeStatus = false
    }
    else {
        nijntjeBlauw.src = "images/slapen.jpeg"
        nijntjeStatus = true
    }
}

slapen.addEventListener('click', slapenKnop)
*/

/*
Vragen:
- Als ik bijvoorbeeld op Slapen klik wil ik dat er een plaatje van een slapende Nijntje komt
- Progressiebar?
- Timer?
- 

Volgorde:
1. Constanten
2. Let
3. Function
4. Event Listeners
!!! OVERAL COMMENTAAR !!!

Bronnen:
https://www.youtube.com/watch?v=KB6CRow6Ulw&ab_channel=BenCodeZen
https://www.w3schools.com/howto/howto_js_slideshow.asp
https://codepen.io/supercooldog5/pen/xxxBwdV
*/