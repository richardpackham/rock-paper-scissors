let choices = ["rock","paper","scissors"]

function getComputerChoice(){
    choice=choices[Math.floor(Math.random()*3)]
    return choice
}

function playerSelection(){
    let choice = prompt("rock paper or scissors","rock");
    choice = choice.toLowerCase()
    validatePlayerSelection(choice)
    return choice;
}

function validatePlayerSelection(choice){
    if (choice == "rock"|| choice == "paper" || choice == "scissors"){
        return choice;
    }
    else {
        playerSelection();
        return;
    }
}

function winHandler(winner,winnerChoice,loserChoice){
     alertMsg(Winner + "Wins "+ winnerChoice + " beats " + loserChoice );
     return;
}

function alertMsg(message){
    alert(message);
    return;
}

function playRound(){
    let computerChoice = getComputerChoice();
    let playerChoice = playerSelection();
    if (computerChoice == playerChoice ){
        alertMsg("Draw")
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
                return (winner);
             }
    // handle comp wins 
    else {
       winner = "computer";
       winHandler(winner,computerChoice,playerChoice);
       return (winner);
    }
}

function game(rounds){
    let playerWins = 0
    let computerWins = 0
    for (let i=1; i< rounds; i++){
        let winner = playRound();
        if (winner == "player"){
            playerWins += 1;
         }
         else if (winner=="computer"){
            computerWins += 1;
         }
    }
}

game(5)