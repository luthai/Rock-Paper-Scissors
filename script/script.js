"use strict";

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();
    const c = computerSelection;
    let answer;

    if (p === "rock") {
        if (c === "rock") {
            answer = "tie";
        } else if (c === "paper") {
            answer = "lose";
        } else if (c === "scissors") {
            answer = "win";
        }
    } else if (p === "paper") {
        if (c === "paper") {
            answer = "tie";
        } else if (c === "scissors") {
            answer = "lose";
        } else if (c === "rock") {
            answer = "win";
        }
    } else if (p === "scissors") {
        if (c === "scissors") {
            answer = "tie";
        } else if (c === "rock") {
            answer = "lose";
        } else if (c === "paper") {
            answer = "win";
        }
    }

    return answer;
}

function playGame() {
    let playerSelection, computerSelection;
    let result;
    let playerWin = 0, computerWin = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose either rock, paper og scissors");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result == "win") {
            playerWin++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        } else if (result == "lose") {
            computerWin++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log(`It's a tie! both chooses ${playerSelection}`);
        }
    }

    if (playerWin > computerWin) {
        console.log(`Player win by ${playerWin} to computer ${computerWin}.`);
    } else if (computerWin > playerWin) {
        console.log(`Computer win by ${computerWin} to player ${playerWin}.`);
    } else {
        console.log(`It's a tie by ${playerWin} to computer ${computerWin}.`);
    }
}

playGame();
