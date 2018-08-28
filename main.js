//  Variables
let startButton = document.querySelector("#startbutton");
let resetButton = document.querySelector("#reset");
let topCircle = document.querySelector("#ctop");
let rightCircle = document.querySelector("#cright");
let bottomCircle = document.querySelector("#cbottom");
let leftCircle = document.querySelector("#cleft");
let clicks = document.querySelectorAll("div.circle");
let checkButton = document.querySelector("#checkbutton");

// Global variables
let possibleColorArray = ["gray", "green", "blue", "white"];
let userClicks = [];
let answerArray = [];

// To start game, push Start button and generate random sequence
function startGame() {
  for (i = 0; i < possibleColorArray.length; i++) {
    answerArray.push(
      possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
    );
  }
  console.log(answerArray);
  // animate(sequence);
}

// Add event listeners for each colored circle
topCircle.addEventListener("click", function() {
  captureClicks("gray");
});
rightCircle.addEventListener("click", function() {
  captureClicks("blue");
});
bottomCircle.addEventListener("click", function() {
  captureClicks("white");
});

leftCircle.addEventListener("click", function() {
  captureClicks("green");
});
// Capture user clicks and push clicks into empty userClick array
function captureClicks(color) {
  userClicks.push(color);
  alert(userClicks);
}

// Compare the user array with the answer array
checkButton.addEventListener("click", compareAnswers);
function compareAnswers() {
  if (JSON.stringify(answerArray) === JSON.stringify(userClicks)) {
    alert("yes!!!");
  } else {
    alert("noooooooooo!");
  }
}

// Reset game to play again
resetButton.addEventListener("click", restart);
function restart() {
  answerArray = [];
  userClicks = [];
  startGame();
}
//Lightup answerArray
function animate(answerArray) {
  var i = 0;
  var interval = setInterval(function() {
    // lightUp(answerArray[i])
    console.log(answerArray[i]);
    i++;
    if (i >= answerArray.length) {
      clearInterval(interval);
    }
  }, 1000);
}
