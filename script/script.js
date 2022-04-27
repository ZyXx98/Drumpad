document.getElementById("loop-button").addEventListener("click", clickPlay);

function clickPlay() {
    const element = document.getElementById("loop-button");
    console.log(element);
    if (element.className == "loop-start-button") {
        element.className = "loop-pause-button";
    } else {
        element.className = "loop-start-button";
    }
};
