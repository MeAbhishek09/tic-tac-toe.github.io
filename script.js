let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgc= document.querySelector(".msg-c");
let msg=document.querySelector("#msg");
let turn = true;


const winpattern = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,5,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turn=true;
    enableBoxes();
    msgc.classList.add("hide");
};



const disableBoxes=()=>{
    for (let box of boxes ){
        box.disabled= true;
    }
};

const enableBoxes=()=>{
    for (let box of boxes ){
        box.disabled= false;
    box.innerText="";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       console.log("box");
if (turn){
    box.innerText = "O";
    turn=false;
}
else{
    box.innerText="X";
    turn=true;
}
box.disabled = true;

checkwinner();
    });
});
const showwinner=(winner)=>{
    msg.innerText=`congratukations,winner is ${winner}`;
    msgc.classList.remove("hide");
    disableBoxes();
};
const checkwinner = ()=>{
    for(let  i of winpattern){
        let p1 = boxes[i[0]].innerText;
        let p2 = boxes[i[1]].innerText;
        let p3 = boxes[i[2]].innerText;

        if (p1 !=""&& p2 !="" && p3 !="" ){
            if ( p1 === p2 && p2 === p3){
                showwinner(p1);
            }
        }

    }
};


newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);












