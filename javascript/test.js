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

// Default
function showDefault() {
    pElement.textContent = "Klik op een knop om te beginnen";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp";
}

// Kleding
function showBlauw() {
    pElement.textContent = "Wat gaan we nu doen?"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp";
}

function showRoze() {
    pElement.textContent = "Nijntje ziet er goed uit!"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-roze-strik.png";
}

function draagRoze() {
    if (nijntjeStatus) {
        nijntjeStatus = false
        showRoze()
    }
    else {
        nijntjeStatus = true;
        showBlauw();
    }
}

function showRood() {
    pElement.textContent = "Wauw!"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijnjte-rood.png";
}

function draagRood() {
    if (nijntjeStatus) {
        nijntjeStatus = false
        showRood()
    }
    else {
        nijntjeStatus = true;
        showBlauw();
    }
}

function showFeest() {
    pElement.textContent = "Nijntje voelt zihc feestelijkj!"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-feest.png";
}

function draagFeest() {
    if (nijntjeStatus) {
        nijntjeStatus = false
        showFeest()
    }
    else {
        nijntjeStatus = true;
        showBlauw();
    }
}

function showCool() {
    pElement.textContent = "Nijntje ziet er super cool uit!"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-cool.png";
}

function draagCool() {
    if (nijntjeStatus) {
        nijntjeStatus = false
        showCool()
    }
    else {
        nijntjeStatus = true;
        showBlauw();
    }
}

// Slapen, eten, spelen
function showGaSlapen() {
    pElement.textContent = "Nijntje is aan het slapen";
    pSlapen.textContent = "Stop";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/slapen.jpeg";
}

function showHeeftGeslapen() {
    pElement.textContent = "Nijntje heeft heerlijk geslapen";
    pSlapen.textContent = "Slapen";
    progressSlaap.value = scoreSlaap;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp";
}

function startSlaapTimer() {
    toenameSlaap = setInterval(() => {
        if (scoreSlaap < 100) {
            scoreSlaap += 0.20;
            progressSlaap.value = scoreSlaap;
        }
    }, 10);
}

function stopSlaapTimer() {
    clearInterval(toenameSlaap);
    afnameSlaap = setInterval(() => {
        if (scoreSlaap > 0) {
            scoreSlaap -= 0.020;
            progressSlaap.value = scoreSlaap;
        } else {
            clearInterval(afnameSlaap);
        }
    },
        10);
}

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

function showGaEten() {
    pElement.textContent = "Nijntje is aan het eten"
    pEten.textContent = "Stop"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/eten.jpeg"
}

function showHeeftGegeten() {
    pElement.textContent = "Nijntje heeft goed gegeten"
    pEten.textContent = "Eten"
    progressHonger.value = scoreHonger;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp"
}


function startHongerTimer() {
    toenameHonger = setInterval(() => {
        if (scoreHonger < 100) {
            scoreHonger += 0.20;
            progressHonger.value = scoreHonger;
        }
    }, 10);
}

function stopHongerTimer() {
    clearInterval(toenameHonger);
    afnameHonger = setInterval(() => {
        if (scoreHonger > 0) {
            scoreHonger -= 0.020;
            progressHonger.value = scoreHonger;
        } else {
            clearInterval(afnameHonger);
        }
    },
        10);
}

function gaEten() {
    if (nijntjeStatus) {
        nijntjeStatus = false
        showGaEten();
    }
    else {
        scoreHonger += 1;
        nijntjeStatus = true
        showHeeftGegeten();
    }
}

function showGaSpelen() {
    pElement.textContent = "Nijntje is aan het spelen"
    pSpelen.textContent = "Stop"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/spelen.jpeg"
}

function showHeeftGespeeld() {
    pElement.textContent = "Nijntje heeft lekker gespeeld"
    pSpelen.textContent = "Spelen"
    progressPlezier.value = scorePlezier;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.webp"
}

function startPlezierTimer() {
    toenamePlezier = setInterval(() => {
        if (scorePlezier < 100) {
            scorePlezier += 0.20;
            progressPlezier.value = scorePlezier;
        }
    }, 10);
}

function stopPlezierTimer() {
    clearInterval(toenamePlezier);
    afnamePlezier = setInterval(() => {
        if (scorePlezier > 0) {
            scorePlezier -= 0.020;
            progressPlezier.value = scorePlezier;
        } else {
            clearInterval(afnamePlezier);
        }
    },
        10);
}

function gaSpelen() {
    if (nijntjeStatus) {
        nijntjeStatus = false
        showGaSpelen();
    }
    else {
        scorePlezier += 1;
        nijntjeStatus = true
        showHeeftGespeeld();
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