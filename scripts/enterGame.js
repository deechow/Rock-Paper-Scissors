// establish the elements that will be edited
let title = document.getElementById("title").innerHTML;
let start = document.getElementById("start").innerHTML;
let draw = document.getElementById("draw").innerHTML;

// pressing start will change the screen.
// Replacing the title, remove the start button, and draw the new interface.
function start() {
    changeTitle();
    removeUI();
    drawUI();
}

// Changes the title on the UI
function changeTitle() {
    title = "Rock Paper Scissors";
}

// Removes the start button from the UI
function removeUI() {
    start = "";
}

// Draws the entire game, by writing in all the new codes.
function drawUI {
    // Define draw and drawElement
    draw = "";
    drawElement.innerHTML = "";
    // Run the 3 functions to setup the codes.
    drawNameBox();
    drawSelection();
    drawDisplay();
    // Add the codes to be displayed on the user interfaces.
    drawElement.appendChild(drawNameBox);
    drawElement.appendChild(drawSelection);
    drawElement.appendChild(drawDisplay);
}
// Setup the codes that would be written to draw the name box.
function drawNameBox(){
    let nameBox = document.createElement("p");
    let input = `<input id="user" type="text" value="" placeholder="Enter Name" />`;
    let button = `<button onclick="enterName()">Enter</button>`;
    nameBox.innerHTML = `${input} ${button}`;
}
// Setup the codes that would be written to draw the selection interfaces.
function drawSelection(){
    let selection = document.createElement("p");
    let select = `<p>Please select Rock, Paper, or Scissors.</p>`;
    let rock = `<button onclick="game('Rock')">
                <img src="https://static.thenounproject.com/png/477914-200.png" width="50" alt="Rock."/>
                </button>`;
    let paper = `<button onclick="game('Paper')">
                 <img src="https://static.thenounproject.com/png/477912-200.png" width="50" alt="Paper."/>
                 </button>`;
    let scissors = `<button onclick="game('Scissors')">
                    <img src="https://static.thenounproject.com/png/88666-200.png" width="50" alt="Scissors."/>
                    </button>`;
    selection.innerHTML = `${select} ${rock} ${paper} ${scissors}`;
}
// Setup the codes that would be written to draw the display portions.
function drawDisplay() {
    let displayElement = document.createElement("p");
    displayElement.innerHTML=`<p id="display"></p>`;
}