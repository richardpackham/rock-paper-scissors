let choices = ["rock","paper","scissors"]

function getComputerChoice(){
    choice=choices[Math.floor(Math.random()*3)]
    return choice
}

function playerSelection(){
    let choice = prompt("rock paper or scissors","rock");
    choice = choice.tolower
    validatePlayerSelection(choice);
}

function validatePlayerSelection(choice){
    if (choice != "rock"|| choice != "paper" || choice != "scissors"){
        playerSelection();
        return;
    }
    else {
        return choice;
    }
}

// Rock beats scissors 
// scissors beats paper
// paper beats rock 

function alertMsg(message){
    alert(message);
}

function playRound(computerChoice,playerChoice){
    if (computerChoice == playerChoice ){
        alertMsg("Draw")
    }
    else if (computerChoice == "rock"){
        if (playerChoice == "scissors"){
            alertMsg("You lose! Rock beats Scissors")
        }
        else {
            alertMsg("You win! Paper beats Rock!") 
        }
    }
    else if (computerChoice == "scissors"){
        if (playerChoice == "rock") {
            alertMsg("You Win! Rock beats Scissors")
        }
        else {
            alertMsg("You Lose! Scissors beats Paper!") 
        }
    }
    else if (computerChoice == "paper" ){
        if (playerChoice== "rock"){
            alertMsg("You Lose! Paper beats Rock!") 
        }
        else {
            alertMsg("You Win! Scissors beats Paper!") 
    }
}
}

playRound(getComputerChoice(),playerSelection())