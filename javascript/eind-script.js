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



// Default
function showDefault() {
    pElement.textContent = "Klik op een knop om te beginnen";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp";
}



// Kleding
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



// Slapen, eten, spelen
function showGaSlapen() {
    pElement.textContent = "Nijntje is aan het slapen";
    pSlapen.textContent = "Stop";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/slapen.jpeg";

    knopEten.disabled = true;
    knopSpelen.disabled = true;
}

function showHeeftGeslapen() {
    pElement.textContent = "Nijntje heeft heerlijk geslapen";
    pSlapen.textContent = "Slapen";
    progressSlaap.value = scoreSlaap;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";

    knopEten.disabled = false;
    knopSpelen.disabled = false;
}

function showGaEten() {
    pElement.textContent = "Nijntje is aan het eten";
    pEten.textContent = "Stop";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/eten.jpeg";

    knopSlapen.disabled = true;
    knopSpelen.disabled = true;
}

function showHeeftGegeten() {
    pElement.textContent = "Nijntje heeft goed gegeten";
    pEten.textContent = "Eten";
    progressHonger.value = scoreHonger;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";

    knopSlapen.disabled = false;
    knopSpelen.disabled = false;
}

function showGaSpelen() {
    pElement.textContent = "Nijntje is aan het spelen"
    pSpelen.textContent = "Stop"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/spelen.jpeg"

    knopSlapen.disabled = true
    knopEten.disabled = true
}

function showHeeftGespeeld() {
    pElement.textContent = "Nijntje heeft lekker gespeeld";
    pSpelen.textContent = "Spelen";
    progressPlezier.value = scorePlezier;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";

    knopSlapen.disabled = false;
    knopEten.disabled = false;
}



// Timers
function startSlaapTimer() {
    toenameSlaap = setInterval(() => {
        if (scoreSlaap < 100) {
            scoreSlaap += 0.20;
            progressSlaap.value = scoreSlaap;
        }
        else {
            clearInterval(toenameSlaap);
            alert("Nijntje heeft genoeg geslapen!");
        }
    }, 10);
}

function stopSlaapTimer() {
    clearInterval(toenameSlaap);
    afnameSlaap = setInterval(() => {
        if (scoreSlaap > 0) {
            scoreSlaap -= 0.020;
            progressSlaap.value = scoreSlaap;
        }
        else {
            clearInterval(afnameSlaap);
            alert("Nijntje is moe!")
        }
    },
        10);
}

function startHongerTimer() {
    toenameHonger = setInterval(() => {
        if (scoreHonger < 100) {
            scoreHonger += 0.20;
            progressHonger.value = scoreHonger;
        }
        else {
            clearInterval(toenameHonger);
            alert("Nijntje heeft genoeg gegeten!");
        }
    }, 10);
}

function stopHongerTimer() {
    clearInterval(toenameHonger);
    afnameHonger = setInterval(() => {
        if (scoreHonger > 0) {
            scoreHonger -= 0.020;
            progressHonger.value = scoreHonger;
        }
        else {
            clearInterval(afnameHonger);
            alert("Nijntje heeft honger!")
        }
    },
        10);
}

function startPlezierTimer() {
    toenamePlezier = setInterval(() => {
        if (scorePlezier < 100) {
            scorePlezier += 0.20;
            progressPlezier.value = scorePlezier;
        }
        else {
            clearInterval(toenamePlezier);
            alert("Nijntje heeft genoeg gespeeld!");
        }
    }, 10);
}

function stopPlezierTimer() {
    clearInterval(toenamePlezier);
    afnamePlezier = setInterval(() => {
        if (scorePlezier > 0) {
            scorePlezier -= 0.020;
            progressPlezier.value = scorePlezier;
        }
        else {
            clearInterval(afnamePlezier);
            alert("Nijntje verveelt zich!")
        }
    },
        10);
}



// Kleding
function draagRoze() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showRoze();
    }
    else {
        nijntjeStatus = true;
        showBlauw();
    }
}

function draagRood() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showRood();
    }
    else {
        nijntjeStatus = true;
        showBlauw();
    }
}

function draagFeest() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showFeest();
    }
    else {
        nijntjeStatus = true;
        showBlauw();
    }
}

function draagCool() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showCool();
    }
    else {
        nijntjeStatus = true;
        showBlauw();
    }
}



// Slapen, eten, spelen
function gaSlapen() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showGaSlapen();

        startSlaapTimer();
    }
    else {
        nijntjeStatus = true;
        showHeeftGeslapen();

        stopSlaapTimer();
    }
}

function gaEten() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showGaEten();

        startHongerTimer();
    }
    else {
        scoreHonger += 1;
        nijntjeStatus = true;
        showHeeftGegeten();

        stopHongerTimer();
    }
}

function gaSpelen() {
    if (nijntjeStatus) {
        nijntjeStatus = false;
        showGaSpelen();

        startPlezierTimer();
    }
    else {
        scorePlezier += 1;
        nijntjeStatus = true;
        showHeeftGespeeld();

        stopPlezierTimer();
    }
}



// Deze event listeners zorgen ervoor dat...
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