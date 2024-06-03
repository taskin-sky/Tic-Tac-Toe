let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let playerO = document.querySelector("#pObtn");
let playerX = document.querySelector("#pXbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let hidden = document.querySelector(".hidden");
let drawmsg = document.querySelector("#drawmsg");

let turnO = true;
let clickCount = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO == true) {
            box.innerText = "O";

            playerO.disabled = true;
            playerX.disabled = false;

            turnO = false;
        } 
        
        else {
            box.innerText = "X";
            playerX.disabled = true;
            playerO.disabled = false;

            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
        
        console.log(clickCount);
        
    })

})




const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide");
    hidden.classList.add("hidden");
    clickCount = 0;
    console.log(clickCount);
    
};




const enableBoxes = () => {
    for ( box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "skyblue";
        playerO.disabled = false; 
        playerX.disabled = false;
    }
};




const disableBoxes = () => {
    for ( box of boxes) {
        box.disabled = true;
    }
};




const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
};




const checkWinner = () => {
    clickCount++;
    for(pattern of winPatterns) {
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;
    
        if (pos0Val !="" && pos1Val !="" && pos2Val != "") {
            if (pos0Val === pos1Val && pos1Val === pos2Val) {
                playerO.disabled = true; 
                playerX.disabled = true;

                boxes[pattern[0]].style.backgroundColor = "rgb(233, 250, 0)";
                boxes[pattern[1]].style.backgroundColor = "rgb(233, 250, 0)";
                boxes[pattern[2]].style.backgroundColor = "rgb(233, 250, 0)";
                
                clickCount=100;
                showWinner(pos1Val);
            }
        }
    }
    if (clickCount == 9) {
        console.log("draw");
        // drawmsg.innerText = "The game is DRAW";
        // drawmsg.style.backgroundColor = "red";
        hidden.classList.remove("hidden");
        playerO.disabled = true; 
        playerX.disabled = true;
    }
};



newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

