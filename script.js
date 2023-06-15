let choices = ["rock","paper","scissors"]
let playerWins = 0
let computerWins = 0

function getComputerChoice(){
    choice=choices[Math.floor(Math.random()*3)]
    return choice
}

// *--- redundant at present ---*
// function playerSelection(){
//     let choice = prompt("rock paper or scissors","rock");
//     choice = choice.toLowerCase()
//     validatePlayerSelection(choice)
//     return choice;
// }

// function validatePlayerSelection(choice){
//     if (choice == "rock"|| choice == "paper" || choice == "scissors"){
//         return choice;
//     }
//     else {
//         playerSelection();
//         return;
//     }
// }

function winHandler(winner,winnerChoice,loserChoice){
     alertMsg(winner + " wins round - "+ winnerChoice + " beats " + loserChoice );
     return;
}

function alertMsg(message){
    let alert = document.querySelector("#lastRound")
    alert.innerText = message;
    return;
}

function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    //let playerChoice = playerSelection();
    if (computerChoice == playerChoice ){
        alertMsg("Draw");
        return;
    }
    // handle player wins 
    // Rock beats scissors 
    // scissors beats paper
    // paper beats rock 
    else if (playerChoice == "rock" && computerChoice == "scissors" ||
             playerChoice == "scissors" && computerChoice == "paper" || 
             playerChoice == "paper" && computerChoice =="rock"){
                winner = "player";
                winHandler(winner,playerChoice,computerChoice);
                scorer(winner);
                return;
             }
    // handle comp wins 
    else {
       winner = "computer";
       winHandler(winner,computerChoice,playerChoice);
       scorer (winner);
       return;
    }
}

function paintResults(){
    playerScore = document.querySelector("#playerScore");
    playerScore.innerText = "Player: " + playerWins;
    computerScore = document.querySelector("#computerScore")
    computerScore.innerText = "Computer: " + computerWins
}

function scorer(winner){
    if (winner == "player"){
            playerWins += 1;
            paintResults();
            checkScore();
    }
    else if (winner=="computer"){
            computerWins += 1;
            paintResults();
            checkScore();
    }
}

function checkScore(){
    if (computerWins == 5 ){
        alertMsg("Computer Wins the game - better luck next time");
        resetScores();
    }
    else if (playerWins == 5){
        alertMsg("You won the game - nice one!");
        resetScores();
    }    
    else {
        return
    }
}

function resetScores(){
    playerWins = 0;
    computerWins = 0;
}

function logClick(event){
    console.log(event)
    let choice = document.querySelector(`button[id=${event.target.id}]`)
    console.log(choice)
    let playerChoice = choice.getAttribute('id')
    console.log(playerChoice)
    playRound(playerChoice)
}

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(button => button.addEventListener("click",logClick));

