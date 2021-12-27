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

    if(scoreOfPlayer === rounds){
        results.textContent = 'Player wins the match!';
        main.appendChild(playAgainBtn);
    }
    else if (scoreOfComputer === rounds){
        results.textContent = 'Computer wins the match!';
        main.appendChild(playAgainBtn);
    } 
}



// Interactivity in the UI

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');

const main = document.querySelector('main');
const scoreOfPlayerContainer = document.querySelector('.score.player');
const scoreOfComContainer = document.querySelector('.score.computer');
const results = document.querySelector('.results');
const playerSelection = document.querySelector('.selection.player');
const computerSelection = document.querySelector('.selection.computer');

const playAgainBtn = document.createElement('button');
playAgainBtn.classList.add('playAgainBtn');
playAgainBtn.textContent = 'Play Again';

const rounds = 3;


buttons.forEach(button => {
    

    button.addEventListener('click', () =>{
        scoreOfPlayerContainer.textContent = scoreOfPlayer;
        scoreOfComContainer.textContent = scoreOfComputer;

        
        const compPlay = computerPlay();

        if (scoreOfPlayer === rounds || scoreOfComputer === rounds){
            return;
        }
        
        if (button === btnRock){
            playRound('ROCK', compPlay);
            playerSelection.innerHTML = '<img src="images/rock.png" />'; 
            
        }
        else if (button === btnPaper){
            playRound('PAPER', compPlay); 
            playerSelection.innerHTML = '<img src="images/paper.png" />';           
        }
        else if(button === btnScissors){
            playRound('SCISSORS', compPlay);
            playerSelection.innerHTML = '<img src="images/scissors.png" />';           
        }

        if (compPlay === 'ROCK'){
            computerSelection.innerHTML = '<img src="images/rock.png" />'; 
        } 
        else if (compPlay === 'PAPER'){
            computerSelection.innerHTML = '<img src="images/paper.png"/>';
        }
        else computerSelection.innerHTML = '<img src="images/scissors.png"/>';          
    });
});











