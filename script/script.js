document.getElementById("loop-button").addEventListener("click", clickPlay);
document.getElementById("drum1").addEventListener("click", clickDrum1);
document.getElementById("drum2").addEventListener("click", clickDrum2);
document.getElementById("drum3").addEventListener("click", clickDrum3);
document.getElementById("drum4").addEventListener("click", clickDrum4);
document.getElementById("drum5").addEventListener("click", clickDrum5);
document.getElementById("drum6").addEventListener("click", clickDrum6);
document.getElementById("drum7").addEventListener("click", clickDrum7);
document.getElementById("drum8").addEventListener("click", clickDrum8);
document.getElementById("drum9").addEventListener("click", clickDrum9);
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
