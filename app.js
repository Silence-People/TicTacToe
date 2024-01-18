let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelectorAll(".reset-button");
let reset = newBtn[1];
let newButton = newBtn[0];
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");


 const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 }

let turn0 = true;
let winPatterns = [[ 0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
            if(turn0){
                box.innerText = "X";
                turn0 = false;
            }else{
                box.innerText = "O";
                turn0 = true;
            }
        box.disabled = true;
        
        checkWinner();
    });
    }
    );
    const disableBoxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    };

    const enableBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    };
    const showWinner = (winner) => {
        msg.innerText = "Congratulations, the winner is "+ winner;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }

    const checkWinner = () => {
       for (let pattern of winPatterns) {
         let pos1 = boxes[pattern[0]].innerText; 
         let pos2 = boxes[pattern[1]].innerText; 
         let pos3 = boxes[pattern[2]].innerText;   
    
    if( pos1 != "" && pos2!= "" && pos3!= ""){
        if (pos1 == pos2 && pos2 == pos3){
            console.log("Winner : " + pos1);
            showWinner(pos1);
    }
}
    }
}


reset.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);