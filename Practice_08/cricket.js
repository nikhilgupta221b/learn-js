let score = JSON.parse(localStorage.getItem("Score")) || {
    won: 0,
    lost: 0,
    tie: 0,
  };
  score.displayScore = function (score) {
    localStorage.setItem("Score", JSON.stringify(this));
    return `Won: ${this.won}, Lost: ${this.lost}, Tied: ${this.tie}.`;
  };

  document.querySelector("#user-choice").innerText = ``;
  document.querySelector("#computer-choice").innerText = ``;
  document.querySelector("#result").innerText = "";
  document.querySelector("#score").innerText = score.displayScore();

  function clearPressed() {
    localStorage.clear();
    score = { won: 0, lost: 0, tie: 0 };
    score.displayScore = function (score) {
      localStorage.setItem("Score", JSON.stringify(this));
      return `Won: ${this.won}, Lost: ${this.lost}, Tied: ${this.tie}.`;
    };
    document.querySelector("#user-choice").innerText = ``;
    document.querySelector("#computer-choice").innerText = ``;
    document.querySelector("#result").innerText = "";
    document.querySelector("#score").innerText = "";
  }
  function whoWon(userChoice) {
    let computerChoice;
    let number = Math.random() * 3;
    if (number < 1) computerChoice = "Bat";
    else if (number < 2) computerChoice = "Ball";
    else computerChoice = "Stump";

    if (userChoice === "Bat") {
      if (computerChoice === "Bat") {
        score.tie++;
        printResult(userChoice, computerChoice, `It's a tie`, score);
      } else if (computerChoice === "Ball") {
        score.won++;
        printResult(userChoice, computerChoice, `You win.`, score);
      } else if (computerChoice === "Stump") {
        score.lost++;
        printResult(userChoice, computerChoice, `Computer wins`, score);
      }
    }
    if (userChoice === "Ball") {
      if (computerChoice === "Bat") {
        score.lost++;
        printResult(userChoice, computerChoice, `Computer wins`, score);
      } else if (computerChoice === "Ball") {
        score.tie++;
        printResult(userChoice, computerChoice, `It's a tie`, score);
      } else if (computerChoice === "Stump") {
        score.won++;
        printResult(userChoice, computerChoice, `You win.`, score);
      }
    }
    if (userChoice === "Stump") {
      if (computerChoice === "Bat") {
        score.won++;
        printResult(userChoice, computerChoice, `You win.`, score);
      } else if (computerChoice === "Ball") {
        score.lost++;
        printResult(userChoice, computerChoice, `Computer wins`, score);
      } else if (computerChoice === "Stump") {
        score.tie++;
        printResult(userChoice, computerChoice, `It's a tie`, score);
      }
    }
  }
  function printResult(userChoice, computerChoice, result) {
    document.querySelector(
      "#user-choice"
    ).innerText = `You chose ${userChoice}`;
    document.querySelector(
      "#computer-choice"
    ).innerText = `Computer chose ${computerChoice}`;
    document.querySelector("#result").innerText = result;
    document.querySelector("#score").innerText = score.displayScore(score);
  }