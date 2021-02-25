// REWORK:
// 1. Make global variables to keep it under control
// 2. Fix unending loop somehow and finish the game
// 3. Make it possible to play once again

const playerScore = document.querySelector("#player-score");
const computerContainer = document.querySelector(".computer-side");
const computerScore = document.querySelector("#computer-score");
const commentary = document.querySelector(".intro > p");
const choices = document.querySelectorAll(".images");

let playerResult = 0;
let computerResult = 0;

// funtion called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  let result = getRandom();

  if (result === 1) {
    showComputerMove("images/rock.png");
    return "rock";
  } else if (result === 2) {
    showComputerMove("images/paper.png");
    return "paper";
  } else {
    showComputerMove("images/scissors.png");
    return "scissors";
  }
}

// function that loops through player's choices and removes applied class
function removeEffect() {
  let choices = document.querySelectorAll(".images");
  choices.forEach(choice => {
    if (choice.classList.contains("active")) {
      choice.classList.remove('active');
    } else return;
  })

}

// function that outputs computer move
function showComputerMove(source) {
  let newMove = document.createElement("img");
  let computerMove = document.querySelector(".computer-side > img");

  newMove.setAttribute("src", source);
  computerContainer.replaceChild(newMove, computerMove);
}

// function that gets input from the user
function playerPlay(playerSelection) {
  removeEffect();
  playerSelection.target.classList.add('active');
  return playerSelection.target.getAttribute("id");
}

// function called getRandom that will randomly return a number from 1 to 3
function getRandom() {
  return Math.floor(Math.random() * Math.floor(3)) + 1;
}

// function called singlePlay that will play a single round of the game. 
function singlePlay(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    commentary.textContent = `It's a tie! ${playerSelection} doesn't do much to ${computerSelection}.`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    commentary.textContent = "You Win! Rock beats Scissors";
    playerResult++;
    playerScore.textContent = `Player: ${playerResult}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    commentary.textContent = "You Win! Scissors beats Paper";
    playerResult++;
    playerScore.textContent = `Player: ${playerResult}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    commentary.textContent = "You Win! Paper beats Rock";
    playerResult++;
    playerScore.textContent = `Player: ${playerResult}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    commentary.textContent = "You Lose! Rock beats Paper";
    computerResult++;
    computerScore.textContent = `Computer:  ${computerResult}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    commentary.textContent = "You Lose! Paper beats Scissors";
    computerResult++;
    computerScore.textContent = `Computer:  ${computerResult}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    commentary.textContent = "You Lose! Scissors beats Rock";
    computerResult++;
    computerScore.textContent = `Computer:  ${computerResult}`;
  }
}

// function called playRound which comments what is happening on the battlefield
function playRound(playerSelection) {
  playerSelection = playerPlay(playerSelection);
  computerSelection = computerPlay();
  singlePlay(playerSelection, computerSelection);
}

// function called showScore that prints score to the screen
function showVerdict(playerScore, computerScore) {

  commentary.classList.add("typing-effect");
  if (playerScore > computerScore) {
    commentary.textContent = `CONGRATULATIONS! You have won ${playerScore} to ${computerScore}.`;
  } else {
    commentary.textContent = `Sorry! Not this time! You have lost ${playerScore} to ${computerScore}.`;
  }
}

// function that plays a 5-round game and keeps score
function playGame() {

  choices.forEach(choice => {
    choice.addEventListener("click", event => {
      playRound(event);
      if (playerResult == 5 || computerResult == 5) {
        showVerdict(playerResult, computerResult);
      }
    })
  });
}

playGame();