/*
De bronnen voor de afbeeldingen staan in het HTML- en CSS-bestand
Voor de afbeeldingen van de kleren heb ik Nijntje blauw gepakt en in Illustrator ge-edit

Bronnen toegepast op al m'n code
    https://www.tutorialspoint.com/how-to-call-a-function-that-returns-another-function-in-javascript#:~:text=In%20JavaScript%2C%20you%20can%20call,variable%20name%2C%20followed%20by%20parentheses.
    https://www.shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener (afbeelding wijzigen als je erop klikt)
    ChatGPT --> Promt: ik blijf maar een error in mijn javascript hebben als ik in de console check. hoe kom ik hier vanaf en wat betekent het? de error is: 
    Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received (--> het bleken mijn browser extenties te zijn)
    DLO vaksite --> alle theorie van de slides en filmpjes etc. en alle oefeningen
    Met behulp van de oom van mijn vriend (Barry de Roode)
.
*/



// ----- CODE JAVASCRIPT NIJNTJE TAMAGOTCHI ----- //



/*
CONSTANTEN: verwijzen naar verschillende elementen in de HTML. 

BRONNEN:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
    DLO vaksite --> alle theorie van de slides en filmpjes etc. en alle oefeningen
*/

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



/*
VARIABELEN: om de status van Nijntje en haar activiteitenscores bij te houden

BRONNEN:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
    https://www.w3schools.com/js/js_arrays.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    https://www.w3schools.com/jsref/jsref_obj_array.asp
    ChatGPT --> Promt: Hoe zorg ik ervoor dat nijnte niet weer blauw wordt als ik op een nieuwe knop druk? Leg uit hoe het werkt.
    DLO vaksite --> alle theorie van de slides en filmpjes etc. en alle oefeningen
    Met behulp van de oom van mijn vriend (Barry de Roode)
*/

// Array die alle mogelijke statussen van Nijntje definieert
let nijntjeStatus = ["blauw", "roze", "rood", "feest", "cool", "slapen", "net geslapen", "eten", "net gegeten", "spelen", "net gespeeld"];
let eersteStatus = nijntjeStatus[0]; // Begint met de eerste waarde van nijntjeStatus (blauw)

// Initialisatie van timers voor slaap, honger en plezier
let scoreSlaap = 0;
let toenameSlaap;
let afnameSlaap;

let scoreHonger = 0;
let toenameHonger;
let afnameHonger;

let scorePlezier = 0;
let toenamePlezier;
let afnamePlezier;



/*
AUDIO FUNCTIE: om audio af te spelen of te pauzeren

BRONNEN:
https://www.youtube.com/watch?v=3yrMlCGri8U (audio source)
https://www.movavi.com/audio-converter/convert-aifc-to-mp3.html (audio converter)
https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
https://stackoverflow.com/questions/9419263/how-to-play-audio
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
https://bito.ai/resources/javascript-play-mp3-javascript-explained/#:~:text=First%2C%20create%20an%20HTML%20page,function%20in%20the%20script%20tag
https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
*/

function SpeelPauze() {
    if (audio.paused) {
        audio.play(); // Start de audio
        knopAudio.textContent = "Pauzeer muziek"; // Verander de tekst van de knop naar "Pauzeer muziek"
    }
    else {
        audio.pause(); // Pauzeer de audio
        knopAudio.textContent = "Speel muziek af"; // Verander de tekst van de knop naar "Speel muziek af"
    }
}



/*
DEFAULT FUNCTIE: functie voor de eerste weergave van de tekst en afbeelding van Nijntje

BRONNEN:
    https://www.tutorialspoint.com/how-to-call-a-function-that-returns-another-function-in-javascript#:~:text=In%20JavaScript%2C%20you%20can%20call,variable%20name%2C%20followed%20by%20parentheses.
    https://www.shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener
    ChatGPT --> Promt: hoe zorg ik ervoor dat nijnte niet weer blauw wordt als ik op een nieuwe knop druk? Leg uit hoe het werkt.
    DLO vaksite --> alle theorie van de slides en filmpjes etc. en alle oefeningen 
    Met behulp van de oom van mijn vriend (Barry de Roode)
*/

function showDefault() {
    pMain.textContent = "Klik op een knop om te beginnen"; // Verander de hoofdtekst
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png"; // Verander de afbeelding van Nijntje naar standaard blauw
}



