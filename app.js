const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "draw";
    } else if (
        (computerSelection === "rock" && playerSelection === "scissor") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissor" && playerSelection === "paper")
    ) {
        return "win"; // PC wins
    } else {
        return "lose"; // PC loses and user wins
    }
}

let countZero = 0;
let countOne = 0;
let countDraw = 0;
let round = 1; // Initialize round to 1

const containerDiv = document.getElementById("container");
const currentResult = document.getElementById("current-result");
const finalResult = document.getElementById("final-result");

const rockBtn = document.getElementById("rock-btn");
rockBtn.addEventListener("click", () => {
    gameResult("rock");
});

const paperBtn = document.getElementById("paper-btn");
paperBtn.addEventListener("click", () => {
    gameResult("paper");
});

const scissorBtn = document.getElementById("scissor-btn");
scissorBtn.addEventListener("click", () => {
    gameResult("scissor");
});

function gameResult(userInput) {
    const computerSelection = getComputerChoice();
    const result = playRound(userInput, computerSelection);

    if (result === "draw") {
        currentResult.innerText = "The battle is a draw but WIN THE WAR";
        countDraw++;
    } else if (result === "win") {
        currentResult.innerText = "YOU lost the battle, WIN THE WAR";
        countZero++;
    } else {
        currentResult.innerText = "You only won the battle, now WIN THE WAR";
        countOne++;
    }

    containerDiv.innerText = `Machine: ${countZero} | You: ${countOne} | Draw: ${countDraw}`;

    if (countZero === 3 || countOne === 3) {
        containerDiv.innerText = countZero === countOne ? "This war went draw" : containerDiv.innerText; // Last score
        const text = countOne > countZero ? "You won this war, humanity is saved" : "Machine won the war, humanity is doomed";
        finalResult.innerHTML = text;
        currentResult.innerText = text;
        countZero = countOne = countDraw = 0;
        round++;
        finalResult.innerText = "ROUND: " + round + " of war";
    }
}
