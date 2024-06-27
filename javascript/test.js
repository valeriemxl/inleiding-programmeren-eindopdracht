// Deze constanten verwijzen naar verschillende elementen in de HTML
const audio = document.querySelector("#nijntjeAudio");
const knopAudio = document.querySelector("#knopAudio");

const pMain = document.querySelector("#textMain");

const progressSlaap = document.querySelector("#progressSlaap");
const progressHonger = document.querySelector("#progressHonger");
const progressPlezier = document.querySelector("#progressPlezier");

const nijntjeBlauw = document.querySelector("#imgNijntjeBlauw");

const knopRoze = document.querySelector("#kledingRoze");
const knopRood = document.querySelector("#kledingRood");
const knopFeest = document.querySelector("#kledingFeest");
const knopCool = document.querySelector("#kledingCool");

const knopSlapen = document.querySelector("#knopSlapen");
const knopEten = document.querySelector("#knopEten");
const knopSpelen = document.querySelector("#knopSpelen");

const pSlapen = document.querySelector("#textSlapen");
const pEten = document.querySelector("#textEten");
const pSpelen = document.querySelector("#textSpelen");

// Variabelen om de status van Nijntje en haar scores bij te houden
let nijntjeStatus = "idle";

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
    pMain.textContent = "Klik op een knop om te beginnen";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";
    console.log("Default view shown");
}

// Kleding: functies om de kleding van Nijntje te laten zien, tekst te updaten en andere knoppen uit te schakelen
function showBlauw() {
    pMain.textContent = "Wat gaan we nu doen?";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";

    knopRoze.disabled = false;
    knopRood.disabled = false;
    knopFeest.disabled = false;
    knopCool.disabled = false;

    knopSlapen.disabled = false;
    knopEten.disabled = false;
    knopSpelen.disabled = false;
    console.log("Nijntje in blauwe kleding");
}

function showRoze() {
    pMain.textContent = "Nijntje ziet er goed uit!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-roze-strik.png";

    knopRood.disabled = true;
    knopFeest.disabled = true;
    knopCool.disabled = true;

    knopSlapen.disabled = true;
    knopEten.disabled = true;
    knopSpelen.disabled = true;
    console.log("Nijntje in roze kleding");
}

function showRood() {
    pMain.textContent = "Wauw!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijnjte-rood.png";

    knopRoze.disabled = true;
    knopFeest.disabled = true;
    knopCool.disabled = true;

    knopSlapen.disabled = true;
    knopEten.disabled = true;
    knopSpelen.disabled = true;
    console.log("Nijntje in rode kleding");
}

function showFeest() {
    pMain.textContent = "Nijntje voelt zich feestelijk!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-feest.png";

    knopRoze.disabled = true;
    knopRood.disabled = true;
    knopCool.disabled = true;

    knopSlapen.disabled = true;
    knopEten.disabled = true;
    knopSpelen.disabled = true;
    console.log("Nijntje in feestkleding");
}

function showCool() {
    pMain.textContent = "Nijntje ziet er super cool uit!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-cool.png";

    knopRoze.disabled = true;
    knopRood.disabled = true;
    knopFeest.disabled = true;

    knopSlapen.disabled = true;
    knopEten.disabled = true;
    knopSpelen.disabled = true;
    console.log("Nijntje in coole kleding");
}

// Slapen, eten, spelen: functies om de status van Nijntje en knoppen aan te passen wanneer ze gaat slapen, eten of spelen
function showGaSlapen() {
    pMain.textContent = "Nijntje is aan het slapen";
    pSlapen.textContent = "Stop";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/slapen.jpeg";

    // Schakel andere knoppen uit tijdens het slapen
    knopEten.disabled = true;
    knopSpelen.disabled = true;

    knopRoze.disabled = true;
    knopRood.disabled = true;
    knopFeest.disabled = true;
    knopCool.disabled = true;
    console.log("Nijntje gaat slapen");
}

