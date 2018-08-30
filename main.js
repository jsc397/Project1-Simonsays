//  Variables
let startButton = document.querySelector("#startbutton");
let resetButton = document.querySelector("#reset");
let topCircle = document.querySelector("#ctop");
let rightCircle = document.querySelector("#cright");
let bottomCircle = document.querySelector("#cbottom");
let leftCircle = document.querySelector("#cleft");
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
  var time = 0;
  // for loop through evvery color in answerArray
  answerArray.forEach(function(color) {
    time = time + 700;
    setTimeout(function() {
      animate(color);
    }, time);
  });
}

// Add event listeners for each colored circle
topCircle.addEventListener("click", function() {
  captureClicks("gray");
  animate("gray");
});
rightCircle.addEventListener("click", function() {
  captureClicks("blue");
  animate("blue");
});
bottomCircle.addEventListener("click", function() {
  captureClicks("white");
  animate("white");
});

leftCircle.addEventListener("click", function() {
  captureClicks("green");
  animate("green");
});
// Capture user clicks and push clicks into empty userClick array
function captureClicks(color) {
  userClicks.push(color);
}

// Compare the user array with the answer array
checkButton.addEventListener("click", compareAnswers);
function compareAnswers() {
  if (JSON.stringify(answerArray) === JSON.stringify(userClicks)) {
    alert("Correct!");
    reset();
    startGame();
  } else {
    alert("Try Again!");
    reset();
    startGame();
  }
}

// Reset game to play again
resetButton.addEventListener("click", reset);
function reset() {
  answerArray = [];
  userClicks = [];
}

//Lightup answerArray
function animate(color) {
  let chosenCircle = document.getElementsByClassName(color);
  chosenCircle[0].classList.add("lightUp");
  setTimeout(function() {
    chosenCircle[0].classList.remove("lightUp");
  }, 250);
}
