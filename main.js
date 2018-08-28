//  Variables
let startButton = document.querySelector("#startbutton");
let resetButton = document.querySelector(".reset");
let topCircle = document.querySelector("#ctop");
let rightCircle = document.querySelector("#cright");
let bottomCircle = document.querySelector("#cbottom");
let leftCircle = document.querySelector("#cleft");
let clicks = document.querySelectorAll("div.circle");
let checkButton = document.querySelector("#checkbutton");

let possibleColorArray = ["gray", "green", "blue", "white"];
let userClicks = [];
let answerArray = [];

// To start game, push Start button to generate random sequence
function startGame() {
  // let answerArray = [];
  for (i = 0; i < possibleColorArray.length; i++) {
    answerArray.push(
      possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
    );
  }
  console.log(answerArray);
  return answerArray;
}

// let answerArray = randomArray;

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
//  capturing user clicks and push into empty user array
function captureClicks(color) {
  userClicks.push(color);
  console.log(userClicks);
}

// Compare the user array with the answer array
checkButton.addEventListener("click", compareAnswers);
function compareAnswers() {
  if (answerArray.length === userClicks.length) {
    console.log("yes!!!");
  } else {
    console.log("noooooooooo!");
  }
}
// potentially look into .length
