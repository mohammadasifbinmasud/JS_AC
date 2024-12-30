let screen = document.querySelector(".screen");
let on = document.querySelector("#on");
let off = document.querySelector("#off");
let buttons = document.querySelectorAll(".btn");

let isOff = true;

function isValidExpression(expression) {
    // Ensure the expression only contains valid characters (digits, operators, parentheses, and spaces)
    return /^[0-9+\-*/(). ]+$/.test(expression);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (isOff) return;

        let buttonText = button.innerText;

        if (buttonText === 'AC') {
            screen.innerText = '0';
        } else if (buttonText === '=') {
            let expression = screen.innerText;
            if (isValidExpression(expression)) {
                screen.innerText = eval(expression);
            } else {
                screen.innerText = 'Error';
            }
        } else {
            if (screen.innerText === '0' || screen.innerText === 'Error') {
                screen.innerText = buttonText;
            } else {
                screen.innerText += buttonText;
            }
        }
    });
});

on.addEventListener("click", () => {
    screen.innerText = `0`;
    isOff = false; 
});

off.addEventListener("click", () => {
    screen.innerText = ``;
    isOff = true;
});
