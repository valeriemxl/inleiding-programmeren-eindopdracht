// Deze constanten verwijzen naar verschillende elementen in de HTML
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


// Variabelen om de status van Nijntje en haar scores bij te houden
let nijntjeStatus = true;

let scoreSlaap = 0;
let toenameSlaap;
let afnameSlaap;

let scoreHonger = 0;
let toenameHonger;
let afnameHonger;

let scorePlezier = 0;
let toenamePlezier;
let afnamePlezier;



// Default: functie voor de eerste weergave van de tekst en afbeelding van Nijntje
function showDefault() {
    pElement.textContent = "Klik op een knop om te beginnen";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp";
}



// Kleding: functies om de kleding van Nijntje te laten zien en tekst te updaten
function showBlauw() {
    pElement.textContent = "Wat gaan we nu doen?";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";
}

function showRoze() {
    pElement.textContent = "Nijntje ziet er goed uit!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-roze-strik.png";
}

function showRood() {
    pElement.textContent = "Wauw!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijnjte-rood.png";
}

function showFeest() {
    pElement.textContent = "Nijntje voelt zich feestelijk!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-feest.png";
}

function showCool() {
    pElement.textContent = "Nijntje ziet er super cool uit!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-cool.png";
}



// Slapen, eten, spelen: functies om de status van Nijntje en knoppen aan te passen wanneer ze gaat slapen, eten of spelen
function showGaSlapen() {
    pElement.textContent = "Nijntje is aan het slapen";
    pSlapen.textContent = "Stop";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/slapen.jpeg";

    // Schakel andere knoppen uit tijdens het slapen
    knopEten.disabled = true;
    knopSpelen.disabled = true;
}

function showHeeftGeslapen() {
    pElement.textContent = "Nijntje heeft heerlijk geslapen";
    pSlapen.textContent = "Slapen";
    progressSlaap.value = scoreSlaap;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";

    // Schakel de knoppen weer in na het slapen
    knopEten.disabled = false;
    knopSpelen.disabled = false;
}

function showGaEten() {
    pElement.textContent = "Nijntje is aan het eten";
    pEten.textContent = "Stop";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/eten.jpeg";

    // Schakel andere knoppen uit tijdens het eten
    knopSlapen.disabled = true;
    knopSpelen.disabled = true;
}

function showHeeftGegeten() {
    pElement.textContent = "Nijntje heeft goed gegeten";
    pEten.textContent = "Eten";
    progressHonger.value = scoreHonger;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";

    // Schakel de knoppen weer in na het eten
    knopSlapen.disabled = false;
    knopSpelen.disabled = false;
}

function showGaSpelen() {
    pElement.textContent = "Nijntje is aan het spelen"
    pSpelen.textContent = "Stop"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/spelen.jpeg"

    // Schakel andere knoppen uit tijdens het spelen
    knopSlapen.disabled = true
    knopEten.disabled = true
}

function showHeeftGespeeld() {
    pElement.textContent = "Nijntje heeft lekker gespeeld";
    pSpelen.textContent = "Spelen";
    progressPlezier.value = scorePlezier;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";

    // Schakel de knoppen weer in na het spelen
    knopSlapen.disabled = false;
    knopEten.disabled = false;
}



// Timers: functies om de timers voor slaap, eten en plezier te starten en stoppen
function startSlaapTimer() {
    toenameSlaap = setInterval(() => {
        if (scoreSlaap < 100) {
            scoreSlaap += 0.20;
            progressSlaap.value = scoreSlaap; // Slaapscore stijgt
        }
        else {
            clearInterval(toenameSlaap); // Stop de timer als de maximale slaapscore is bereikt
            alert("Nijntje heeft genoeg geslapen!");
        }
    },
        10); // Interval van 10 milliseconden
}

function stopSlaapTimer() {
    clearInterval(toenameSlaap); // Stop de slaaptimer
    afnameSlaap = setInterval(() => {
        if (scoreSlaap > 0) {
            scoreSlaap -= 0.020;
            progressSlaap.value = scoreSlaap; // Slaapscore daalt na het wakker worden
        }
        else {
            clearInterval(afnameSlaap); // Stop de afnametimer als slaapscore 0 is bereikt
        }
    },
        10); // Interval van 10 milliseconden
}

