function draagRoze() {
    if (nijntjeStatus = true) {
        //nijntjeStatus = true;
        showRoze();
    }
    else {
        nijntjeStatus = false;
        showBlauw();
    }
}

function draagRood() {
    if (nijntjeStatus == true) {
        //nijntjeStatus = false;
        showRood();
    }
    else {
        nijntjeStatus = false;
        showBlauw();
    }
}

function draagFeest() {
    if (nijntjeStatus == true) {
        //nijntjeStatus = false;
        showFeest();
    }
    else {
        nijntjeStatus = false;
        showBlauw();
    }
}

function draagCool() {
    if (nijntjeStatus == true) {
        //nijntjeStatus = false;
        showCool();
    }
    else {
        nijntjeStatus = false;
        showBlauw();
    }
}

// -----------------------------------

let nijntjeStatus = true;


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
    if (nijntjeStatus ) {
        nijntjeStatus = false;
        showCool();
    }
    else {
        nijntjeStatus = true;
        showBlauw();
    }
}