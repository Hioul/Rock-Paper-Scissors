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

// Step 3: Decide on the winner
// 

// Step 4: Log rounds
// Step 5: repeat

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
    console.log("Rock");
  } else if (randomInt == 1) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

// step 1 :Write the logic to get the human choice

//Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.

//
function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?");
  if (
    humanChoice == "Rock" ||
    humanChoice == "Paper " ||
    humanChoice == "Scissors "
  ) {
    console.log(`You picked ${humanChoice}`);
  } else {
    alert("Do you even know how to play the game?");
  }
}

// Step 4: Log rounds

let humanScore = 0;
let computerScore = 0;

// Step 3: Decide on the winner

//Step 5: Write the logic to play a single round
//Your game will be played round by round.
//You will write a function that takes the human and computer player choices as arguments,
//plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. 
// Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
