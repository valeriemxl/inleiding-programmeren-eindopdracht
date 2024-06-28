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
let nijntjeStatus = ["blauw", "roze", "rood", "feest", "cool", "slapen", "net geslapen", "eten", "net gegeten", "spelen", "net gespeeld"];
let eersteStatus = nijntjeStatus[0]

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
}



// Kleding: functies om de kleding van Nijntje te laten zien, tekst te updaten en andere knoppen uit te schakelen
function showBlauw() {
    pMain.textContent = "Wat gaan we nu doen?";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";
}

function showRoze() {
    pMain.textContent = "Nijntje ziet er goed uit!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-roze-strik.png";
}

function showRood() {
    pMain.textContent = "Wauw!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijnjte-rood.png";
}

function showFeest() {
    pMain.textContent = "Nijntje voelt zich feestelijk!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-feest.png";
}

function showCool() {
    pMain.textContent = "Nijntje ziet er super cool uit!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-cool.png";
}


// Slapen, eten, spelen: functies om de status van Nijntje en knoppen aan te passen wanneer ze gaat slapen, eten of spelen
function showGaSlapen() {
    pMain.textContent = "Nijntje is aan het slapen";
    pSlapen.textContent = "Stop";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/slapen.jpeg";
}

function showHeeftGeslapen() {
    pMain.textContent = "Nijntje heeft heerlijk geslapen";
    pSlapen.textContent = "Slapen";
    progressSlaap.value = scoreSlaap;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";
}

function showGaEten() {
    pMain.textContent = "Nijntje is aan het eten";
    pEten.textContent = "Stop";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/eten.jpeg";
}

function showHeeftGegeten() {
    pMain.textContent = "Nijntje heeft goed gegeten";
    pEten.textContent = "Eten";
    progressHonger.value = scoreHonger;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";
}

function showGaSpelen() {
    pMain.textContent = "Nijntje is aan het spelen"
    pSpelen.textContent = "Stop"
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/spelen.jpeg"
}

function showHeeftGespeeld() {
    pMain.textContent = "Nijntje heeft lekker gespeeld";
    pSpelen.textContent = "Spelen";
    progressPlezier.value = scorePlezier;
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png";
}


// Audio: functie om audio af te laten spelen en te laten stoppen
function SpeelPauze() {
    if (audio.paused) {
        audio.play();
        knopAudio.textContent = "Pauzeer muziek";
    } else {
        audio.pause();
        knopAudio.textContent = "Speel muziek af";
    }
}


/* COMMENTAAR: 
    // Timers: functies om de timers voor slaap, eten en plezier te starten en stoppen.
*/

/* BRONNEN: 
    // ChatGPT --> Prompt: Hoe zorg ik ervoor dat de timer stopt met oplopen en langzaam gaat aflopen als Nijntje stopt met slapen? En leg uit.
*/

