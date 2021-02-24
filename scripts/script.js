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
  let previousChoices = document.querySelectorAll(".images");
  previousChoices.forEach(choice => {
    if (choice.classList.contains("active")) {
      choice.classList.remove('active');
    } else return;
  })

}

// function that outputs computer move
function showComputerMove(source) {
  let computerContainer = document.querySelector(".computer-side");
  let oldMove = document.querySelector(".computer-side > img");
  let move = document.createElement("img");

  move.setAttribute("src", source);
  computerContainer.replaceChild(move, oldMove);
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
  const comment = document.querySelector(".intro > p");
  if (playerSelection === computerSelection) {
    comment.textContent = `It's a tie! ${playerSelection} doesn't do much to ${computerSelection}.`;

  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    comment.textContent = "You Win! Rock beats Scissors";
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    comment.textContent = "You Win! Scissors beats Paper";
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    comment.textContent = "You Win! Paper beats Rock";
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    comment.textContent = "You Lose! Rock beats Paper";
    return -1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    comment.textContent = "You Lose! Paper beats Scissors";
    return -1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    comment.textContent = "You Lose! Scissors beats Rock";
    return -1;
  }
}

// function called playRound which comments what is happening on the battlefield
function playRound(playerSelection) {
  playerSelection = playerPlay(playerSelection);
  computerSelection = computerPlay();
  console.log(`Computer's choice is ${computerSelection}`);
  console.log(`Player's choice is ${playerSelection}`);

  return singlePlay(playerSelection, computerSelection);
}

// function called showScore that prints score to the screen
function showVerdict(playerScore, computerScore) {
  const verdict = document.querySelector(".intro > p");

  if (playerScore > computerScore) {
    verdict.textContent = `CONGRATULATIONS! You have won ${playerScore} to ${computerScore}.`;
  } else {
    verdict.textContent = `Sorry! Not this time! You have lost ${playerScore} to ${computerScore}.`;
  }
}

// function that plays a 5-round game and keeps score
function playGame() {
  let result = 0;
  let playerResult = 0;
  let computerResult = 0;

  const playerScore = document.querySelector("#player-score");
  const computerScore = document.querySelector("#computer-score");


  const choices = document.querySelectorAll(".images");

  choices.forEach(choice => {
    choice.addEventListener("click", event => {
      result = playRound(event);
      if (playerResult == 5 || computerResult == 5) {
        showVerdict(playerResult, computerResult);
      } else {
        if (result == 1) {
          playerResult++;
          playerScore.textContent = `Player: ${playerResult}`;
        } else if (result == -1) {
          computerResult++;
          computerScore.textContent = `Computer:  ${computerResult}`;
        }
      }
    })
  });

}

playGame();