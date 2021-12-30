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

//Create a function that plays Rock Paper Scissors game
function play (playerSelection, computerSelection){
    
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || 
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        scoreOfPlayer++;
        scoreOfPlayerContainer.textContent = scoreOfPlayer;
        results.style.background = '#9acd32';
        results.textContent = `Player SCORES! ${playerSelection} beats ${computerSelection}`; 
    } 
    else if (playerSelection === "ROCK"  && computerSelection === "PAPER" ||
            playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
            playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        scoreOfComputer++;
        scoreOfComContainer.textContent = scoreOfComputer;
        results.style.background = 'burlywood';
        results.textContent = `Computer SCORES! ${computerSelection} beats ${playerSelection}`;
    } 
    else if (playerSelection === computerSelection){
        results.style.background = '#dcdcdc';
        results.textContent = `It's a TIE! Both are ${playerSelection}`;
    }
    else results.textContent = "Invalid Input!";

    // Displays the correct selection of the computer in the UI
    if (computerSelection === 'ROCK'){
        computerSelectionContainer.innerHTML = '<img src="images/rock.png" />'; 
    } 
    else if (computerSelection === 'PAPER'){
        computerSelectionContainer.innerHTML = '<img src="images/paper.png"/>';
    }
    else if(computerSelection === 'SCISSORS') {
        computerSelectionContainer.innerHTML = '<img src="images/scissors.png"/>';
    }

    // Declares the winner and Displays play again button after match
    if(scoreOfPlayer === rounds){
        results.textContent = 'Player wins the match!';
        results.style.background = '#9acd32';
        main.appendChild(playAgainBtn);
    }
    else if (scoreOfComputer === rounds){
        results.textContent = 'Computer wins the match!';
        results.style.background = 'burlywood';
        main.appendChild(playAgainBtn);
    } 
}

// Interactivity in the UI
const main = document.querySelector('main');
const scoreOfPlayerContainer = document.querySelector('.score.player');
const scoreOfComContainer = document.querySelector('.score.computer');
const playerSelection = document.querySelector('.selection.player');
const computerSelectionContainer = document.querySelector('.selection.computer');
const results = document.querySelector('.results');

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('.buttons');

const playAgainBtn = document.createElement('button');
playAgainBtn.classList.add('playAgainBtn');
playAgainBtn.textContent = 'Play Again';


// Rock Paper Scissors Selection Functionality
const rounds = 5;

buttons.forEach(button => {
    
    button.addEventListener('click', () =>{
        
        if (scoreOfPlayer === rounds || 
            scoreOfComputer === rounds){
            return;
        }
        
        const compPlay = computerPlay();
        
        if (button === btnRock){
            play('ROCK', compPlay);
            playerSelection.innerHTML = '<img src="images/rock.png" />'; 
            
        }
        else if (button === btnPaper){
            play('PAPER', compPlay); 
            playerSelection.innerHTML = '<img src="images/paper.png" />';           
        }
        else if(button === btnScissors){
            play('SCISSORS', compPlay);
            playerSelection.innerHTML = '<img src="images/scissors.png" />';           
        }
    });
});


// Play again button
playAgainBtn.addEventListener('click', () => {
    scoreOfComputer = 0;
    scoreOfComContainer.textContent = 0;
    scoreOfPlayer = 0;
    scoreOfPlayerContainer.textContent = 0;
    results.textContent  = 'CHOOSE YOUR WEAPON!';
    results.style.background = '#dcdcdc';
    playerSelection.innerHTML = '';
    computerSelectionContainer.innerHTML = '';
    main.removeChild(playAgainBtn);
});










