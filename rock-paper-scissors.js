//Basic rock paper scissors game

//STEP 4- declare score variables
let humanScore = 0;
let computerScore = 0;
const resultsP = document.querySelector(".results p")
const humanScoreP = document.querySelector("#humanScore")
const computerScoreP = document.querySelector("#computerScore")
const buttonsDiv = document.querySelector(".buttons");

//add event listener for buttons object
buttonsDiv.addEventListener("click", buttonHandler)

    
//STEP 2- get the computer choice
function getComputerChoice() {
    //get random number from 0 to 1, times by 3 and floor to get 0 1 2
    //if 0, return rock, if 1 paper, if 2 scissors
    const randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
        
        //default case shouldnt run, can delete later
        default:
            return "Something Bad Happened"
    }
}

//STEP 3- get human choice
function getHumanChoice(){
    //ask the user to choose and store to variable
    const humanChoice = prompt("Please choose rock, paper, or scissors!")
    //sanitize user input so it can be any case
    return humanChoice.toLowerCase();
}
//helper function for win
function youWin(humanChoice, computerChoice) {
    
    resultsP.textContent = `You Win! ${humanChoice} beats ${computerChoice}`
    humanScore += 1;
    humanScoreP.textContent = `Human Score: ${humanScore}`;
    checkScore()
}
//helper functin for lose
function youLose(humanChoice, computerChoice) {
    
    resultsP.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`
    computerScore += 1;
    computerScoreP.textContent = `Computer Score: ${computerScore}`
    checkScore()
}


function checkScore() {
    if ((humanScore < 5 && computerScore < 5)) return;

    //runs if player or computer wins 5 times
    if (humanScore > computerScore) {
        resultsP.textContent = `Congratulations, you won! Let's play again!`
    } else {
        resultsP.textContent = `Oh no, you lost! Lets try again`
    }

    resetGame();
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    computerScoreP.textContent = "Computer Score: 0"
    humanScoreP.textContent = "Human Score: 0"
}
//STEP 5 - write logic to play single round
function playRound(humanChoice, computerChoice) {
    //compare human choice to computer
    //3 combinations of rock scissors
    
    //output winner or loser text to user with both inputs 
    //increment score value for winner

    //tie first
    if (humanChoice === computerChoice) {
        const resultsP = document.querySelector(".results p")
        resultsP.textContent = "It's a tie! Try again!"
        return;
    }
    if (humanChoice === "rock") {
        if (computerChoice === "scissors"){
            youWin(humanChoice, computerChoice)
        } else {
            youLose(humanChoice, computerChoice)
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock"){
            youWin(humanChoice, computerChoice)
        } else {
            youLose(humanChoice, computerChoice)
        }
    } else {
        if (computerChoice === "paper"){
            youWin(humanChoice, computerChoice)
        } else {
            youLose(humanChoice, computerChoice)
        }
    }
}

//play the game a specific number of times, no longer needed for gui game
function playGame(times){
    //play the game 5 times
    for(let i = 0; i< times; i++) {
        console.log(`Round ${i + 1}!`)
        playRound(getHumanChoice(), getComputerChoice());
    }

    let gameOutcomeMessage;
    //determine the winner
    if (humanScore === computerScore) {
        gameOutcomeMessage = `It's a tie! You both won ${humanScore}/${times} times!`
    }
    else if (humanScore > computerScore) {
        gameOutcomeMessage = `Congratulations! You won ${humanScore}/${times} times!`
    } else {
        gameOutcomeMessage = `Oh no, you lost! You won ${humanScore}/${times} times!`
    }

    console.log(gameOutcomeMessage)
    alert(gameOutcomeMessage)
}

//determine which button was pressed and what to do
function buttonHandler (event) {
    switch(event.target.id){
        case "rock":
            playRound("rock", getComputerChoice())
            break;
        case "paper":
            playRound("paper", getComputerChoice())
            break;
        case "scissors":
            playRound("scissors", getComputerChoice())
            break;
    }
}