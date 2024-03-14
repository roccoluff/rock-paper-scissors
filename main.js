let getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3);
    const optionsArr = ["ROCK", "PAPER", "SCISSORS"];
    return optionsArr[x];
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        console.log(playerSelection + " vs " + computerSelection + " is equal");
        return "Even";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("Paper beats Rock!")
        return "You Lose!";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("Scissors beats Paper!")
        return "You Lose!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("Rock beats Scissors")
        return "You Lose!"
    } else {
        console.log(playerSelection + " beats " + computerSelection + "!");
        return "You Win!";
    }
}

let playGame = () => {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("What now?");
        playerSelection = playerSelection.toUpperCase();
        computerSelection = getComputerChoice();
        let game = playRound(playerSelection, computerSelection);
        if (game === "You Lose!") {
            scoreComputer++;
            console.log(game);
            console.log("Your Score: " + scorePlayer);
            console.log("PC Score: " + scoreComputer);
        } else if (game === "You Win!") {
            scorePlayer++;
            console.log(game);
            console.log("Your Score: " + scorePlayer);
            console.log("PC Score: " + scoreComputer);
        } else {
            console.log(game);
            console.log("Your Score: " + scorePlayer);
            console.log("PC Score: " + scoreComputer);
        }
    }
    if (scorePlayer > scoreComputer) {
        console.log("You win! You won " + scorePlayer + " games out of 5!");
    } else if (scorePlayer < scoreComputer) {
        console.log("You Lose! You lost "+ scorePlayer + " games out of 5!");
    } else {
        console.log("It's a draw!");
    }
}
    
    const buttonRock = document.createElement("button");
    buttonRock.textContent = "Rock";
    const buttonPaper = document.createElement("button");
    buttonPaper.textContent = "Paper";
    const buttonScissors = document.createElement("button");
    buttonScissors.textContent = "Scissors";

    const body = document.querySelector("body");
    body.appendChild(buttonRock);
    body.appendChild(buttonPaper);
    body.appendChild(buttonScissors);

    let scoreP = 0;
    let scoreC = 0;
    let game; 

    buttonRock.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        //console.log("PC: " + computerSelection);
        game = playRound("ROCK", computerSelection);
        if (game == "You Win!") {
            scoreP++;
        } else if (game == "You Lose!") {
            scoreC++;
        } 
        P.textContent = "Your score: " + scoreP;
        C.textContent = "Score of PC: " + scoreC;
        if (scoreC == 5) {
            window.prompt("YOU LOOOOSEEE");
        } else if (scoreP == 5) {
            window.prompt("YOU WIIIINN");
        }
    });

    buttonPaper.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        //console.log("PC: " + computerSelection);
        game = playRound("PAPER", computerSelection);
        if (game == "You Win!") {
            scoreP++;
        } else if (game == "You Lose!") {
            scoreC++;
        } 
        P.textContent = "Your score: " + scoreP;
        C.textContent = "Score of PC: " + scoreC;
        if (scoreC == 5) {
            window.prompt("YOU LOOOOSEEE");
        } else if (scoreP == 5) {
            window.prompt("YOU WIIIINN");
        }
    });

    buttonScissors.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        //console.log("PC: " + computerSelection);
        game = playRound("SCISSORS", computerSelection);
        if (game == "You Win!") {
            scoreP++;
        } else if (game == "You Lose!") {
            scoreC++;
        } 
        P.textContent = "Your score: " + scoreP;
        C.textContent = "Score of PC: " + scoreC;
        if (scoreC == 5) {
            window.prompt("YOU LOOOOSEEE");
        } else if (scoreP == 5) {
            window.prompt("YOU WIIIINN");
        }
    });
    
    const P = document.createElement("div");
    const C = document.createElement("div");
    P.textContent = "Your score: " + scoreP;
    C.textContent = "Score of PC: " + scoreC;
    body.appendChild(P);
    body.appendChild(C);
 
/*
let computerSelection; //= getComputerChoice();
let playerSelection; //= prompt("What do you choose?");
//playerSelection = playerSelection.toUpperCase();
console.log(playGame());
*/