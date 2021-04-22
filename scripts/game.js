let userName = "Bob";
let botOption = "";
let userOption = "";
let result = "";
let resultText = "";

function enterName() {
  userName = document.getElementById("user").value;
}

function game(option) {
  userOption = option;
  bot();
  outcome();
  getResult();
  drawUIGame();
}

function getResult() {
  if (result === "user") {
    resultText = `${userName} Wins!`;
  } else if (result === "bot") {
    resultText = `${userName} Loses.`;
  } else {
    resultText = `It's a tie.`;
  }
}

function drawUIGame() { 
  const displayElement = document.getElementById("display");
  displayElement.innerHTML = "";

  let movesElement = document.createElement("p");
  movesElement.innerHTML = `${userName} picked ${userOption} and BOT picked ${botOption}`;

  let resultElement = document.createElement("p");
  resultElement.innerHTML = resultText;

  displayElement.appendChild(movesElement);
  displayElement.appendChild(resultElement);
}

function bot() {
  let option = Math.random();
  if (option <= 0.333) {
    botOption = "Rock";
  } else if (option <= 0.666) {
    botOption = "Paper";
  } else {
    botOption = "Scissors";
  }
}

function outcome() {
  // this would compare user to bot
  if (userOption === "Rock") {
    if (botOption === "Rock") {
      result = "tie";
    } else if (botOption === "Paper") {
      result = "bot";
    } else {
      result = "user";
    }
  } else if (userOption === "Paper") {
    if (botOption === "Rock") {
      result = "user";
    } else if (botOption === "Paper") {
      result = "tie";
    } else {
      result = "bot";
    }
  } else {
    if (botOption === "Rock") {
      result = "bot";
    } else if (botOption === "Paper") {
      result = "user";
    } else {
      result = "tie";
    }
  }
}
function reset() {
  userName = "Bob";
  botOption = "";
  userOption = "";
  result = "";
  resultText = "";
  displayElement.innerHTML = "";
  displayElement.remove(movesElement);
  displayElement.remove(resultElement);
}
