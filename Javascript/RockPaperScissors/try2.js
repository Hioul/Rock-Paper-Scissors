// create a rock paper scissor game

// step 1 : create a function that captures the human's choice
// step 2: create a functio that randomly generates the computer's choice
// step 3: create a function that determines the winner of the round
// step 4: create a function that determines the winner of the game

// step 4, broken down:

// how do you win a RPS game? if it is on 5 rounds, the first who reaches a score of 3
//  define the variables that will receive the score
// increment these variables based on the winner of the round
// if the any player didn't reach 3, repeat the game

// how do i determine how the player didn't reach 3 ? by preparing a conditional that
// compares the variable that has the score with 3
// if score is less than 3 then you play another round

// how do i determine who won the game ?
// by creating two conditionals instead of one: if humanScore

// well, that didn't work.
//

function getComputerChoice() {
  function randomNumber() {
    return Math.floor(Math.random() * 3);
  }

  let randomInt = randomNumber();

  if (randomInt == 0) {
    return "Rock";
  } else if (randomInt == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let humanInput = prompt("Rock, Paper or Scissors?");
  humanInput =
    humanInput.charAt(0).toUpperCase() + humanInput.slice(1).toLowerCase();
  return humanInput;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
      humanScore++;
      console.log("You won ! Rock beats Scissors");
      console.log(`Computer:${computerScore} You:${humanScore}`);
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
      humanScore++;
      console.log("You won ! Paper beats Rock");
      console.log(`Computer:${computerScore} You:${humanScore}`);
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
      humanScore++;
      console.log("You won ! Scissors shred Paper");
      console.log(`Computer:${computerScore} You:${humanScore}`);
    } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
      computerScore++;
      console.log("You lose ! Rock beats Scissors");
      console.log(`Computer:${computerScore} You:${humanScore}`);
    } else if (computerChoice == "Paper" && humanChoice == "Rock") {
      computerScore++;
      console.log("You lose ! Paper beats Rock");
      console.log(`Computer:${computerScore} You:${humanScore}`);
    } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
      computerScore++;
      console.log("You lose ! Scissors beats Paper");
      console.log(`Computer:${computerScore} You:${humanScore}`);
    }
  }

  while (humanScore < 3 && computerScore < 3) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore == 3) {
      console.log("Congrats you have won");
      break;
    } else if (computerScore == 3) {
      console.log("Shit, you've lost to a computer");
      break;
    }
  }
}
playGame();
