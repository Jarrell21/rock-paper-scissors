//Create a function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay () {
    const randomNum = Math.floor((Math.random() * 3) + 1);
    
    if (randomNum === 1){
        return "ROCK";
    }
    else if (randomNum === 2) {
        return "PAPER";
    }
    else return "SCISSORS";
}

let scoreOfPlayer = 0, scoreOfComputer = 0; // tracks the score of the game

//Create a function that plays a single round of Rock Paper Scissors
function playRound (playerSelection, computerSelection){
    let compWinsTheRound = false;
    let playerWinsTheRound = false;
    
    
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || 
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerWinsTheRound = true;
        scoreOfPlayer++;
        scoreOfPlayerContainer.textContent = scoreOfPlayer;
        results.textContent = `Player SCORES! ${playerSelection} beats ${computerSelection}`; 
    } 
    else if (playerSelection === "ROCK"  && computerSelection === "PAPER" ||
            playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
            playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        compWinsTheRound = true;
        scoreOfComputer++;
        scoreOfComContainer.textContent = scoreOfComputer;
        results.textContent = `Computer SCORES! ${computerSelection} beats ${playerSelection}`;
    } 
    else if (playerSelection === computerSelection){
        results.textContent = `It's a TIE! Both are ${playerSelection}`;
    }
    else results.textContent = "Invalid Input!";
    
}



// Interactivity in the UI

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');

const scoreOfPlayerContainer = document.querySelector('.score.player');
const scoreOfComContainer = document.querySelector('.score.computer');

const results = document.querySelector('.results');
const playerSelection = document.querySelector('.selection.player');
const computerSelection = document.querySelector('.selection.computer');

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const compPlay = computerPlay();
        if (button === btnRock){
            playRound('ROCK', compPlay);
            playerSelection.textContent = 'ROCK';
        
        }
        else if (button === btnPaper){
            playRound('PAPER', compPlay);
            playerSelection.textContent = 'PAPER';
        }
        else {
            playRound('SCISSORS', compPlay);
            playerSelection.textContent = 'SCISSORS';
        }
        computerSelection.textContent = compPlay;
    });
});




