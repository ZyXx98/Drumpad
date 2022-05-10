document.getElementById("loop-button").addEventListener("click", clickPlay);
document.body.addEventListener("keydown", clickDrum);
document.getElementById("drum1").addEventListener("click", clickDrum1);
document.getElementById("drum2").addEventListener("click", clickDrum2);
document.getElementById("drum3").addEventListener("click", clickDrum3);
document.getElementById("drum4").addEventListener("click", clickDrum4);
document.getElementById("drum5").addEventListener("click", clickDrum5);
document.getElementById("drum6").addEventListener("click", clickDrum6);
document.getElementById("drum7").addEventListener("click", clickDrum7);
document.getElementById("drum8").addEventListener("click", clickDrum8);
document.getElementById("drum9").addEventListener("click", clickDrum9);
document.getElementById("dropdownbutton1").addEventListener("click", changeSound);
document.getElementById("dropdownbutton2").addEventListener("click", changeSound2);
document.getElementById("dropdownbutton3").addEventListener("click", changeSound3);
document.getElementById("dropdownbutton4").addEventListener("click", changeSound4);
document.getElementById("dropdownbutton5").addEventListener("click", changeSound5);
document.getElementById("dropdownbutton6").addEventListener("click", changeSound6);
document.getElementById("dropdownbutton7").addEventListener("click", changeSound7);
document.getElementById("dropdownbutton8").addEventListener("click", changeSound8);
document.getElementById("dropdownbutton9").addEventListener("click", changeSound9);
function clickPlay() {
    const element = document.getElementById("loop-button");
    if (element.className == "loop-start-button") {
        element.className = "loop-pause-button";
        element.innerHTML = "Pause";
    } else {
        element.className = "loop-start-button";
        element.innerHTML = "Play";
    }
};

function clickDrum1() {
    console.log("drum1");
    document.getElementById("bassdrum").play();
}
function clickDrum2() {
    console.log("drum2");
    document.getElementById("snaredrum").play();
}
function clickDrum3() {
    console.log("drum3");
    document.getElementById("hihat").play();
}
function clickDrum4() {
    console.log("drum4");
    document.getElementById("tom1").play();
}
function clickDrum5() {
    console.log("drum5");
    document.getElementById("tom2").play();
}
function clickDrum6() {
    console.log("drum6");
    document.getElementById("tom3").play();
}
function clickDrum7() {
    console.log("drum7");
    document.getElementById("hihat-open").play();
}
function clickDrum8() {
    console.log("drum8");
    document.getElementById("ridecymbal").play();
}
function clickDrum9() {
    console.log("drum9");
    document.getElementById("crashcymbal").play();
}
function clickDrum(event) {
    if (event.which == 49) {
        console.log("drum1");
        document.getElementById("bassdrum").play();
    } else if (event.which == 50) {
        console.log("drum2");
        document.getElementById("snaredrum").play();
    } else if (event.which == 51) {
        console.log("drum3");
        document.getElementById("hihat").play();
    } else if (event.which == 52) {
        console.log("drum4");
        document.getElementById("tom1").play();
    } else if (event.which == 53) {
        console.log("drum5");
        document.getElementById("tom2").play();
    } else if (event.which == 54) {
        console.log("drum6");
        document.getElementById("tom3").play();
    } else if (event.which == 55) {
        console.log("drum7");
        document.getElementById("hihat-open").play();
    } else if (event.which == 56) {
        console.log("drum8");
        document.getElementById("ridecymbal").play();
    } else if (event.which == 57) {
        console.log("drum9");
        document.getElementById("crashcymbal").play();
    }
}