/*
INTERVAL TIMER FUNCTIES: om de timers te starten (met afnemen/oplopen) en stoppen

BRONNEN:
    https://www.tutorialspoint.com/how-to-call-a-function-that-returns-another-function-in-javascript#:~:text=In%20JavaScript%2C%20you%20can%20call,variable%20name%2C%20followed%20by%20parentheses.
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
    https://stackoverflow.com/questions/43524985/how-to-get-change-value-of-html5-progress-bar
    https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously (timer)
    https://www.altcademy.com/codedb/examples/create-a-timer-that-creates-an-alert-in-10-seconds-in-javascript (timer alert)
    https://www.w3schools.com/jsref/met_win_setinterval.asp (interval timer)
    ChatGPT --> Prompt: Hoe zorg ik ervoor dat de timer stopt met oplopen en langzaam gaat aflopen als Nijntje stopt met slapen? Leg uit hoe het werkt.
    DLO vaksite --> alle theorie van de slides en filmpjes etc. en alle oefeningen
    Met behulp van de oom van mijn vriend (Barry de Roode)
*/

// SLAAPTIMER FUNCTIES
// Starten slaaptimer
function startSlaapTimer() {
    clearInterval(afnameSlaap); // Zorgt ervoor dat afname interval eerst gestopt is
    toenameSlaap = setInterval(startToenameSlaap, 10); // Start een timer om elke 10 milliseconden de slaapscore te verhogen
}

// Stoppen slaaptimer
function stopSlaapTimer() {
    clearInterval(toenameSlaap); // // Stop de toename van de slaapscore
    clearInterval(afnameSlaap)// Zorgt ervoor dat afname interval eerst gestopt is
    afnameSlaap = setInterval(startAfnameSlaap, 10); // Start een timer om elke 10 milliseconden de slaapscore te verlagen
}

// Slaapscore verhogen
function startToenameSlaap() {
    if (scoreSlaap < 100) { // Zodra de slaapscore kleiner is dan 100
        scoreSlaap += 0.20; // Verhoog de slaapscore met 0.20
        progressSlaap.value = scoreSlaap; // Update de voortgangsbalk voor slaap
    }
    else {
        clearInterval(toenameSlaap); // Stop de toename als de slaapscore 100 bereikt heeft
        alert("Nijntje heeft genoeg geslapen!"); // Geef een melding dat Nijntje genoeg heeft geslapen
    }
}

// Slaapscore verlagen
function startAfnameSlaap() {
    if (scoreSlaap > 0) { // Zodra de slaapscore groter is dan 0
        scoreSlaap -= 0.020; // Verlaag de slaapscore met 0.020
        progressSlaap.value = scoreSlaap; // Update de voortgangsbalk voor slaap
    }
    else {
        clearInterval(afnameSlaap); // Stop de afname als de score 0 bereikt heeft
    }
}

// ----- Soortgelijk commentaar voor honger en plezier timers, verhogingen en afnamen zijn vergelijkbaar ----- //

// HONGERTIMER FUNCTIES
function startHongerTimer() {
    clearInterval(afnameHonger);
    toenameHonger = setInterval(startToenameHonger, 10);
}

function stopHongerTimer() {
    clearInterval(toenameHonger);
    clearInterval(afnameHonger);
    afnameHonger = setInterval(startAfnameHonger, 10);
}

function startToenameHonger() {
    if (scoreHonger < 100) {
        scoreHonger += 0.20;
        progressHonger.value = scoreHonger;
    }
    else {
        clearInterval(toenameHonger);
        alert("Nijntje heeft genoeg gegeten!");
    }
}

function startAfnameHonger() {
    if (scoreHonger > 0) {
        scoreHonger -= 0.020;
        progressHonger.value = scoreHonger;
    }
    else {
        clearInterval(afnameHonger);
    }
}

// PLEZIERTIMER FUNCTIES
function startPlezierTimer() {
    clearInterval(afnamePlezier);
    toenamePlezier = setInterval(startToenamePlezier, 10);
}

function stopPlezierTimer() {
    clearInterval(toenamePlezier);
    clearInterval(afnamePlezier);
    afnamePlezier = setInterval(startAfnamePlezier, 10);
}

function startToenamePlezier() {
    if (scorePlezier < 100) {
        scorePlezier += 0.20;
        progressPlezier.value = scorePlezier;
    }
    else {
        clearInterval(toenamePlezier);
        alert("Nijntje heeft genoeg gespeeld!");
    }
}