function startHongerTimer() {
    toenameHonger = setInterval(() => {
        if (scoreHonger < 100) {
            scoreHonger += 0.20; // Hongerscore stijgt
            progressHonger.value = scoreHonger;
        }
        else {
            clearInterval(toenameHonger); // Stop de timer als maximale hongerscore is bereikt
            alert("Nijntje heeft genoeg gegeten!");
        }
    },
        10); // Interval van 10 milliseconden
}

function stopHongerTimer() {
    clearInterval(toenameHonger); // Stop de hongertimer
    afnameHonger = setInterval(() => {
        if (scoreHonger > 0) {
            scoreHonger -= 0.020; // Hongerscore daalt na het eten
            progressHonger.value = scoreHonger;
        }
        else {
            clearInterval(afnameHonger); // Stop de afnametimer als hongerscore 0 is bereikt
        }
    },
        10); // Interval van 10 milliseconden
}


function startPlezierTimer() {
    toenamePlezier = setInterval(() => {
        if (scorePlezier < 100) {
            scorePlezier += 0.20; // Plezierscore stijgt
            progressPlezier.value = scorePlezier;
        }
        else {
            clearInterval(toenamePlezier); // Stop de timer als maximale plezierscore is bereikt
            alert("Nijntje heeft genoeg gespeeld!");
        }
    }, 10); // Interval van 10 milliseconden
}

function stopPlezierTimer() {
    clearInterval(toenamePlezier); // Stop de pleziertimer
    afnamePlezier = setInterval(() => {
        if (scorePlezier > 0) {
            scorePlezier -= 0.020; // Plezierscore daalt na het spelen
            progressPlezier.value = scorePlezier;
        }
        else {
            clearInterval(afnamePlezier); // Stop de afnametimer als hongerscore 0 is bereikt
        }
    },
        10); // Interval van 10 milliseconden
}



// Kleding: functies om de kleding van Nijntje te veranderen
function draagRoze() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showRoze(); // Toon Nijntje in roze kleding
    }
    else {
        nijntjeStatus = true;
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
}

function draagRood() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showRood(); // Toon Nijntje in rode kleding
    }
    else {
        nijntjeStatus = true;
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
}

function draagFeest() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showFeest(); // Toon Nijnjte in feestkleding
    }
    else {
        nijntjeStatus = true;
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
}

function draagCool() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showCool(); // Toon Nijnjte in coole kleding
    }
    else {
        nijntjeStatus = true;
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
}



// Slapen, eten, spelen: functies om Nijntje te laten slapen, eten en spelen
function gaSlapen() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showGaSlapen(); // Nijntje gaat slapen

        startSlaapTimer(); // Start de slaaptimer
    }
    else {
        nijntjeStatus = true;
        showHeeftGeslapen(); // Nijntje is wakker geworden

        stopSlaapTimer(); // Stopt de slaaptimer
    }
}

function gaEten() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showGaEten(); // Nijntje gaat eten

        startHongerTimer(); // Start de hongertimer
    }
    else {
        nijntjeStatus = true;
        showHeeftGegeten(); // Nijntje heeft gegeten

        stopHongerTimer(); // Stop de hongertimer
    }
}

function gaSpelen() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showGaSpelen(); // Nijntje gaat spelen

        startPlezierTimer(); // Start de pleziertimer
    }
    else {
        nijntjeStatus = true;
        showHeeftGespeeld(); // Nijntje is klaar met spelen

        stopPlezierTimer(); // Stop de pleziertimer
    }
}



// Event listeners voor de kledingknoppen en activiteitenknoppen van Nijntje
knopRoze.addEventListener("click", draagRoze)
knopRood.addEventListener("click", draagRood)
knopFeest.addEventListener("click", draagFeest)
knopCool.addEventListener("click", draagCool)

knopSlapen.addEventListener("click", gaSlapen)
knopEten.addEventListener("click", gaEten)
knopSpelen.addEventListener("click", gaSpelen)



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
https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button (knoppen disabelen)
ChatGPT (interval timer)
https://www.altcademy.com/codedb/examples/create-a-timer-that-creates-an-alert-in-10-seconds-in-javascript (timer alert)
*/