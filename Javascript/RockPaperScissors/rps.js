

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
