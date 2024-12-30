let btn = document.querySelector(".btn");
let body = document.querySelector("body");

let isDarkMode = false;

let toggleDarkMode = () => {
    if (isDarkMode) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    isDarkMode = !isDarkMode; // Toggle the state
};

btn.addEventListener("click", toggleDarkMode);
