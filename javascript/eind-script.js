// Deze constanten zorgen ervoor...
const knopSlapen = document.querySelector("#knop-slapen")
const knopEten = document.querySelector("#knop-eten")
const knopSpelen = document.querySelector("#knop-spelen")
const nijntjeBlauw = document.querySelector("#nijntje-blauw")


let pElement = document.querySelector("p")
let nijntjeStatus = false

// Deze functions zorgen ervoor dat als je op een van de knoppen klikt je actie wordt omgezet in tekst.
function gaSlapen() {
    if (nijntjeStatus) {
        pElement.textContent = "Nijntje heeft heerlijk geslapen"
        nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp"
        nijntjeStatus = false
    }
    else {
        pElement.textContent = "Nijntje is aan het slapen"
        nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/slapen.jpeg"
        nijntjeStatus = true
    }
}

function gaEten() {
    if (nijntjeStatus) {
        pElement.textContent = "Nijntje heeft goed gegeten"
        nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp"
        nijntjeStatus = false
    }
    else {
        pElement.textContent = "Nijntje is aan het eten"
        nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/eten.jpeg"
        nijntjeStatus = true
    }
}

function gaSpelen() {
    if (nijntjeStatus) {
        pElement.textContent = "Nijntje heeft lekker gespeeld"
        nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp"
        nijntjeStatus = false
    }
    else {
        pElement.textContent = "Nijntje is aan het spelen"
        nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/spelen.jpeg"
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
- Plaatje veranderen

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