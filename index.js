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

    // A loop that plays the game depending on the number of rounds given
    for(i = 1; i <= rounds; i++){

        console.log(`Round ${i}`);
        playerSelection = prompt("Enter your selection (Rock/Paper/Scissors)");
        let playerSelectionCap = playerSelection.toUpperCase();
        
        let computerSelection = computerPlay();
        let round = playRound(playerSelectionCap, computerSelection);
        
        console.log(`Player: ${playerSelectionCap} | Computer: ${computerSelection}`)
        console.log(round);

        // condition checking of the round winner
        if(playerWinsTheRound === true && compWinsTheRound === false){
            scoreOfPlayer++;
            console.log("+1 point for player")
        } 
        else if (playerWinsTheRound === false && compWinsTheRound === true){
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
    }
    else console.log("DRAW :|")
    
}

let playerSelection = "";
const computerSelectionCap = computerPlay();
let playerWinsTheRound = false;
let compWinsTheRound = false;

console.log(game())



