(() => {
  // winner is the highest score owner
  let score = {
    user: 0,
    computer: 0,
  };
  const choices = ["rock", "paper", "scissors"];

  // show score helper
  const showScore = () => {
    console.log(`User: ${score.user} - Computer: ${score.computer}`);
  };

  // user won helper
  const userWon = (userChoice, computerChoice) => {
    score.user += 1;
    console.log(`${userChoice} beats ${computerChoice}`);
    showScore();
  };

  // computer won helper
  const computerWon = (computerChoice, userChoice) => {
    score.computer += 1;
    console.log(`${computerChoice} beats ${userChoice}`);
    showScore();
  };

  // start the game
  // a game consists of 5 rounds
  for (let i = 1; i <= 5; i++) {
    // user inputs his choice
    let userChoice = "";
    while (!choices.includes(userChoice)) {
      userChoice = prompt(
        "What is your choice? (rock, paper, scissors):"
      ).toLowerCase();
    }
    console.log(`You chose: ${userChoice}`);

    // computer chooses between rock, paper and scissors
    let computerChoice = choices[Math.round(Math.random() * 2)];
    console.log(`Computer chose: ${computerChoice}`);

    // scissors beats paper
    // paper beats rock
    // rock beats scissors
    if (
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "rock" && computerChoice === "scissors")
    ) {
      userWon();
    } else if (
      (computerChoice === "scissors" && userChoice === "paper") ||
      (computerChoice === "paper" && userChoice === "rock") ||
      (computerChoice === "rock" && userChoice === "scissors")
    ) {
      computerWon();
    } else {
      // a tie
      score.user += 1;
      score.computer += 1;
      console.log("It's a tie!");
      showScore();
    }
  }

  // announce winner
  if (score.user > score.computer) {
    console.log("Congratulations! You won");
  } else if (score.user < score.computer) {
    console.log("Better luck next time! You lost");
  } else {
    console.log("What a game! Its a tie");
  }
})();
