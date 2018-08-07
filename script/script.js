//const playerSelection = 'rock';
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));


// play multiple rounds of rock paper scissors

function game() {
    let roundCount = 0;
        gameScore = [0, 0]; // index 0 = player score, index 1 = computer score
    
    while( roundCount < 5 ) {
        let userChoice = prompt("Choose rock, paper, or scissors"),
            computerChoice,
            roundResult;
        
        if( !validateSelection(userChoice) )
            continue;
        
        computerChoice = computerPlay();
        roundResult = playRound(userChoice, computerChoice);

        gameScore = keepScore(roundResult, gameScore);
        
        roundCount++;
    } // end while
    
    declareWinner( gameScore );
    
}


// keeps score of the game and outputs round and game results

function keepScore( roundResult, gameScore ) {
    let currentScore = gameScore; // index 0 = player score, index 1 = computer score
    
    switch( roundResult ) {
        case 0:
            currentScore[0] = currentScore[0] + 1;
            break;
        case 1:
            currentScore[1] = currentScore[1] + 1;
            break;
        case 2:
            // tie, score unchanged
    } // end switch
    
    return currentScore;
}


// declares the winner of the game and outputs the score

function declareWinner( finalScore ) {
    if( finalScore[0] > finalScore[1] ) {
        console.log( "You win! Final score: " + finalScore[0] + " to " + finalScore[1]);
    } else if( finalScore[0] < finalScore[1] ) {
        console.log( "You lose! Final score: " + finalScore[0] + " to " + finalScore[1]);
    } else {
        console.log( "It's a tie! Final score: " + finalScore[0] + " to " + finalScore[1]);
    }
    
}


// makes sure user chooses rock, paper, or scissors
// returns true if choice is valid, and false if it is not

function validateSelection( userSelection ){
    let  userChoice = userSelection.toLowerCase();
    
    if( !(userChoice === "rock")  &&
        !(userChoice === "paper")  &&
        !(userChoice === "scissors")
      ) {
        console.log( "Something went wrong! Please choose rock, paper, or scissors.");
        return false;
    }
    
    return true;
}


// makes the computer's random choice
// returns either 'Rock', 'Paper', or 'Scissors'

function computerPlay() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    
    switch(randomNumber){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    } // end switch
    
} // end computerPlay


// play a around of Rock Paper Scissors
// returns 0 when player wins, 1 when computer wins, and 2 when there is a tie

function playRound( playerSelection, computerSelection ) {
    //convert strings to all lowercase
    let playerChoice = playerSelection.toLowerCase();
        computerChoice = computerSelection.toLowerCase();
    
    if( (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")
      ) {
        playerChoice = capitalize(playerChoice);
        console.log( "You win! " + playerChoice + " beats " + computerChoice + "." );
        return 0;
    } else if (playerChoice === computerChoice) { // player and computer make same choice
        console.log( "It's a tie!" );
        return 2;
    } else {
        computerChoice = capitalize(computerChoice);
        console.log( "You lose! " + computerChoice + " beats " + playerChoice + "." );
        return 1;
    }
    
    // invalid user input
    return "Something went wrong! Please choose rock, paper, or scissors";
    
} // end playRound


// capitalizes the first letter of a given string and leaves the rest lowercase

function capitalize( word ) {
    let lowerCase = word.toLowerCase();
    let restOfWord = lowerCase.slice(1);
    let firstLetter = lowerCase.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    return firstLetter.concat(restOfWord); 
}

function lastLetter( word ) {
    return word.slice(-1);
}