const player1Btn = document.querySelector("#player1");
const player1Score = document.querySelector("#player1Score");
const player2Btn = document.querySelector("#player2");
const player2Score = document.querySelector("#player2Score");
const resetBtn = document.querySelector("#reset");
const winnerScore = document.querySelector("#winnerScore");

let score1 = 0;
let score2 = 0;
let winningScore = parseInt(winnerScore.value);

player1Btn.addEventListener("click", e => {
    score1 += 1;
    player1Score.textContent = score1;
    if (score1 === winningScore) {
        // console.log("player 1 win!")
        player1Btn.disabled = true;
        player2Btn.disabled = true;
        player1Score.style.color = "#06d6a0";
        player2Score.style.color = "#ef476f";
    }
});

player2Btn.addEventListener("click", e => {
    score2 += 1;
    player2Score.textContent = score2;
    if (score2 === winningScore) {
        // console.log("player 2 win!")
        player1Btn.disabled = true;
        player2Btn.disabled = true;
        player2Score.style.color = "#06d6a0";
        player1Score.style.color = "#ef476f";
    }
});

resetBtn.addEventListener("click", reset);

function reset() {
    score1 = 0;
    score2 = 0;
    player1Score.textContent = score1;
    player2Score.textContent = score2;
    player1Btn.disabled = false;
    player2Btn.disabled = false;
    player2Score.style.color = "black";
    player1Score.style.color = "black";
}

winnerScore.addEventListener("change", e => {
    winningScore = parseInt(winnerScore.value);
    reset();
});
