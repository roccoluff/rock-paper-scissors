let getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3);
    const optionsArr = ["Rock", "Paper", "Scissors"];
    return optionsArr[x];
}

let playRound = (playerSelection, computerSelection) => {
    // ToDo: As a first if - question to ask if playerSelection == computerSelection
    if (playerSelection == "ROCK" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection == "PAPER" && computerSelection == "Scissors") {
        return "You Lose! Paper beats Rock!";
    } // ToDo: Add all cases where player loses, then make "else" for when player wins + Replace 2x == with 3x ===
}

const computerSelection = getComputerChoice();
let playerSelection = prompt("What do you choose?");
playerSelection = playerSelection.toUpperCase();