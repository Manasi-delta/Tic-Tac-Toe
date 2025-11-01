let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let new_game_btn=document.querySelector("#new-btn");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true; // if true playerO else playerX
const winpattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("button clicked");
        if(turnO){ //player O
            box.innerText="O";
            turnO=false;
        }else{ //player X
            box.innerText="X";
            turnO=true;
        }box.disabled=true;
        checkwinner();
    });
});
const disable_boxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disable_boxes();
    msg_container.classList.remove("hide");

};
const reset_btn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        turnO=true;
        msg_container.classList.add("hide");
    }
};
const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Winner is",pos1Val);
                showWinner(pos1Val);
            }
        }
    }

};
resetbtn.addEventListener("click",reset_btn);
new_game_btn.addEventListener("click",reset_btn);