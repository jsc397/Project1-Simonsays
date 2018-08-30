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

//adds 1 new answer to the answerArray
function createAnswerArr() {
  answerArray.push(
    possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
  );

  var time = 0;
  console.log(answerArray);
  // for loop through evvery color in answerArray
  answerArray.forEach(function(color) {
    console.log(color);
    time = time + 3000;
    setTimeout(function() {
      animate(color);
    }, time);
  });
}

// To start game, push Start button and generate random sequence
function startGame() {
  createAnswerArr();
}

// Add event listeners for each colored circle
topCircle.addEventListener("click", function() {
  captureClicks("gray");
  animate("gray");
  compareAnswers();
});
rightCircle.addEventListener("click", function() {
  captureClicks("blue");
  animate("blue");
  compareAnswers();
});
bottomCircle.addEventListener("click", function() {
  captureClicks("white");
  animate("white");
  compareAnswers();
});

leftCircle.addEventListener("click", function() {
  captureClicks("green");
  animate("green");
  compareAnswers();
});

// Capture user clicks and push clicks into empty userClick array
function captureClicks(color) {
  userClicks.push(color);
  alert(userClicks);
}

// Compare the user array with the answer array
checkButton.addEventListener("click", compareAnswers);
function compareAnswers() {
  for (var i = 0; i < userClicks.length; i++) {
    if (answerArray[i] !== userClicks[i]) {
      alert("loser, Game will restart over.");
      restart();
      break;
    }
    if (answerArray.length - 1 == i && answerArray[i] == userClicks[i]) {
      //add a new color to answer array
      createAnswerArr();
    }
  }
}

// Reset game to play again
resetButton.addEventListener("click", restart);
function restart() {
  answerArray = [];
  userClicks = [];
  alert('Game restarted. Press "Start Game" to play again.');
}
//Lightup answerArray
function animate(color) {
  let chosenCircle = document.getElementsByClassName(color);

  chosenCircle[0].classList.add("lightUp");
  console.log(chosenCircle[0]);

  setTimeout(function() {
    chosenCircle[0].classList.remove("lightUp");
  }, 2000);
}
