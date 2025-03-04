let gameSeq = [];
let userSeq = [];
let started = false;
let colors = ["red","darkgreen","blue","yellow"];
let level = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUP();
    }
});
function gameFlash(inner){
    inner.classList.add("flash");
    setTimeout(function(){
        inner.classList.remove("flash");
    },250);
}
function userFlash(inner){
    inner.classList.add("userFlash");
    setTimeout(function(){
        inner.classList.remove("userFlash");
    },250);
}
function levelUP(){
    userSeq = []; 
    level++;
    h3.innerText = `Level ${level}`;
    let randInd = Math.floor(Math.random() * 4);
    let randCol = colors[randInd];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);

    gameFlash(randBtn);
}
function checkpress(ind){
    if(gameSeq[ind] === userSeq[ind]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUP,1000);
        }
    } else{
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start game.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    let userCol = btn.getAttribute("id");
    userSeq.push(userCol);

    checkpress(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".inner");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}