function changeSound1() {
    const element = document.getElementById("changeBassdrum");
    if (element.className == "hidden") {
        element.className = "shown";
        document.getElementById("changeSnaredrum").className = "hidden";
        document.getElementById("changeHiHat").className = "hidden";
        document.getElementById("changeTom1").className = "hidden";
        document.getElementById("changeTom2").className = "hidden";
        document.getElementById("changeTom3").className = "hidden";
        document.getElementById("changeHiHat-open").className = "hidden";
        document.getElementById("changeRidecymbal").className = "hidden";
        document.getElementById("changeCrashcymbal").className = "hidden";
    } else {
        element.className = "hidden";
    }
}
function changeSound2() {
    const element = document.getElementById("changeSnaredrum");
    if (element.className == "hidden") {
        element.className = "shown";
        document.getElementById("changeBassdrum").className = "hidden";
        document.getElementById("changeHiHat").className = "hidden";
        document.getElementById("changeTom1").className = "hidden";
        document.getElementById("changeTom2").className = "hidden";
        document.getElementById("changeTom3").className = "hidden";
        document.getElementById("changeHiHat-open").className = "hidden";
        document.getElementById("changeRidecymbal").className = "hidden";
        document.getElementById("changeCrashcymbal").className = "hidden";
    } else {
        element.className = "hidden";
    }
}
function changeSound3() {
    const element = document.getElementById("changeHiHat");
    if (element.className == "hidden") {
        element.className = "shown";
        document.getElementById("changeBassdrum").className = "hidden";
        document.getElementById("changeSnaredrum").className = "hidden";
        document.getElementById("changeTom1").className = "hidden";
        document.getElementById("changeTom2").className = "hidden";
        document.getElementById("changeTom3").className = "hidden";
        document.getElementById("changeHiHat-open").className = "hidden";
        document.getElementById("changeRidecymbal").className = "hidden";
        document.getElementById("changeCrashcymbal").className = "hidden";
    } else {
        element.className = "hidden";
    }
}
function changeSound4() {
    const element = document.getElementById("changeTom1");
    if (element.className == "hidden") {
        element.className = "shown";
        document.getElementById("changeBassdrum").className = "hidden";
        document.getElementById("changeSnaredrum").className = "hidden";
        document.getElementById("changeHiHat").className = "hidden";
        document.getElementById("changeTom2").className = "hidden";
        document.getElementById("changeTom3").className = "hidden";
        document.getElementById("changeHiHat-open").className = "hidden";
        document.getElementById("changeRidecymbal").className = "hidden";
        document.getElementById("changeCrashcymbal").className = "hidden";
    } else {
        element.className = "hidden";
    }
}
function changeSound5() {
    const element = document.getElementById("changeTom2");
    if (element.className == "hidden") {
        element.className = "shown";
        document.getElementById("changeBassdrum").className = "hidden";
        document.getElementById("changeSnaredrum").className = "hidden";
        document.getElementById("changeHiHat").className = "hidden";
        document.getElementById("changeTom1").className = "hidden";
        document.getElementById("changeTom3").className = "hidden";
        document.getElementById("changeHiHat-open").className = "hidden";
        document.getElementById("changeRidecymbal").className = "hidden";
        document.getElementById("changeCrashcymbal").className = "hidden";
    } else {
        element.className = "hidden";
    }
}
function changeSound6() {
    const element = document.getElementById("changeTom3");
    if (element.className == "hidden") {
        element.className = "shown";
        document.getElementById("changeBassdrum").className = "hidden";
        document.getElementById("changeSnaredrum").className = "hidden";
        document.getElementById("changeHiHat").className = "hidden";
        document.getElementById("changeTom1").className = "hidden";
        document.getElementById("changeTom2").className = "hidden";
        document.getElementById("changeHiHat-open").className = "hidden";
        document.getElementById("changeRidecymbal").className = "hidden";
        document.getElementById("changeCrashcymbal").className = "hidden";
    } else {
        element.className = "hidden";
    }
}
function changeSound7() {
    const element = document.getElementById("changeHiHat-open");
    if (element.className == "hidden") {
        element.className = "shown";
        document.getElementById("changeBassdrum").className = "hidden";
        document.getElementById("changeSnaredrum").className = "hidden";
        document.getElementById("changeHiHat").className = "hidden";
        document.getElementById("changeTom1").className = "hidden";
        document.getElementById("changeTom2").className = "hidden";
        document.getElementById("changeTom3").className = "hidden";
        document.getElementById("changeRidecymbal").className = "hidden";
        document.getElementById("changeCrashcymbal").className = "hidden";
    } else {
        element.className = "hidden";
    }
}
function changeSound8() {
    const element = document.getElementById("changeRidecymbal");
    if (element.className == "hidden") {
        element.className = "shown";
        document.getElementById("changeBassdrum").className = "hidden";
        document.getElementById("changeSnaredrum").className = "hidden";
        document.getElementById("changeHiHat").className = "hidden";
        document.getElementById("changeTom1").className = "hidden";
        document.getElementById("changeTom2").className = "hidden";
        document.getElementById("changeTom3").className = "hidden";
        document.getElementById("changeHiHat-open").className = "hidden";
        document.getElementById("changeCrashcymbal").className = "hidden";
    } else {
        element.className = "hidden";
    }
}
function changeSound9() {
    const element = document.getElementById("changeCrashcymbal");
    if (element.className == "hidden") {
        element.className = "shown";
        document.getElementById("changeBassdrum").className = "hidden";
        document.getElementById("changeSnaredrum").className = "hidden";
        document.getElementById("changeHiHat").className = "hidden";
        document.getElementById("changeTom1").className = "hidden";
        document.getElementById("changeTom2").className = "hidden";
        document.getElementById("changeTom3").className = "hidden";
        document.getElementById("changeHiHat-open").className = "hidden";
        document.getElementById("changeRidecymbal").className = "hidden";
    } else {
        element.className = "hidden";
    }
}

function changeSound() {
    const elementList = document.querySelectorAll("div.query");
    console.log(elementList);
    if () {

    } else {

    }
}