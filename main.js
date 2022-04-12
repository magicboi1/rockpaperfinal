const choices = ["rock", "paper", "scissors"];

function game() {
  playRound();
  //play the game
  //play five rounds
  //console based
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
}

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Scissors.  Spelling needs to be exact, but capitilization doesn't matter"
    );
    input = input.toLowerCase();
    check = validateInput(input);
    console.log(input);
  }
  return input;
  //get input from player
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
  //get random input for computer
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

game();