function showHeeftGeslapen() {
    pMain.textContent = "Nijntje heeft heerlijk geslapen";
    pSlapen.textContent = "Slapen";
    progressSlaap.value = scoreSlaap;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";

    // Schakel de knoppen weer in na het slapen
    knopEten.disabled = false;
    knopSpelen.disabled = false;

    knopRoze.disabled = false;
    knopRood.disabled = false;
    knopFeest.disabled = false;
    knopCool.disabled = false;
    console.log("Nijntje heeft geslapen");
}

function showGaEten() {
    pMain.textContent = "Nijntje is aan het eten";
    pEten.textContent = "Stop";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/eten.jpeg";

    // Schakel andere knoppen uit tijdens het eten
    knopSlapen.disabled = true;
    knopSpelen.disabled = true;
    console.log("Nijntje gaat eten");
}

function showHeeftGegeten() {
    pMain.textContent = "Nijntje heeft goed gegeten";
    pEten.textContent = "Eten";
    progressHonger.value = scoreHonger;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";

    // Schakel de knoppen weer in na het eten
    knopSlapen.disabled = false;
    knopSpelen.disabled = false;
    console.log("Nijntje heeft gegeten");
}

function showGaSpelen() {
    pMain.textContent = "Nijntje is aan het spelen";
    pSpelen.textContent = "Stop";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/spelen.jpeg";

    // Schakel andere knoppen uit tijdens het spelen
    knopSlapen.disabled = true;
    knopEten.disabled = true;
    console.log("Nijntje gaat spelen");
}

function showHeeftGespeeld() {
    pMain.textContent = "Nijntje heeft lekker gespeeld";
    pSpelen.textContent = "Spelen";
    progressPlezier.value = scorePlezier;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";

    // Schakel de knoppen weer in na het spelen
    knopSlapen.disabled = false;
    knopEten.disabled = false;
    console.log("Nijntje heeft gespeeld");
}

// Audio: functie om audio af te laten spelen en te laten stoppen
function SpeelPauze() {
    if (audio.paused) {
        audio.play();
        knopAudio.textContent = "Pauzeer muziek";
        console.log("Audio playing");
    } else {
        audio.pause();
        knopAudio.textContent = "Speel muziek af";
        console.log("Audio paused");
    }
}

// Timers: functies om de timers voor slaap, eten en plezier te starten en stoppen
function startSlaapTimer() {
    toenameSlaap = setInterval(() => {
        if (scoreSlaap < 100) {
            scoreSlaap += 0.20;
            progressSlaap.value = scoreSlaap; // Slaapscore stijgt
            console.log("Slaapscore: ", scoreSlaap);
        } else {
            clearInterval(toenameSlaap); // Stop de timer als maximale slaapscore is bereikt
            alert("Nijntje heeft genoeg geslapen!");
        }
    }, 10); // Interval van 10 milliseconden
}

function stopSlaapTimer() {
    clearInterval(toenameSlaap); // Stop de slaaptimer
    afnameSlaap = setInterval(() => {
        if (scoreSlaap > 0) {
            scoreSlaap -= 0.020;
            progressSlaap.value = scoreSlaap; // Slaapscore daalt na het wakker worden
            console.log("Slaapscore: ", scoreSlaap);
        } else {
            clearInterval(afnameSlaap); // Stop de afnametimer als slaapscore 0 is bereikt
        }
    }, 10); // Interval van 10 milliseconden
}

function startHongerTimer() {
    toenameHonger = setInterval(() => {
        if (scoreHonger < 100) {
            scoreHonger += 0.20; // Hongerscore stijgt
            progressHonger.value = scoreHonger;
            console.log("Hongerscore: ", scoreHonger);
        } else {
            clearInterval(toenameHonger); // Stop de timer als maximale hongerscore is bereikt
            alert("Nijntje heeft genoeg gegeten!");
        }
    }, 10); // Interval van 10 milliseconden
}

