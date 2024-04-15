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
    let roundsPlayed = 0;
    let playerWin = 0, computerWin = 0;
    let endGame = false;
    
    let btnSelection = document.querySelector(".selection-container");
    btnSelection.addEventListener("click", (e) => {
        if (endGame === false) {
            roundsPlayed++;
            playerSelection = e.target.className;
            computerSelection = getComputerChoice();
            result = playRound(playerSelection, computerSelection);
            if (result === "win") {
                playerWin++;
            } else if (result === "lose") {
                computerWin++;
            } else {
            }

            printResults(roundsPlayed, result, playerSelection, computerSelection);

            if (roundsPlayed > 0) {
                if (playerWin === 5) {
                    printEndResults("Player");
                    endGame = true;
                } else if (computerWin === 5) {
                    printEndResults("Computer");
                    endGame = true;
                }     
            }
        }
    });
    
    let btnResetGame = document.querySelector(".reset-game");
    btnResetGame.addEventListener("click", () => {
        roundsPlayed = 0;
        playerWin = 0;
        computerWin = 0;
        endGame = false;

        let resultText = document.querySelector(".rounds-played");
        resultText.replaceChildren("Rounds played:");
    });
}

function printResults(roundsPlayed, result, playerSelection, computerSelection) {
    let resultText = document.querySelector(".rounds-played");
    const para = document.createElement("p");
    if (result === "win") {
        para.textContent = `Round ${roundsPlayed}: You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (result === "lose") {
        para.textContent = `Round ${roundsPlayed}: You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        para.textContent = `Round ${roundsPlayed}: It's a tie! both chooses ${playerSelection}`;
    }

    resultText.appendChild(para);
}

function printEndResults(winner) {
    let resultText = document.querySelector(".rounds-played");
    const para = document.createElement("p");
    para.textContent = `${winner} wins by reaching 5 wins first!`
    resultText.appendChild(para);
}

playGame();
