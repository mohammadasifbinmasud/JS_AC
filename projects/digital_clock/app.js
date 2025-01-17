let clock = document.querySelector(".clock");

function updateClock() {
    let now = new Date();
    if (clock) {
        clock.textContent = now.toLocaleTimeString();
    }
}

setInterval(updateClock, 1000);
