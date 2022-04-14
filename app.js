// Rock, paper, scissors

// DOM elements
const cards = document.querySelectorAll(".card");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
let plScore = document.querySelector("#player-score");
let cmScore = document.querySelector("#computer-score");
let scoreInfo = document.querySelector(".score-info");
let scoreMsg = document.querySelector(".score-message");
let plChoice = document.querySelector("#player-choice");
let cmChoice = document.querySelector("#computer-choice");
const startBtn = document.getElementById("start-btn");
let modal = document.querySelector(".modal");
let scoreBoard = document.querySelector(".scoreboard");
let container = document.querySelector(".container");
console.log(cards);

// enter game after clicking modal button
startBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    scoreBoard.classList.remove("hidden");
    scoreInfo.classList.remove("hidden");
    scoreMsg.classList.remove("hidden");
    scoreBoard.classList.remove("hidden");
    container.classList.remove("hidden");
})

// create an array of available options
const options = ["rock", "paper", "scissors"];

// Scores
let playerScore = 0;
let computerScore = 0;

// let player to pick an option
paper.addEventListener("click", () => {
        checkWin("paper.png", computerPlay());
        playRound();
        plChoice.src = "paper.png";
    }
);
rock.addEventListener("click", () => {
    checkWin("rock.png", computerPlay());
    playRound()
    plChoice.src = "rock.png";
});
scissors.addEventListener("click", () => {
    checkWin("scissors.png", computerPlay());
    playRound();
    plChoice.src = "scissors.png"
});

// let computer select a random option and update image
function computerPlay () {
    let computerSelection = Math.floor(Math.random() * options.length);
    return cmChoice.src = `${options[computerSelection]}.png`;
}

console.log(cmChoice)

// evaluate the winner
function checkWin(playerSelection, computerSelection) {
    if (playerSelection === "scissors.png" && computerSelection === "rock.png") {
        playerScore++;
        plScore.textContent = playerScore;
        scoreInfo.textContent = "Player wins!!!";
        scoreMsg.textContent = "Scissors beats rock";
        return "Player wins!!! rock beats scissors";
    } else if (playerSelection === "rock.png" && computerSelection === "scissors.png") {
        computerScore++;
        cmScore.textContent = computerScore;
        scoreInfo.textContent = "Computer wins!!!";
        scoreMsg.textContent = "Scissors beats rock";
        return "Computer wins!!! rock beats scissors";
    } else if (playerSelection === "paper.png" && computerSelection === "scissors.png") {
        playerScore++;
        plScore.textContent = playerScore;
        scoreInfo.textContent = "Player wins!!!";
        scoreMsg.textContent = "Paper beats scissors";
        return "Player wins!!! scissors beats paper";
    } else if (playerSelection === "scissors.png" && computerSelection === "paper.png") {
        computerScore++;
        cmScore.textContent = computerScore;
        scoreInfo.textContent = "Computer wins!!!";
        scoreMsg.textContent = "Paper beats beat scissors";
        return "Computer wins!!! scissors beats paper";
    } else if (playerSelection === "paper.png" && computerSelection === "rock.png") {
        computerScore++;
        cmScore.textContent = computerScore;
        scoreInfo.textContent = "Computer wins!!!";
        scoreMsg.textContent = "Rock beats paper";
        return "Computer wins!!! paper beats rock";
    } else if (playerSelection === "rock.png" && computerSelection === "paper.png") {
        playerScore++;
        plScore.textContent = playerScore;
        scoreInfo.textContent = "Player wins!!!";
        scoreMsg.textContent = "Rock beats paper";
        return "Player wins!!! paper beats rock";
    } else if (playerSelection === computerSelection) {
        scoreInfo.textContent = "Its a tie!!!";
        scoreMsg.textContent = "";
        return "It's a tie!!!";
    }
}

// stop game if anyone reaches 5
function playRound() {
    if (playerScore === 5) {
        container.classList.add("hidden");
       return scoreInfo.textContent = "You Win!!! Reload to play again";
    } else if (computerScore === 5) {
        container.classList.add("hidden");
        return scoreInfo.textContent = "You Lose!!! Reload to play again";
    }
}