function startAfnamePlezier() {
    if (scorePlezier > 0) {
        scorePlezier -= 0.020;
        progressPlezier.value = scorePlezier;
    }
    else {
        clearInterval(afnamePlezier);
    }
}



/*
KLEDING FUNCTIES: om de kleding van Nijntje te laten zien, tekst te updaten en andere knoppen uit te schakelen
Soortgelijk commentaar voor rood, feest en cool

BRONNEN:
    https://www.tutorialspoint.com/how-to-call-a-function-that-returns-another-function-in-javascript#:~:text=In%20JavaScript%2C%20you%20can%20call,variable%20name%2C%20followed%20by%20parentheses.
    https://www.shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener 
    ChatGPT --> Promt: hoe zorg ik ervoor dat nijnte niet weer blauw wordt als ik op een nieuwe knop druk?
    DLO vaksite --> alle theorie van de slides en filmpjes etc. en alle oefeningen
    Met behulp van de oom van mijn vriend (Barry de Roode)
*/

// BLAUWE KLEDING FUNCTIE
// Verander tekst en afbeelding van Nijntje
function showBlauw() {
    pMain.textContent = "Wat gaan we nu doen?"; // Verander de hoofdtekst
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png"; // Verander de afbeelding van Nijntje naar blauw
}

// ROZE OUTFIT FUNCTIES
// Verander tekst en afbeelding van Nijntje
function showRoze() {
    pMain.textContent = "Nijntje ziet er goed uit!"; // Verander de hoofdtekst
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-roze-strik.png"; // Verander de afbeelding van Nijntje naar roze
}

// Verander kleding naar roze kleur of terug naar blauw
function draagRoze() {
    if (nijntjeStatus == 1) { // Als huidige status roze is
        nijntjeStatus = 0; // Verander naar blauw
        showBlauw(); // Toon Nijntje in blauwe kleding
    }
    else {
        nijntjeStatus = 1; // Verander naar roze
        showRoze(); // Toon Nijntje in roze kleding
    }
}

// ----- Soortgelijk commentaar voor rood, feest en cool ----- //

// RODE OUTFIT FUNCTIES
function showRood() {
    pMain.textContent = "Wauw!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijnjte-rood.png";
}

function draagRood() {
    if (nijntjeStatus == 2) {
        nijntjeStatus = 0;
        showBlauw();
    }
    else {
        nijntjeStatus = 2;
        showRood();
    }
}

// FEESTOUTFIT FUNCTIES
function showFeest() {
    pMain.textContent = "Nijntje voelt zich feestelijk!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-feest.png";
}

function draagFeest() {
    if (nijntjeStatus == 3) {
        nijntjeStatus = 0;
        showBlauw();
    }
    else {
        nijntjeStatus = 3;
        showFeest();
    }
}

// COOLE OUTFIT FUNCTIES
function showCool() {
    pMain.textContent = "Nijntje ziet er super cool uit!";
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-cool.png";
}

function draagCool() {
    if (nijntjeStatus == 4) {
        nijntjeStatus = 0;
        showBlauw();
    }
    else {
        nijntjeStatus = 4;
        showCool();
    }
}



/*
ACTIVITEITEN FUNCTIES: om de status van Nijntje en knoppen aan te passen wanneer ze gaat slapen, eten of spelen

BRONNEN:
    https://www.tutorialspoint.com/how-to-call-a-function-that-returns-another-function-in-javascript#:~:text=In%20JavaScript%2C%20you%20can%20call,variable%20name%2C%20followed%20by%20parentheses.
    https://www.shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener 
    https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
    ChatGPT --> Promt: hoe zorg ik ervoor dat nijnte niet weer blauw wordt als ik op een nieuwe knop druk?
    DLO vaksite --> alle theorie van de slides en filmpjes etc. en alle oefeningen
    Met behulp van de oom van mijn vriend (Barry de Roode)
*/

// SLAPEN ACTIVITEIT FUNCTIES
// Veranderd tekst en afbeelding naar slapen
function showGaSlapen() {
    pMain.textContent = "Nijntje is aan het slapen"; // Verander de hoofdtekst
    pSlapen.textContent = "Stop"; // Verander de tekst van de slapenknop
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/slapen.jpeg"; // Verander de afbeelding van Nijntje naar slapen
}

