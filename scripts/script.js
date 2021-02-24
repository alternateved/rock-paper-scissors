// create a funtion called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  let result = getRandom();

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// create a function that gets input from the user
function playerPlay(playerSelection) {
  return playerSelection.target.getAttribute("id");
}

// creat a function called getRandom that will randomly return a number from 1 to 3
function getRandom() {
  return Math.floor(Math.random() * Math.floor(3)) + 1;
}

// create a function called singlePlay that will play a single round of the game. 
function singlePlay(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    console.log(`It's a tie! ${playerSelection} doesn't do much to ${computerSelection}.`);

  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats Scissors");
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper");
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose! Rock beats Paper");
    return -1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose! Paper beats Scissors");
    return -1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You Lose! Scissors beats Rock");
    return -1;
  }
}

// function called playRound which comments what is happening on the battlefield
function playRound(playerSelection) {
  playerSelection = playerPlay(playerSelection);
  // HERE SET THE CCS ANIMATION
  computerSelection = computerPlay();
  // HERE SET THE COMPUTER ANIMATION
  console.log(`Computer's choice is ${computerSelection}`);
  console.log(`Player's choice is ${playerSelection}`);

  return singlePlay(playerSelection, computerSelection);
}

// create a function called showScore that prints score to the screen
function showVerdict(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(`CONGRATULATIONS! You have won ${playerScore} to ${computerScore}.`);
  } else {
    console.log(`Sorry! Not this time! You have lost ${playerScore} to ${computerScore}.`);
  }
}

const choices = document.querySelectorAll(".images");
choices.forEach(choice => choice.addEventListener("click", playRound));