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
            answer = `It's a tie! both chooses ${p}`;
        } else if (c === "paper") {
            answer = `You Lose! ${c} beats ${p}`;
        } else if (c === "scissors") {
            answer = `You Win! ${p} beats ${c}`;
        }
    } else if (p === "paper") {
        if (c === "paper") {
            answer = `It's a tie! both chooses ${p}`;
        } else if (c === "scissors") {
            answer = `You Lose! ${c} beats ${p}`;
        } else if (c === "rock") {
            answer = `You Win! ${p} beats ${c}`;
        }
    } else if (p === "scissors") {
        if (c === "scissors") {
            answer = `It's a tie! both chooses ${p}`;
        } else if (c === "rock") {
            answer = `You Lose! ${c} beats ${p}`;
        } else if (c === "paper") {
            answer = `You Win! ${p} beats ${c}`;
        }
    }

    return answer;
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));