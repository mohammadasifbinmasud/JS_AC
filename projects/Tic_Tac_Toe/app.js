let body = document.querySelector("body");
let main = document.querySelector("main");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true; 
let winClick = "O";

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

let enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turnO = winClick === "O";
    enableBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
    body.style.backgroundColor = "";
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#00ca47";
        } else {
            box.innerText = "X";
            box.style.color = "#b0413e";
        }
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    if (winner === "O") {
        body.style.backgroundColor = "#00ca47";
        winClick = "O";
    } else {
        body.style.backgroundColor = "#b0413e";
        winClick = "X";
    }
    msg.innerText = `Congrats! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
