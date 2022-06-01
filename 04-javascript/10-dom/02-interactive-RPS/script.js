// Dom Variables
let displayCompChoice = document.getElementById("displayCompChoice");
let displayVs = document.getElementById("displayVs");
let displayGamesPlayed = document.getElementById("displayGamesPlayed");
let displayWins = document.getElementById("displayWins");
let displayLosses = document.getElementById("displayLosses");
let displayTies = document.getElementById("displayTies");
let displayResult = document.getElementById("displayResult");

const userObj = {
  wins: 0,
  losses: 0,
  ties: 0,
  _choice: "",
  askUserChoice() {
    let userChoice = "";
    this._choice = userChoice;
    return userChoice;
  },
};

const compObj = {
  wins: 0,
  losses: 0,
  ties: 0,
  _choice: "",
  generateCompChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let compChoice;
    if (randomNum === 0) {
      compChoice = "Rock";
    } else if (randomNum === 1) {
      compChoice = "Scissors";
    } else if (randomNum === 2) {
      compChoice = "Paper";
    }
    this._choice = compChoice;
    return compChoice;
  },
};

const gameObj = {
  gameCounter: 0,
  playGame(event) {
    function reset() {
      if (userObj.wins > userObj.losses) {
        displayResult.innerText = "Player Won";
      } else if (userObj.wins < userObj.losses) {
        displayResult.innerText = "Player Lost";
      } else {
        displayResult.innerText = "Tie!";
      }
      gameObj.gameCounter = 0;
      userObj.wins = 0;
      userObj.losses = 0;
      userObj.ties = 0;
      return (displayVs.innerText = "Wanna play more?");
    }
    this.gameCounter++;
    let userChoice = event.target.innerText;
    let computerChoice = compObj.generateCompChoice();
    displayCompChoice.innerText = computerChoice;
    displayVs.innerText = `${userChoice}    vs.    ${computerChoice}`;
    displayGamesPlayed.innerText = this.gameCounter;
    if (this.gameCounter === 5) {
      return reset();
    }
    if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Scissors" && computerChoice === "Paper") ||
      (userChoice === "Paper" && computerChoice === "Rock")
    ) {
      userObj.wins++;
      // compObj.losses++;
      // displayGamesWon.parentElement.style.backgroundColor = "green";
      // displayGamesWon.parentElement.style.color = "white";
      displayResult.innerHTML = `Your ${userChoice} won this match!`;
    } else if (userChoice === computerChoice) {
      userObj.ties++;
      // compObj.ties++;
      // displayGamesTied.parentElement.style.backgroundColor = "yellow";
      displayResult.innerHTML = `The game is a tie`;
    } else {
      userObj.losses++;
      // compObj.wins++;
      // displayGamesLost.parentElement.style.backgroundColor = "red";
      // displayGamesLost.parentElement.style.color = "white";
      displayResult.innerHTML =
        userChoice === "Scissors"
          ? `Your Scissors were defeated...`
          : `Your ${userChoice} was defeated...`;
    }

    displayWins.innerHTML = userObj.wins;
    displayLosses.innerHTML = userObj.losses;
    displayTies.innerHTML = userObj.ties;
  },
};
