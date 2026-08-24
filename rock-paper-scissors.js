//Basic rock paper scissors game

//STEP 4- declare score variables
let humanScore = 0;
let computerScore = 0;

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
    alert(`You Win! ${humanChoice} beats ${computerChoice}`)
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
    humanScore += 1;
}
//helper functin for lose
function youLose(humanChoice, computerChoice) {
    alert(`You Lose! ${computerChoice} beats ${humanChoice}`)
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
    computerScore += 1;
}
//STEP 5 - write logic to play single round
function playRound(humanChoice, computerChoice) {
    //compare human choice to computer
    //3 combinations of rock scissors
    
    //output winner or loser text to user with both inputs 
    //increment score value for winner

    //tie first
    if (humanChoice === computerChoice) {
        alert("It's a tie! Try again!");
        console.log("It's a tie! Try again!");
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

// console.log("Hello World! Rock paper scissors shoot!")

//play the game x times
playGame(5);