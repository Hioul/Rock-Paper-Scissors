// Plan to solve rock paper scissors :
// 1- Understanding the problem :
// Create a game that will use the input (rock, paper, scissors) of a player
// It will then generate the answer of the computer (rock, paper, scissors)
// It will determine the winner between player and computer
// It will output the name of the winner

// What are my constraints :
// A player or computer cannot have more than 3 choices (rock paper or scissors)
// the player must play first
// the winner is the one who reached a score of 3

// 2- Divide the problem :

// Step 1: Capture the user's choice (rock paper scissors) (done)
// Step 2: Generate the computer's choice (rock paper or scissors) (done)
// Step 3: Decide on the winner (done)
// Step 4: Log rounds (done)
// Step 5: repeat (???)

// TOP asks me to proceed differently, i'll follow them as they are my sensei.

// step 2 : Write the logic to get the computer choice.

// Big Problem: get the computer to return 1 of 3 choices rock paper of scissors randomly.
// Smaller problem : get the computer to return a value between 0 and 2 :
// Solution : a function that uses Math.floor(Math.random()*3)
// Smaller problem :  0 to rock, 1 to paper, and 3 to Scissors:
// Solution: a function based on the previous function, will return rock if randomNumber == 0, paper if randomNumber == 1, scissors if randomNumber == 2;
// Smaller problem : log said value on the console.
// log the value to the console using console.log

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

// step 3 :Write the logic to get the human choice

//Make your function’s humanChoice parameter case-insensitive so that players
//can input “rock”, “ROCK”, “RocK”, or other variations :

function getHumanChoice() {
  let humanInput = prompt("Rock, Paper or Scissors?");
  humanInput =
    humanInput.charAt(0).toUpperCase() + humanInput.slice(1).toLowerCase();
  return humanInput;
}

// Step 4: Log rounds

// let humanScore = 0;
// let computerScore = 0;

//Step 5: Write the logic to play a single round

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice == "Rock" && computerChoice == "Scissors") {
//     humanScore++;
//     console.log("You won ! Rock beats Scissors");
//   } else if (humanChoice == "Paper" && computerChoice == "Rock") {
//     humanScore++;
//     console.log("You won ! Paper beats Rock");
//   } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
//     humanScore++;
//     console.log("You won ! Scissors shred Paper");
//   } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
//     computerScore++;
//     console.log("You lose ! Rock beats Scissors");
//   } else if (computerChoice == "Paper" && humanChoice == "Rock") {
//     computerScore++;
//     console.log("You lose ! Paper beats Rock");
//   } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
//     computerScore++;
//     console.log("You lose ! Scissors beats Paper");
//   }
// }
// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

//Step 6: Write the logic to play the whole game

// step 6 : write the logic for the whole game

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
