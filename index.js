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


//Create a function that plays a single round of Rock Paper Scissors.
// returns who wins
// displays the selection of the player
function playRound (playerSelection, computerSelection){
    compWinsTheRound = false;
    playerWinsTheRound = false;
    
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || 
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"){
            playerWinsTheRound = true;
        return `Player SCORES! ${playerSelection} beats ${computerSelection}`;
    } 
    else if (playerSelection === "ROCK"  && computerSelection === "PAPER" ||
            playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
            playerSelection === "SCISSORS" && computerSelection === "ROCK"){
                compWinsTheRound = true;
        return `Computer SCORES! ${computerSelection} beats ${playerSelection}`;
    } 
    else if (playerSelection === computerSelection){
        return `It's a TIE! Both are ${playerSelection}`;
    }
    else return "Invalid Input!"
    
}


//Create a function that plays 5 rounds of RPS. Display results and winners
function game(){

    let scoreOfPlayer = 0, scoreOfComputer = 0;
    const rounds = 5;

    // A loop that gives the number of rounds and the score of the players
    for(i = 1; i <= rounds; i++){

        let com = playRound(playerSelectionCap, computerPlay());
        // outputs the current round number and the players' selection
        console.log(`Round ${i}`);
        console.log(com);

        // condition checking of the round winner
        if(playerWinsTheRound === true && compWinsTheRound === false){
            scoreOfPlayer++;
            console.log("+1 point for player")
        } else if (compWinsTheRound === true && playerWinsTheRound === false) {
            scoreOfComputer++;
            console.log("+1 point for computer")
        } 
        
        // outputs the current score
        console.log(`Score: Player - ${scoreOfPlayer} Computer - ${scoreOfComputer}`)
        console.log(" ")
    }

    // condition checking of the winner of the match
    if(scoreOfPlayer > scoreOfComputer){
        console.log("Player wins the match!")
    }
    else if(scoreOfPlayer < scoreOfComputer){
        console.log("Computer wins the match!")
    } else console.log("DRAW :|")
    
}

const playerSelection = "rock";
const playerSelectionCap = playerSelection.toUpperCase();
const computerSelectionCap = computerPlay();
let playerWinsTheRound = false;
let compWinsTheRound = false;

console.log(game())



