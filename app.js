let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-button");

let turn0 = true;
let winPatterns = [[ 1, 2, 3], [ 4, 5, 6], [ 7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
console.log(winPatterns);
console.log(boxes);
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
            console.log("Hello: World");
            if(turn0){
                box.innerText = "X";
                turn0 = false;
            }else{
                box.innerText = "O";
                turn0 = true;
            }
            
        });
    });

    reset.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.innerText = "";
        });
        turn0 = true;
    });