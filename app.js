const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}


// zero for  pc W
//1 is for PC L ,user w 
//draw in no one


function playRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        return "draw"
    }

    else if ((computerSelection === "rock" && playerSelection === "scissor") || 
    (computerSelection === "paper" && playerSelection === "rock") ||
     (computerSelection === "scissor" && playerSelection === "paper")) 
    {
        return "win"
    }

    else {
        return "lose"
    }

}


function game() {
    let countZero = 0, countOne = 0, draw = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("enter rock ,paper or scissor").toLowerCase();
        const result= playRound(computerSelection, playerSelection);
            if(result==="win"){countZero++}
            else if (result==="lose") {countOne++}
            else {draw++}
    }   

    if(countZero===countOne){console.log("Game is DRAW")}

    else if(countZero<countOne) {
        console.log("Player wins")
        console.log(`Player wins ${countOne} times ,Computer wins ${countZero} times,game draw ${draw} times`)
    }
    else {
        console.log("Computer wins")
        console.log(`Player wins ${countOne} times ,Computer wins ${countZero} times,game draw ${draw} times`)
    }
}



game();