function stopHongerTimer() {
    clearInterval(toenameHonger); // Stop de hongertimer
    afnameHonger = setInterval(() => {
        if (scoreHonger > 0) {
            scoreHonger -= 0.020; // Hongerscore daalt na het eten
            progressHonger.value = scoreHonger;
            console.log("Hongerscore: ", scoreHonger);
        } else {
            clearInterval(afnameHonger); // Stop de afnametimer als hongerscore 0 is bereikt
        }
    }, 10); // Interval van 10 milliseconden
}

function startPlezierTimer() {
    toenamePlezier = setInterval(() => {
        if (scorePlezier < 100) {
            scorePlezier += 0.20; // Plezierscore stijgt
            progressPlezier.value = scorePlezier;
            console.log("Plezierscore: ", scorePlezier);
        } else {
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
            console.log("Plezierscore: ", scorePlezier);
        } else {
            clearInterval(afnamePlezier); // Stop de afnametimer als plezierscore 0 is bereikt
        }
    }, 10); // Interval van 10 milliseconden
}

// Kleding: functies om de kleding van Nijntje te veranderen
function draagRoze() {
    if (nijntjeStatus === "idle") {
        nijntjeStatus = "roze";
        showRoze(); // Toon Nijntje in roze kleding
        console.log("Draag roze");
    } else {
        nijntjeStatus = "idle";
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
}

function draagRood() {
    if (nijntjeStatus === "idle") {
        nijntjeStatus = "rood";
        showRood(); // Toon Nijntje in rode kleding
        console.log("Draag rood");
    } else {
        nijntjeStatus = "idle";
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
}

function draagFeest() {
    if (nijntjeStatus === "idle") {
        nijntjeStatus = "feest";
        showFeest(); // Toon Nijntje in feestkleding
        console.log("Draag feest");
    } else {
        nijntjeStatus = "idle";
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
}

function draagCool() {
    if (nijntjeStatus === "idle") {
        nijntjeStatus = "cool";
        showCool(); // Toon Nijntje in coole kleding
        console.log("Draag cool");
    } else {
        nijntjeStatus = "idle";
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
}

// Slapen, eten, spelen: functies om Nijntje te laten slapen, eten en spelen
function gaSlapen() {
    if (nijntjeStatus === "idle") {
        nijntjeStatus = "slapen";
        showGaSlapen(); // Nijntje gaat slapen

        startSlaapTimer(); // Start de slaaptimer
    } else if (nijntjeStatus === "slapen") {
        nijntjeStatus = "idle";
        showHeeftGeslapen(); // Nijntje is wakker geworden

        stopSlaapTimer(); // Stopt de slaaptimer
    }
    console.log("Nijntje status: ", nijntjeStatus);
}

function gaEten() {
    if (nijntjeStatus === "idle") {
        nijntjeStatus = "eten";
        showGaEten(); // Nijntje gaat eten

        startHongerTimer(); // Start de hongertimer
    } else if (nijntjeStatus === "eten") {
        nijntjeStatus = "idle";
        showHeeftGegeten(); // Nijntje heeft gegeten

        stopHongerTimer(); // Stop de hongertimer
    }
    console.log("Nijntje status: ", nijntjeStatus);
}

function gaSpelen() {
    if (nijntjeStatus === "idle") {
        nijntjeStatus = "spelen";
        showGaSpelen(); // Nijntje gaat spelen

        startPlezierTimer(); // Start de pleziertimer
    } else if (nijntjeStatus === "spelen") {
        nijntjeStatus = "idle";
        showHeeftGespeeld(); // Nijntje is klaar met spelen

        stopPlezierTimer(); // Stop de pleziertimer
    }
    console.log("Nijntje status: ", nijntjeStatus);
}

// Event listeners voor de kledingknoppen en activiteitenknoppen van Nijntje
knopAudio.addEventListener("click", SpeelPauze);

knopRoze.addEventListener("click", draagRoze);
knopRood.addEventListener("click", draagRood);
knopFeest.addEventListener("click", draagFeest);
knopCool.addEventListener("click", draagCool);

knopSlapen.addEventListener("click", gaSlapen);
knopEten.addEventListener("click", gaEten);
knopSpelen.addEventListener("click", gaSpelen);

// Initialisatie
showDefault();