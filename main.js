
//  Variables
var startButton = document.querySelector('#startbutton')
// let grayCircle = document.querySelector('.gray')
let seaGreenCircle = document.querySelector('.sgreen')
let darkBlueCircle = document.querySelector('.dblue')
let whiteCircle = document.querySelector('.white')
let resetButton = document.querySelector('.reset') 

// click events
// startButton.addEventListener('click', startGame)
// on click, you need start game, which is generate random array, but also light up the buttons to show user
// grayCircle.addEventListener('click', buttonClick)
// seaGreenCircle.addEventListener('click', buttonClick)
darkBlueCircle.addEventListener('click', function () {alert('reset Button clicked') })
// whiteCircle.addEventListener('click', buttonClick)
resetButton.addEventListener('click', function () {alert('reset Button clicked') })

// functions
// To start game, push Start button to generate random sequence and light up circles
var answerArray = [];
let possibleColorArray = ["gray", "sgreen", "dblue", "white"];

function startGame () {
  for (i = 0; i < possibleColorArray.length; i++) {
    answerArray.push(possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
)}
}
// // checking the gray
// let grayCircle = document.querySelector('.test1')
// grayCircle.addEventListener('click', buttonClick)
// function checkUser () {
//     if userClick[0] === answerArray[0] {
//         // move on
//     }
// }

// // function for buttonClick
// var userClickArry [];
// function buttonClick () {

// }
/*
// when you click the startButton it starts the game
// COMPUTER DOES:
/* Start game means, on click the circles I need write a code that:
     1) Have the buttons flash a random sequence
       -- and have something flash in JS */

// Then have another variable called userInput and store the user's clicked array into userInput array.
// then check if answer array is equal to userInputArray.
// If not,.....we'lll think about that one later

// on click of this button, reset the score