const player1Btn = document.querySelector("#player1");
const player1Score = document.querySelector("#player1Score");
const player2Btn = document.querySelector("#player2");
const player2Score = document.querySelector("#player2Score");
const resetBtn = document.querySelector("#reset");
const winnerScore = document.querySelector("#winnerScore");
console.log(winnerScore.value)


let score1 = 0;
let score2 = 0;

player1Btn.addEventListener("click", e => {
    score1 += 1;
    player1Score.textContent = score1;
    if (score1 == winnerScore.value) {
        // console.log("player 1 win!")
        player1Btn.disabled = true;
        player2Btn.disabled = true;
        player1Score.style.color = "green";
        player2Score.style.color = "red";
    }
})

player2Btn.addEventListener("click", e => {
    score2 += 1;
    player2Score.textContent = score2;
    if (score2 == winnerScore.value) {
        // console.log("player 2 win!")
        player1Btn.disabled = true;
        player2Btn.disabled = true;
        player2Score.style.color = "green";
        player1Score.style.color = "red";
    }
})

resetBtn.addEventListener("click", e => {
    score1 = 0;
    score2 = 0;
    player1Score.textContent = score1;
    player2Score.textContent = score2;
    player1Btn.disabled = false;
    player2Btn.disabled = false;
    player2Score.style.color = "black";
    player1Score.style.color = "black";
})

