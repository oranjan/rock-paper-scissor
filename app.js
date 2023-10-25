const choices = ["rock", "paper", "scissor"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}


// zero for  pc W
//1 is for PC L ,user w 
//draw in no one


function playRound(playerSelection, computerSelection) {

    if (computerSelection === playerSelection) {
        return "draw"
    }

    else if ((computerSelection === "rock" && playerSelection === "scissor") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissor" && playerSelection === "paper")) {
        return "win" //pc wins
    }

    else {
        return "lose" //pc loses
    }

}


// function game() {
//     let countZero = 0, countOne = 0, draw = 0;
//     for (let i = 0; i < 5; i++) {
//         const result= playRound( getComputerChoice(), playerSelection);
//             if(result==="win"){countZero++}
//             else if (result==="lose") {countOne++}
//             else {draw++}
//     }   

//     if(countZero===countOne){console.log("Game is DRAW")}

//     else if(countZero<countOne) {
//         console.log("Player wins")
//         console.log(`Player wins ${countOne} times ,Computer wins ${countZero} times,game draw ${draw} times`)
//     }
//     else {
//         console.log("Computer wins")
//         console.log(`Player wins ${countOne} times ,Computer wins ${countZero} times,game draw ${draw} times`)
//     }
// }

// game();

let countZero = 0;
let countOne = 0;
let countDraw = 0;

const containerDiv = document.getElementById("container")

const rockBtn = document.getElementById("rock-btn")
rockBtn.addEventListener("click", () => {
    const result = playRound("rock", getComputerChoice())

    if (result === "draw") {
        countDraw++
    }
    else if (result === "win") {
        countZero++
    }
    else { countOne++ }

    if (countZero + countOne + countDraw < 6) {
        containerDiv.innerText = "PC" + countZero + " USER" + countOne + " DRAW" + countDraw;
    } 
    else {
        containerDiv.innerText= countZero===countOne?"DRAW":""
        
        containerDiv.innerText=countOne>countZero?"USER WINS":"PC WINS"
        
        countZero = countOne = countDraw = 0;
    }

}
)


const paperBtn = document.getElementById("paper-btn")
paperBtn.addEventListener("click", () =>
    containerDiv.innerText = playRound("paper", getComputerChoice())
)

const scissorBtn = document.getElementById("scissor-btn")
scissorBtn.addEventListener("click", () =>
    containerDiv.innerText = playRound("scissor", getComputerChoice())
)


