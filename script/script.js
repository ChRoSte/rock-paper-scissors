const buttons = Array.from(document.querySelectorAll(".userChoice"));
const divs = document.querySelectorAll(".gameDiv");
const resetBtn = document.querySelector("#reset");
let score = [0,0]; // index 0 = user score, index 1 = computer score;

resetBtn.addEventListener("click", resetGame);
buttons.forEach( button => button.addEventListener("click", play) );

function play(e){
    let result;
    
    if(score[0] >= 5 || score[1] >= 5)
        resetGame(); //check if previous game ended and reset
    
    result = playRound(this.id, computerPlay());
    keepScore(result, score);
    if(score[0] === 5 || score[1] === 5)
        declareWinner(score);
}

function showResult(result){
    const resultDiv = document.querySelector("#result");
    clearDiv(resultDiv);
    let resultText = result;
    let resultPara = document.createElement("p");
    resultPara.textContent = resultText;
    resultDiv.appendChild(resultPara);
}

function showScore(score){
    const scoreDiv = document.querySelector("#score");
    clearDiv(scoreDiv);
    let scoreText = score;
    let scorePara = document.createElement("p");
    scorePara.textContent = scoreText;
    scoreDiv.appendChild(scorePara);
}

function showWinner(result){
    const winnerDiv = document.querySelector("#winner");
    clearDiv(winnerDiv);
    let winnerText = result;
    let winnerPara = document.createElement("p");
    winnerPara.textContent = winnerText;
    winnerDiv.appendChild(winnerPara);
}

function resetGame(){
    divs.forEach( div => clearDiv(div));
    score = [0,0];
}

function clearDiv(div){
    div.innerHTML = "";
}


function keepScore( roundResult, gameScore ) {
    let currentScore = gameScore; // index 0 = player score, index 1 = computer score
    
    switch( roundResult ) {
        case "win":
            currentScore[0] = currentScore[0] + 1;
            break;
        case "lose":
            currentScore[1] = currentScore[1] + 1;
            break;
        case "tie":
            // tie, score unchanged
    }
    
    showScore(currentScore);
}


function declareWinner( finalScore ) {
    let gameResult;
    
    if( finalScore[0] > finalScore[1] ) {
        gameResult = "You win! Final score: " + finalScore[0] + " to " + finalScore[1];
    } else if( finalScore[0] < finalScore[1] ) {
        gameResult = "You lose! Final score: " + finalScore[0] + " to " + finalScore[1];
    } else {
        gameResult = "It's a tie! Final score: " + finalScore[0] + " to " + finalScore[1];
    }
    
    showWinner(gameResult);
    
}

function computerPlay() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    
    switch(randomNumber){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
    
}

function playRound( playerSelection, computerSelection ) {
    let playerChoice = playerSelection.toLowerCase(),
        computerChoice = computerSelection.toLowerCase(),
        roundResult, roundResultText;
    
    if( (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")
      ) {
        playerChoice = capitalize(playerChoice);
        roundResultText = "You win! " + playerChoice + " beats " + computerChoice + ".";
        roundResult = "win";
    } else if (playerChoice === computerChoice) { // player and computer make same choice
        roundResultText = "It's a tie!";
        roundResult = "tie";
    } else {
        computerChoice = capitalize(computerChoice);
        roundResultText = "You lose! " + computerChoice + " beats " + playerChoice + ".";
        roundResult = "lose";
    }
    
    showResult(roundResultText);
    return roundResult;
}


function capitalize( word ) {
    let lowerCase = word.toLowerCase();
    let restOfWord = lowerCase.slice(1);
    let firstLetter = lowerCase.slice(0,1);
    
    firstLetter = firstLetter.toUpperCase();
    return firstLetter.concat(restOfWord); 
}