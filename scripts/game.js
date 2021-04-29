let userName = "Bob";
let botOption = "";
let userOption = "";
let result = "";
let resultText = "";
let endResultText = "";
let userScore = 0;
let botScore = 0;
let round = 0;

function enterName() {
  userName = document.getElementById("user").value;
}

function game(option) {
  userOption = option;
  bot();
  outcome();
  getResult();
  drawUIGame();
  checkScore();
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

  let scoreElement = document.createElement("p");
  scoreElement.innerHTML = `${userName}: ${userScore}/${round}`;

  displayElement.appendChild(movesElement);
  displayElement.appendChild(resultElement);
  displayElement.appendChild(scoreElement);
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
      botScore += 1;
      round += 1;
    } else {
      result = "user";
      userScore += 1;
      round += 1;
    }
  } else if (userOption === "Paper") {
    if (botOption === "Rock") {
      result = "user";
      userScore += 1;
      round += 1;
    } else if (botOption === "Paper") {
      result = "tie";
    } else {
      result = "bot";
      botScore += 1;
      round += 1;
    }
  } else {
    if (botOption === "Rock") {
      result = "bot";
      botScore += 1;
      round += 1;
    } else if (botOption === "Paper") {
      result = "user";
      userScore += 1;
      round += 1;
    } else {
      result = "tie";
    }
  }
}
// Best out of Three
function checkScore() {
  if (userScore === 3||botScore === 3) {
    getFinalScore();
    drawEndUI();
    resetDraw();
    resetDisplay ();
  }
}

// update the text to state if the player wins or loses.
function getFinalScore() {
  if (userScore === 3) {
    endResultText = `${userName} Wins!`
  }
  else {
    endResultText = `${userName} Loses.`
  }
}

//Add onto the UI at the bottom, displaying the final results, the game is over, and to play again.
function drawEndUI() {
  const resetElement = document.getElementById("reset");
  resetElement.innerHTML = "";

  let endElement = document.createElement("p");
  endElement.innerHTML = `${endResultText}`;
  
  let textElement = document.createElement("p");
  textElement.innerHTML = `Game Over.`;

  let buttonElement = document.createElement("p");
  buttonElement.innerHTML = `<button onclick ="reset()">Play Again</button>`

  resetElement.appendChild(endElement);
  resetElement.appendChild(textElement);
  resetElement.appendChild(buttonElement);
}

// Reseting the Game
function reset() {
  resetInput();
  resetUI();
}
// Run all the resets
function resetInput () {
  userName = "Bob";
  botOption = "";
  userOption = "";
  result = "";
  resultText = "";
  endResultText = "";
  userScore = 0;
  botScore = 0;
  round = 0;
  // displayElement.innerHTML = "";
  // displayElement.remove(movesElement);
  // displayElement.remove(resultElement);
  // titleElement.innerHTML = "";
  // startElement.innerHTML = "";
  // drawElement = document.getElementById("draw");
  // drawElement.innerHTML = "";
  // drawElement.remove(drawNameBox());
  // drawElement.remove(drawSelection());
  // drawElement.remove(drawDisplay());
  // drawElement.remove(drawReset());
}
function resetUI () {
  resetTitle();
  resetStart();
  resetReset();
}
// Changes the title on the UI
function resetTitle () {
    titleElement.innerHTML = "Welcome!";
}
// Place back the start button to the UI
function resetStart () {
    startElement.innerHTML = `<br/>
                              <button onclick="start()">Start</button>`;
}
// Add back the div
function resetDraw () {
    drawElement.innerHTML = "";
}
// Add back the div
function resetDisplay () {
    displayElement.innerHTML = "";
}
function resetReset () {
    resetElement.innerHTML = "";
}