function startSlaapTimer() { //
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
    if (nijntjeStatus == 1) {
        nijntjeStatus = 0;
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
    else {
        nijntjeStatus = 1;
        showRoze(); // Toon Nijntje in roze kleding
    }
}

function draagRood() {
    if (nijntjeStatus == 2) {
        nijntjeStatus = 0;
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
    else {
        nijntjeStatus = 2;
        showRood(); // Toon Nijntje in rode kleding
    }
}

function draagFeest() {
    if (nijntjeStatus == 3) {
        nijntjeStatus = 0;
        showBlauw(); // Toon Nijnjte in blauwe kleding
    }
    else {
        nijntjeStatus = 3;
        showFeest(); // Toon Nijntje in feestkleding
    }
}

function draagCool() {
    if (nijntjeStatus == 4) {
        nijntjeStatus = 0;
        showBlauw(); // Toon Nijnjte in blauwe kleding
    }
    else {
        nijntjeStatus = 4;
        showCool(); // Toon Nijntje in coole kleding
    }
}



// Slapen, eten, spelen: functies om Nijntje te laten slapen, eten en spelen
function gaSlapen() {
    if (nijntjeStatus == 5) {
        nijntjeStatus = 6;
        showHeeftGeslapen(); // Nijntje wordt wakker

        stopSlaapTimer(); // Start de slaaptimer

        //Schakel andere knoppen uit tijdens het slapen
        knopRoze.disabled = false;
        knopRood.disabled = false;
        knopFeest.disabled = false;
        knopCool.disabled = false;

        knopEten.disabled = false;
        knopSpelen.disabled = false;
    }
    else {
        nijntjeStatus = 5;
        showGaSlapen(); // Nijntje gaat slapen

        startSlaapTimer(); // Start de slaaptimer

        knopRoze.disabled = true;
        knopRood.disabled = true;
        knopFeest.disabled = true;
        knopCool.disabled = true;

        knopEten.disabled = true;
        knopSpelen.disabled = true;
    }
}

// ----- Met hulp van de oom van mijn vriend ----- //
function gaEten() {
    if (nijntjeStatus == 7) {
        nijntjeStatus = 8;

        showHeeftGegeten(); // Nijntje heeft gegeten
        stopHongerTimer(); // Stop de hongertimer

        // Schakelt alle overige knoppen weer in
        knopRoze.disabled = false;
        knopRood.disabled = false;
        knopFeest.disabled = false;
        knopCool.disabled = false;

        knopSlapen.disabled = false;
        knopSpelen.disabled = false;
    }
    else {
        nijntjeStatus = 7;

        showGaEten(); // Nijntje gaat eten
        startHongerTimer(); // Start de hongertimer


        knopRoze.disabled = true;
        knopRood.disabled = true;
        knopFeest.disabled = true;
        knopCool.disabled = true;

        knopSlapen.disabled = true;
        knopSpelen.disabled = true;
    }
}

function gaSpelen() {
    if (nijntjeStatus == 9) {
        nijntjeStatus = 10;

        showHeeftGespeeld(); // Nijntje is klaar met spelen
        stopPlezierTimer(); // Stop de pleziertimer

        // Schakelt alle overige knoppen in
        knopRoze.disabled = false;
        knopRood.disabled = false;
        knopFeest.disabled = false;
        knopCool.disabled = false;

        knopSlapen.disabled = false;
        knopEten.disabled = false;
    }
    else {
        nijntjeStatus = 9;

        showGaSpelen(); // Nijntje gaat spelen
        startPlezierTimer(); // Start de pleziertimer

        // Schakelt alle knoppen uit
        knopRoze.disabled = true;
        knopRood.disabled = true;
        knopFeest.disabled = true;
        knopCool.disabled = true;

        knopSlapen.disabled = true;
        knopEten.disabled = true;
    }
}



// Event listeners voor de kledingknoppen en activiteitenknoppen van Nijntje
knopAudio.addEventListener("click", SpeelPauze)

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

De bronnen voor de afbeeldingen staan in het HTML- en CSS-bestand
Voor de afbeeldingen van de kleren heb ik Nijntje blauw gepakt en in Illustrator ge-edit

Alle bronnen voor het audio onderdeel
    https://www.youtube.com/watch?v=3yrMlCGri8U (audio bron)
    https://www.movavi.com/audio-converter/convert-aifc-to-mp3.html (audio converter)
    https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click (audio)
    https://stackoverflow.com/questions/9419263/how-to-play-audio (audio)
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio (audio)
    https://bito.ai/resources/javascript-play-mp3-javascript-explained/#:~:text=First%2C%20create%20an%20HTML%20page,function%20in%20the%20script%20tag (audio)
    https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48 (audio)
.

Alle bronnen voor de progress bar
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress (progress bar)
    https://stackoverflow.com/questions/43524985/how-to-get-change-value-of-html5-progress-bar (progress bar)
.


Alle bronnen voor de (interval)timers en de alerts
    ChatGPT (interval timer)
    https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously (timer)
    https://www.altcademy.com/codedb/examples/create-a-timer-that-creates-an-alert-in-10-seconds-in-javascript (timer alert)
    https://www.w3schools.com/jsref/met_win_setinterval.asp (interval timer)
.

Alle bronnen voor het uitschakelen van knoppen
    https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button (knoppen disabelen)
.

Overige bronnen
    https://chat.openai.com/chat.
    https://www.youtube.com/watch?v=KB6CRow6Ulw&ab_channel=BenCodeZen (???)
    https://codepen.io/supercooldog5/pen/xxxBwdV (???)
.
*/
