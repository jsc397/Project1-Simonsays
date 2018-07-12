
//  Variables
var startButton = document.querySelector('#startbutton')
let redCircle = document.querySelector('.test1')
let yellowCircle = document.querySelector('.test2')
let greenCircle = document.querySelector('.test3')
let blueCircle = document.querySelector('.test3')
let resetButton = document.querySelector('.reset')

// click events
// startButton.addEventListener('click', startGame)
// on click, you need start game, which is generate random array, but also light up the buttons to show user
redCircle.addEventListener('click', buttonClick)
yellowCircle.addEventListener('click', buttonClick)
greenCircle.addEventListener('click', buttonClick)
blueCircle.addEventListener('click', buttonClick)
resetButton.addEventListener('click', function () { alert('reset Button clicked') })

// functions
// To start game, push Start button to generate random sequence and light up circles
var answerArray = [];
let possibleColorArray = ["red", "yellow", "green", "blue"];

function startGame () {
     for (i = 0; i < possibleColorArray.length; i++) {
    answerArray.push(possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
    )}
}

// function for buttonClick
var userClickArry [];
function buttonClick () {


}
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