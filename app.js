const choices = ["stone", "paper", "scissors"]


function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}



let countZero = 0, countOne = 0, draw = 0;

function playRound(computerSelection, playerSelection) {
    if (playerSelection == computerSelection) { return draw++ }

    if (playerSelection == "stone") {
        if (computerSelection == "paper") { return ++countZero }
        else { return ++countOne }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "scissors") { return ++countZero }
        else { return ++countOne }
    }//good

    if (playerSelection == "scissors") {
        if (computerSelection == "stone") { return ++countZero }
        else { return ++countOne }
    }

}


function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("enter stone ,paper or scissor").toLowerCase();
        playRound(computerSelection, playerSelection);
    }

    if (countOne > countZero) {
        console.log("Player wins")
        console.log(`Player wins ${countOne} times ,Computer wins ${countZero} times,game draw ${draw} times`)
    }
    else {
        console.log("Computer wins")
        console.log(`Player wins ${countOne} times ,Computer wins ${countZero} times,game draw ${draw} times`)
    }
    }



game();

