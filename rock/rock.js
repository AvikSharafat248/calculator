const choices = ["rock", "paper","scissors"];

const player = document.getElementById("player");
const computer = document.getElementById("computer");
const display = document.getElementById("display");
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

let result = ""

if(playerChoice === computerChoice){
    result = "It's a tie";
}else{

    switch(playerChoice){
        case "rock":
        result=(computerChoice === "scissors" ? "You win" : "You lose")
        break;
        case "paper":
        result=(computerChoice === "rock" ? "You win" : "You lose")
        break;
        case "scissors":
        result=(computerChoice === "paper" ? "You win" : "You lose")
        break;
    }

}

player.textContent = `Player: ${playerChoice}`;
computer.textContent = `Computer: ${computerChoice}`;
display.textContent =result;

display.classList.remove("greenText", "redText")

switch(result){
    case "You win":
        display.classList.add("greenText");
        playerScore++;
        playerdisplay.textContent = playerScore
        break;
    case "You lose":
        display.classList.add("redText");
        computerScore++;
        computerdisplay.textContent = computerScore;

        break;
}


}
