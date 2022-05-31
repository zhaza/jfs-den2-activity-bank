// Dom Variables

let displayCompChoice = document.getElementById('displayCompChoice');
let displayMatch = document.getElementById('displayMatch');

const userObj = {
    wins: 0,
    losses: 0,
    ties: 0,
    _choice: "",
    askUserChoice(){
        let userChoice = "";
        this._choice = userChoice; 
        return userChoice;
    }
}

const compObj = {
    wins: 0,
    losses: 0,
    ties: 0,
    _choice: "",
    generateCompChoice(){
        let randomNum = Math.floor(Math.random() * 3);
        let compChoice;
        if(randomNum === 0){
            compChoice = "Rock";
        } else if (randomNum === 1){
            compChoice = "Scissor"
        } else if (randomNum === 2){
            compChoice = "p"
        }
        this._choice = compChoice; 
        return compChoice;
    }
}

const gameObj = {
    gameCounter:0,
    playGame(event){
        this.gameCounter++;
        let userChoice = event.target.value;
        let computerChoice = compObj.generateCompChoice();
        displayCompChoice.innerHTML = computerChoice;
        displayMatch.innerHTML = `${userChoice} vs. ${computerChoice}`

    if ((userChoice === "Rock" && computerChoice === "Scissor") ||
            (userChoice === "Scissor" && computerChoice === "Paper") || 
            (userChoice === "Paper" && computerChoice === "Rock")) {
            userObj.wins++;
            compObj.losses++;
            displayResult
          } else if (userChoice === computerChoice) {
            userObj.ties++;
            compObj.ties++;
          } else {
            userObj.losses++;
            compObj.wins++;
          }

    //     alert(`Current Standings:
    // You won ${userObj.wins} time(s) and the computer won ${compObj.wins} time(s).
    // You lost ${userObj.losses} time(s) and the computer lost ${compObj.losses} time(s).
    // There was ${userObj.ties} tie(s).
    // ${(userObj.wins > compObj.wins ? `You Win!`: `The Computer Wins!`)}`)

    // if(confirm("Play again?")){
    //     this.playGame();
    // }
    }    
}