// Veranderd tekst en afbeelding terug na het slapen
function showHeeftGeslapen() {
    pMain.textContent = "Nijntje heeft heerlijk geslapen"; // Verander de hoofdtekst
    pSlapen.textContent = "Slapen"; // Verander de tekst van de slaapknop
    progressSlaap.value = scoreSlaap; // Update de voortgangsbalk voor slaap
    nijntjeBlauw.src = "/inleiding-programmeren-eindopdracht/images/nijntje-blauw.png"; // Verander de afbeelding van Nijntje naar blauw
}

// Functie om Nijntje te laten slapen of wakker te maken
function gaSlapen() {
    if (nijntjeStatus == 5) { // Als nijntje wakker is 
        nijntjeStatus = 6; // Verander naar slapen status
        showHeeftGeslapen(); // Toon dat Nijntje heeft geslapen

        stopSlaapTimer(); // Stop de slaaptimer

        // Activeer alle knoppen
        knopRoze.disabled = false;
        knopRood.disabled = false;
        knopFeest.disabled = false;
        knopCool.disabled = false;

        knopSlapen.disabled = false;
        knopEten.disabled = false;
        knopSpelen.disabled = false;
    }
    else {
        nijntjeStatus = 5; // Verander naar wakker status
        showGaSlapen(); // Toon dat Nijntje gaat slapen

        startSlaapTimer(); // Start de slaaptimer

        // Deactiveer alle knoppen behalve slapen
        knopRoze.disabled = true;
        knopRood.disabled = true;
        knopFeest.disabled = true;
        knopCool.disabled = true;

        knopEten.disabled = true;
        knopSpelen.disabled = true;
    }
}

// ----- Soortgelijk commentaar voor eten en spelen om de activiteit van Nijntje te veranderen en de timers te starten/stoppen. ----- //


// ETEN ACTIVITEIT FUNCTIES
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

function gaEten() {
    if (nijntjeStatus == 7) {
        nijntjeStatus = 8;

        showHeeftGegeten();
        stopHongerTimer();

        knopRoze.disabled = false;
        knopRood.disabled = false;
        knopFeest.disabled = false;
        knopCool.disabled = false;

        knopSlapen.disabled = false;
        knopEten.disabled = false;
        knopSpelen.disabled = false;
    }
    else {
        nijntjeStatus = 7;

        showGaEten();
        startHongerTimer();


        knopRoze.disabled = true;
        knopRood.disabled = true;
        knopFeest.disabled = true;
        knopCool.disabled = true;

        knopSlapen.disabled = true;
        knopSpelen.disabled = true;
    }
}

// SPELEN ACTIVITEIT FUNCTIE
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

function gaSpelen() {
    if (nijntjeStatus == 9) {
        nijntjeStatus = 10;

        showHeeftGespeeld();
        stopPlezierTimer();

        knopRoze.disabled = false;
        knopRood.disabled = false;
        knopFeest.disabled = false;
        knopCool.disabled = false;

        knopSlapen.disabled = false;
        knopEten.disabled = false;
        knopSpelen.disabled = false;
    }
    else {
        nijntjeStatus = 9;

        showGaSpelen();
        startPlezierTimer();

        knopRoze.disabled = true;
        knopRood.disabled = true;
        knopFeest.disabled = true;
        knopCool.disabled = true;

        knopSlapen.disabled = true;
        knopEten.disabled = true;
    }
}



/*
EVENT LISTENERS: voor audio en alle knoppen om functies te koppelen aan hun respectievelijke acties

BRONNEN:
    https://www.w3schools.com/js/js_htmldom_eventlistener.asp
    DLO vaksite --> alle theorie van de slides en filmpjes etc. en alle oefeningen
*/

knopAudio.addEventListener("click", SpeelPauze)

knopRoze.addEventListener("click", draagRoze)
knopRood.addEventListener("click", draagRood)
knopFeest.addEventListener("click", draagFeest)
knopCool.addEventListener("click", draagCool)

knopSlapen.addEventListener("click", gaSlapen)
knopEten.addEventListener("click", gaEten)
knopSpelen.addEventListener("click", gaSpelen)


/*
Volgorde:
1. Constanten
2. Let
3. Function
4. Event Listeners
!!! OVERAL COMMENTAAR !!!
*/
