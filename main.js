
//  Variables
var startButton = document.querySelector('#startbutton')
// let grayCircle = document.querySelector('.gray')
let softGreenCircle = document.querySelector('#softgreen-circl')
let darkBlueCircle = document.querySelector('#dark-blue-circle')
let whiteCircle = document.querySelector('#white-circle')
let resetButton = document.querySelector('.reset') 

/*
Click Event test-notes
// startButton.addEventListener('click', startGame)
// on click, you need start game, which is generate random array, but also light up the buttons to show user
grayCircle.addEventListener('click', buttonClick)
seaGreenCircle.addEventListener('click', buttonClick)
darkBlueCircle.addEventListener('click', function () {location.('darkBlue Button clicked') })
whiteCircle.addEventListener('click', buttonClick)
resetButton.addEventListener('click', function () {location.reload('Try Again!') })
location.reload(forceGet)
*/

// functions
// To start game, push Start button to generate random sequence and light up circles
var answerArray = [];
let possibleColorArray = ["gray", "sgreen", "dblue", "white"];

function startGame () {
  for (i = 0; i < possibleColorArray.length; i++) {
    answerArray.push(possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
)}
}

//  capturing user clicks
//  let allCircles = document.querySelectorAll('.circle');
//  console.log(allCircles)

// Notes: NodeList.prototype.addEventListener = function (event_name, callback, useCapture) {
//     for (var i = 0; i < this.length; i++) {
//         this[i].addEventListener(event_name, callback, useCapture);
//     }
// };

document.querySelectorAll(".circle").addEventListener("click", function () {
    alert('clicked');
});

//  allCircles.addEventListener('click', buttonClick)
//  function buttonClick() {
//      if (/* user click */ === allCircles.NodeL
     



/* when you click the startButton it starts the game
    COMPUTER DOES:
    Start game means, on click the circles I need write a code that:
     1) Have the buttons flash a random sequence
       -- and have something flash in JS
     2) Then have another variable called userInput and store the user's    clicked array into userInput array.
       then check if answer array is equal to userInputArray.
     3) If not, spit another random array
     4) click of this button, reset the score
     */
