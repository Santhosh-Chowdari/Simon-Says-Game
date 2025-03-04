let gameSeq = [];
let userSeq = [];
let started = false;
let colors = ["red", "darkgreen", "blue", "yellow"];
let level = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress", startGame);
document.addEventListener("touchstart", startGame);

function startGame() {
    if (!started) {
        started = true;
        levelUP();
    }
}

function gameFlash(inner) {
    inner.classList.add("flash");
    setTimeout(() => inner.classList.remove("flash"), 250);
}

function userFlash(inner) {
    inner.classList.add("userFlash");
    setTimeout(() => inner.classList.remove("userFlash"), 250);
}

function levelUP() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randCol = colors[Math.floor(Math.random() * 4)];
    let randBtn = document.getElementById(randCol);
    gameSeq.push(randCol);
    gameFlash(randBtn);
}

function checkpress(ind) {
    if (gameSeq[ind] === userSeq[ind]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUP, 1000);
        }
    } else {
        h3.innerHTML = `Game Over! Score: <b>${level}</b><br>Press any key or tap to restart.`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => document.body.style.backgroundColor = "white", 200);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userSeq.push(btn.id);
    checkpress(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".inner");
allBtns.forEach(btn => btn.addEventListener("click", btnPress));

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
