const scoreContainer = document.querySelector(".score");
const computerContainer = document.querySelector(".computer-side");
const computerScore = document.querySelector("#computer-score");
const playerScore = document.querySelector("#player-score");
const introContainer = document.querySelector(".intro");
const commentary = document.querySelector(".intro > p");
const choices = document.querySelectorAll(".images");
const tryAgainButton = document.querySelector("#try-again");

let playerResult = 0;
let computerResult = 0;

// funtion that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
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

// function shows player's input
function showPlayerMove(playerSelection) {
  removeEffect();
  playerSelection.target.classList.add('active');
}

// function that will randomly return a number from 1 to 3
function getRandom() {
  return Math.floor(Math.random() * Math.floor(3)) + 1;
}

// function which comments what is happening on the battlefield
function playRound(playerSelection) {
  showPlayerMove(playerSelection);
  playerSelection = playerSelection.target.getAttribute("id");
  computerSelection = computerPlay();

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

// function that prints score to the screen
function showVerdict() {
  let verdict = document.createElement("h3");

  verdict.classList.add("typing-effect");
  playerScore.classList.add("hidden");
  computerScore.classList.add("hidden");
  if (playerResult > computerResult) {
    verdict.textContent = `CONGRATULATIONS! You have won ${playerResult} to ${computerResult}.`;
  } else {
    verdict.textContent = `Sorry! Not this time! You have lost ${playerResult} to ${computerResult}.`;
  }
  scoreContainer.appendChild(verdict);
}

// function that reloads page with player's consent
function resetGame() {
  let endComment = document.createElement("h3");
  endComment.classList.add("end-game");
  endComment.textContent = "Would you like to try your luck again?";
  introContainer.replaceChild(endComment, commentary);

  tryAgainButton.classList.remove("hidden");
  tryAgainButton.addEventListener("click", () => {
    window.location.reload();
  });
}

// function that disables interactive side of the page
function finishGame() {
  if (playerResult == 5 || computerResult == 5) {
    choices.forEach(choice => {
      choice.setAttribute("disabled", "");
      choice.classList.add("opacity");
      choice.style.pointerEvents = "none";
      computerContainer.removeChild(computerContainer.firstChild);
    });
    showVerdict();
    resetGame();
  }
}

// function that plays a 5-round game and keeps score
function playGame() {

  choices.forEach(choice => {
    choice.addEventListener("click", event => {
      playRound(event);
      finishGame();
    })
  });
}

playGame();