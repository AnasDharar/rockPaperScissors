
//getting tags and classes and ids
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const playerPoints = document.getElementById("playerpoint");
const computerPoints = document.getElementById("computerpoint");
const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const playerChoiceShow = document.getElementById("byPlayer");
const computerChoiceShow = document.getElementById("byComputer");
const winnerDisplay = document.getElementById('winner');
const declaringWinner = document.querySelector('.announcer');
const playerwin = document.querySelector('#playerwin')
const computerwin = document.querySelector('#computerwin')
let playerPointsCount = 0;
let computerPointsCount = 0;

//play game (this is the main function)
function play(e) {
  //player & computer getting choices
  //WHAT IS TARGETED HERE
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();

  playerChoiceShow.style.backgroundImage=`url(${playerChoice}.png)`;
  computerChoiceShow.style.backgroundImage=`url(${computerChoice}.png)`;

  //getting our winner
  const winner = getWinner(playerChoice, computerChoice);
  playerChoiceDisplay.innerText = `Your Choice: ${playerChoice}`;
  computerChoiceDisplay.innerText = `Computer's Choice: ${computerChoice}`;
  winnerDisplay.innerText = `Winner: ${winner}`;
//   console.log(playerChoice);
//   console.log(computerChoice);
//   console.log(winner);
  if(winner=='player'){
      playerScore();
  }
  if(winner=='computer'){
      computerScore();
  }
  if(playerPointsCount==4){
    playerWins();
  }
  if(computerPointsCount==4){
    computerWins();
  }
}

//get computer choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  }
  if (rand < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

//get game winner (main logic of the game)
function getWinner(p, c) {

  if (p === c) {
    return "its a draw. No one wins";
  } 
//Example: person and computer both chose rock, then it will be tie

  else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    } 
}
//above explanation: if person choses rock and  computer choses paper, computer wins. if computer choses rock, first condition will become true and it will be a draw. is computer choses scissors, the else statement will run and the player will win! (same explanation for below lines)
else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  }

else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function playerScore(){
    playerPointsCount +=1;
    playerPoints.innerText = `${playerPointsCount}`;
}
function computerScore(){
    computerPointsCount +=1;
    computerPoints.innerText = `${computerPointsCount}`;
}
function playerWins(){
  declaringWinner.style.display='block';
  computerwin.style.display='none';
  playerwin.style.display='block';
}
function computerWins(){
  declaringWinner.style.display='block';
playerwin.style.display='none';
computerwin.style.disply='block';
}
//event listeners (running the game)
//YE LINE NAHI SAMJHA
//PATA KAISE CHAL RHA HIAKI MAINE KAUNSA OPTION SELECT KIYA
choices.forEach((choice) => choice.addEventListener("click", play));
