document.getElementById("loop-button").addEventListener("click", clickPlay);
document.getElementsByClassName("drum").addEventListener("click", clickDrum);

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

function clickDrum() {
    console.log("drum");
}