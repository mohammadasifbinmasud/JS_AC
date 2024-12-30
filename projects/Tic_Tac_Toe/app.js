let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");

let turnO = true;
let lastClick = "O";

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

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            box.style.color = "#00ca47";
            turnO = !turnO;
        } else {
            box.innerText = "X";
            box.style.color = "#b0413e";
            turnO = !turnO;
        }
        box.disabled = true;

        checkWinner();
    });
});


const checkWinner = () => {
    for(pattern of winPatterns) {
        let pos1Val = boxes.pattern[0].innerText;
        let pos2Val = boxes.pattern[2].innerText;
        let pos3Val = boxes.pattern[2].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if( pos1Val === pos2Val === pos3Val) {
                let win = document.querySelector(".win");
                win.classList.remove("hide");
            }
        }
    }
}