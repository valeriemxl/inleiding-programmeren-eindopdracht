const knopSlapen = document.querySelector("#knop-slapen")
const knopEten = document.querySelector("#knop-eten")
const knopSpelen = document.querySelector("#knop-spelen")

// let nijtje = "nijntjeGaatSlapen"
let pElement = document.querySelector("p")


function gaSlapen() {
    console.log("Nijntje gaat slapen")
    pElement.textContent = "Nijntje gaat slapen"
}

function gaEten() {
    console.log("Nijntje gaat eten")
    pElement.textContent = "Nijntje gaat eten"
}

function gaSpelen() {
    console.log("Nijntje gaat spelen")
    pElement.textContent = "Nijntje gaat spelen"
}

knopSlapen.addEventListener("click", gaSlapen)
knopEten.addEventListener("click", gaEten)
knopSpelen.addEventListener("click", gaSpelen)