// Deze constanten zorgen ervoor...
const knopSlapen = document.querySelector("#knop-slapen")
const knopEten = document.querySelector("#knop-eten")
const knopSpelen = document.querySelector("#knop-spelen")

let pElement = document.querySelector("p")

// Deze functions zorgen ervoor dat als je op een van de knoppen klikt je actie wordt omgezet in tekst. Dus je ziet wat je hebt gedaan
function gaSlapen() {
    console.log("Nijntje gaat slapen")
    pElement.textContent = "Nijntje is aan het slapen"
}

function gaEten() {
    console.log("Nijntje gaat eten")
    pElement.textContent = "Nijntje is aan het eten"
}

function gaSpelen() {
    console.log("Nijntje gaat spelen")
    pElement.textContent = "Nijntje is aan het spelen"
}

// Deze event listeners zorgen ervoor dat...
knopSlapen.addEventListener("click", gaSlapen)
knopEten.addEventListener("click", gaEten)
knopSpelen.addEventListener("click", gaSpelen)

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