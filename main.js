(() => {
  // winner is the one who gets 5 points
  let score = {
    user: 0,
    computer: 0,
  };
  let winner;
  let isPlaying = true;
  const choices = ["rock", "paper", "scissors"];
  const choicesBtns = document.querySelector(".choices");
  const gameOverSection = document.querySelector(".game-over");
  const gameOutcome = document.querySelector(".game-outcome");
  const againBtn = document.querySelector(".play-again");

  const gameOver = () => {
    isPlaying = false;
    choicesBtns.style.display = "none";
    if (winner === "user") {
      gameOutcome.textContent = "You win! 🎉";
    } else {
      gameOutcome.textContent = "You lose! 😵";
    }
    gameOverSection.style.display = "block";
  };

  const checkScore = () => {
    if (score.user === 5) {
      winner = "user";
      gameOver();
    }
    if (score.computer === 5) {
      winner = "computer";
      gameOver();
    }
  };

  const updateScore = () => {
    document.querySelector(".score__points--user").textContent = score.user;
    document.querySelector(".score__points--computer").textContent =
      score.computer;
  };

  const playRound = (userChoice) => {
    // computer chooses between rock, paper and scissors
    let computerChoice = choices[Math.round(Math.random() * 2)];

    // scissors beats paper
    // paper beats rock
    // rock beats scissors
    if (
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "rock" && computerChoice === "scissors")
    ) {
      score.user += 1;
    } else if (
      (computerChoice === "scissors" && userChoice === "paper") ||
      (computerChoice === "paper" && userChoice === "rock") ||
      (computerChoice === "rock" && userChoice === "scissors")
    ) {
      score.computer += 1;
    } else {
      // a tie
      score.user += 1;
      score.computer += 1;
    }
    checkScore();
    updateScore();
  };

  // user inputs his choice
  let userChoice = "";
  choicesBtns.addEventListener("click", (e) => {
    userChoice = e.target.parentNode.dataset.choice;
    playRound(userChoice);
  });

  againBtn.addEventListener("click", () => {
    isPlaying = true;
    choicesBtns.style.display = "block";
    gameOverSection.style.display = "none";
    score.user = 0;
    score.computer = 0;
    winner = "";
    updateScore();
  });
})();
