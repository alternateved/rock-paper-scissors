// create a funtion called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  let result = getRandom();

  if (result === 1) {
    return "Rock";
  } else if (result === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// create a function that gets input from the user
function playerPlay() {
  let result = capitalize(prompt("What is your play?"));

  while (result !== "Rock" && result !== "Paper" && result !== "Scissors") {
    result = capitalize(prompt("Nope. Please provide proper answer (Rock/Paper/Scissors)."));
  }

  return result;
}

// creat a function called getRandom that will randomly return a number from 1 to 3
function getRandom() {
  return Math.floor(Math.random() * Math.floor(3)) + 1;
}

// creat a function that capitalizes provided string
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

// create a function called singlePlay that will play a single round of the game. 
function singlePlay(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);

  if (playerSelection === computerSelection) {
    console.log(`%cIt's a tie! ${playerSelection} doesn't do much to ${computerSelection}.`, "color: blue; font-family:monospace; font-size: 14px")

  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log("%cYou Win! Rock beats Scissors", "color: green; font-family:monospace; font-size: 14px");
    return 1;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log("%cYou Win! Scissors beats Paper", "color: green; font-family:monospace; font-size: 14px");
    return 1;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("%cYou Win! Paper beats Rock", "color: green; font-family:monospace; font-size: 14px");
    return 1;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("%cYou Lose! Rock beats Paper", "color: red; font-family:monospace; font-size: 14px");
    return -1;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    console.log("%cYou Lose! Paper beats Scissors", "color: red; font-family:monospace; font-size: 14px");
    return -1;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    console.log("%cYou Lose! Scissors beats Rock", "color: red; font-family:monospace; font-size: 14px");
    return -1;
  }
}

// function called playRound which comments what is happening on the battlefield
function playRound(playerSelection, computerSelection) {
  console.log(`%cPlayer's choice is ${playerSelection}`, "color: white; font-family:monospace; font-size: 14px");
  console.log(`%cComputer's choice is ${computerSelection}`, "color: white; font-family:monospace; font-size: 14px");

  return singlePlay(playerSelection, computerSelection);
}

// create a function called game which will use singlePlay to play a 5-round game and also keeps score
function playGame() {
  let round = 1;
  let playerResult = 0;
  let computerResult = 0;

  while (round <= 5) {
    result = playRound(playerPlay(), computerPlay());
    if (result === 1) {
      playerResult++;
    } else {
      computerResult++
    }
    round++;
  }

  showVerdict(playerResult, computerResult);
}

// create a function called showScore that prints score to the screen
function showVerdict(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(`%cCONGRATULATIONS! You have won ${playerScore} to ${computerScore}.`, "color: green; font-family:monospace; font-size: 14px")
  } else {
    console.log(`%cSorry! Not this time! You have lost ${playerScore} to ${computerScore}.`, "color: red; font-family:monospace; font-size: 14px")
  }
}
