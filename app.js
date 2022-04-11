// Rock, paper, scissors
// create an array of available options
const options = ["rock", "paper", "scissors"];

// Scores
let playerScore = 0;
let computerScore = 0;

// prompt user to pick an option
// let player = prompt("Make a choice: Rock, Paper or Scissors?").toLowerCase();
// console.log("Player: " + player);

// let computer select a random option
function computerPlay () {
    let computerSelection = Math.floor(Math.random() * options.length);
    return options[computerSelection];
}
// console.log("Computer: " + computerPlay ());

// evaluate the winner
function winner(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "Player wins!!! rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Computer wins!!! rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "Player wins!!! scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Computer wins!!! scissors beats paper";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Computer wins!!! paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "Player wins!!! paper beats rock";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!!!";
    }
}

// console.log(winner(player, computerPlay()));

//Keep score and announce winner after five rounds
for (let i = 0; i < 5; i++) {
    let player = prompt("Make a choice: Rock, Paper or Scissors?").toLowerCase();
    console.log("Player: " + player);
    console.log(winner(player, computerPlay()));
}

console.log(`Final score: Player_${playerScore} Computer_${computerScore}`);