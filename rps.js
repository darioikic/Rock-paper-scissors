const choices = ["Rock", "Paper", "Scissors"];
const playerChoice = document.getElementById("playerChoice");
const result = document.getElementById("result");
let pScore = 0;
let cScore = 0;

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

playerScore.textContent = "Player's score: " + pScore;
computerScore.textContent = "Computer's score: " + cScore;

function chooseRock(){
    playerChoice.textContent = "Player: ";
    computerChoice.textContent = "Computer: "
    playerChoice.textContent += "Rock";
    const index = Math.floor(Math.random()*3);
    computerChoice.textContent += choices[index];

    switch(choices[index]){
        case "Rock":
            result.style.color = "black";
            result.textContent = "IT'S A TIE!";
            break;
        case "Paper":
            result.style.color = "red";
            result.textContent = "YOU LOSE!";
            cScore++;
            break;
        case "Scissors":
            result.style.color = "green";
            result.textContent = "YOU WIN!";
            pScore++;
            break;
    }

    playerScore.textContent = "Player's score: " + pScore;
    computerScore.textContent = "Computer's score: " + cScore;
}

function choosePaper(){
    playerChoice.textContent = "Player: ";
    computerChoice.textContent = "Computer: "
    playerChoice.textContent += "Paper";
    const index = Math.floor(Math.random()*3);
    computerChoice.textContent += choices[index];

    switch(choices[index]){
        case "Rock":
            result.style.color = "green";
            result.textContent = "YOU WIN!";
            pScore++;
            break;
        case "Paper":
            result.style.color = "black";
            result.textContent = "IT'S A TIE!";
            break;
        case "Scissors":
            result.style.color = "red";
            result.textContent = "YOU LOSE!";
            cScore++;
            break;
    }

    playerScore.textContent = "Player's score: " + pScore;
    computerScore.textContent = "Computer's score: " + cScore;
}

function chooseScissors(){
    playerChoice.textContent = "Player: ";
    computerChoice.textContent = "Computer: "
    playerChoice.textContent += "Scissors";
    const index = Math.floor(Math.random()*3);
    computerChoice.textContent += choices[index];

    switch(choices[index]){
        case "Rock":
            result.style.color = "red";
            result.textContent = "YOU LOSE!";
            cScore++;
            break;
        case "Paper":
            result.style.color = "green";
            result.textContent = "YOU WIN!";
            pScore++;
            break;
        case "Scissors":
            result.style.color = "black";
            result.textContent = "IT'S A TIE!";
            break;
    }

    playerScore.textContent = "Player's score: " + pScore;
    computerScore.textContent = "Computer's score: " + cScore;
}
