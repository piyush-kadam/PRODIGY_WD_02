let startTime;
let running = false;
let elapsedTime = 0;
let interval;

function startStop() {
    if (running) {
        running = false;
        document.getElementById("startStopButton").innerHTML = "Start";
        clearInterval(interval);
    } else {
        running = true;
        document.getElementById("startStopButton").innerHTML = "Stop";
        startTime = new Date().getTime() - elapsedTime;
        interval = setInterval(updateStopwatch, 1000);
    }
}

function reset() {
    running = false;
    document.getElementById("startStopButton").innerHTML = "Start";
    clearInterval(interval);
    elapsedTime = 0;
    updateDisplay();
}

function updateStopwatch() {
    elapsedTime = new Date().getTime() - startTime;
    updateDisplay();
}

function updateDisplay() {
    let seconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    let stopwatchElement = document.getElementById("stopwatch");
    stopwatchElement.classList.remove("animated");
    void stopwatchElement.offsetWidth; // Trigger reflow
    stopwatchElement.textContent = formattedTime;
    stopwatchElement.classList.add("animated");
}
