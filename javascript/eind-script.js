// Deze constanten zorgen ervoor...
const pElement = document.querySelector("#mainText");

const progressSlaap = document.querySelector("#progressSlaap");
const progressHonger = document.querySelector("#progressHonger");
const progressPlezier = document.querySelector("#progressPlezier");

const nijntjeBlauw = document.querySelector("#nijntje-blauw");

const knopRoze = document.querySelector("#kledingRoze");
const knopRood = document.querySelector("#kledingRood");
const knopFeest = document.querySelector("#kledingFeest");
const knopCool = document.querySelector("#kledingCool");

const knopSlapen = document.querySelector("#knop-slapen");
const knopEten = document.querySelector("#knop-eten");
const knopSpelen = document.querySelector("#knop-spelen");

const pSlapen = document.querySelector("#slapenText");
const pEten = document.querySelector("#etenText");
const pSpelen = document.querySelector("#spelenText");

let nijntjeStatus = false;
let scoreSlaap = 0;
let scoreHonger = 0;
let scorePlezier = 0;


// Deze functions zorgen ervoor dat als je op een van de knoppen klikt je actie wordt omgezet in tekst en de afbeelding veranderd naar de actie.
function gaSlapen() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showGaSlapen();
    }
    else {
        scoreSlaap += 1;
        nijntjeStatus = true;
        showHeeftGeslapen();
    }
}

function gaEten() {
    if (nijntjeStatus) {
        showGaEten();
        nijntjeStatus = false
    }
    else {
        scoreHonger += 1;
        showHeeftGegeten();
        nijntjeStatus = true
    }
}

function gaSpelen() {
    if (nijntjeStatus) {
        showGaSpelen();
        nijntjeStatus = false
    }
    else {
        scorePlezier += 1;
        showHeeftGespeeld();
        nijntjeStatus = true
    }
}

function showDefault() {
    pElement.textContent = "Klik op een een knop om te beginnen";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp";
}

function showGaSlapen() {
    pElement.textContent = "Nijntje is aan het slapen";
    pSlapen.textContent = "Maak Nijntje wakker";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/slapen.jpeg";
}

function showHeeftGeslapen() {
    pElement.textContent = "Nijntje heeft heerlijk geslapen";
    pSlapen.textContent = "Laat Nijntje slapen";
    progressSlaap.value = scoreSlaap;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp";
}

function showGaEten() {
    pElement.textContent = "Nijntje is aan het eten"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/eten.jpeg"
}

function showHeeftGegeten() {
    pElement.textContent = "Nijntje heeft goed gegeten"
    progressHonger.value = scoreHonger;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp"
}

function showGaSpelen() {
    pElement.textContent = "Nijntje is aan het spelen"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/spelen.jpeg"
}

function showHeeftGespeeld() {
    pElement.textContent = "Nijntje heeft lekker gespeeld"
    progressPlezier.value = scorePlezier;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp"
}

// Deze event listeners zorgen ervoor dat...
knopSlapen.addEventListener("click", gaSlapen)
knopEten.addEventListener("click", gaEten)
knopSpelen.addEventListener("click", gaSpelen)

knopRoze.addEventListener("click", draagRoze)
knopRood.addEventListener("click", draagRood)
knopFeest.addEventListener("click", draagFeest)
knopCool.addEventListener("click", draagCool)


// function MaakMoe() {
//     if (scoreSlaap > 0) {
//         scoreSlaap -= 1;
//         progressSlaap.value = scoreSlaap;
//     }
//     setTimeout(MaakMoe, 10000);
// }

// MaakMoe();



/*
Vragen:
- ...

Volgorde:
1. Constanten
2. Let
3. Function
4. Event Listeners
!!! OVERAL COMMENTAAR !!!

Bronnen:
https://www.youtube.com/watch?v=KB6CRow6Ulw&ab_channel=BenCodeZen
https://codepen.io/supercooldog5/pen/xxxBwdV
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress (progress bar)
https://stackoverflow.com/questions/43524985/how-to-get-change-value-of-html5-progress-bar (progress bar)
https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously (timer)
*/