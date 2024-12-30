let screen = document.querySelector(".screen");
let on = document.querySelector("#on");
let off = document.querySelector("#off");

let btn = querySelectorAll(".btn");

on.addEventListener("click", () => {
    screen.innerText = `0`;
});
off.addEventListener("click", () => {
    screen.innerText = ``;
});

