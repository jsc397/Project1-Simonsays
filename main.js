
//  Variables
// let startButton = document.querySelector('#startbutton')
// let resetButton = document.querySelector('.reset') 


// functions
// To start game, push Start button to generate random sequence
let startButton = document.querySelector('#startbutton')
let possibleColorArray = ["gray", "sgreen", "dblue", "white"];

function startGame () {
    var answerArray = [];
  for (i = 0; i < possibleColorArray.length; i++) {
    answerArray.push(possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
)}
console.log(answerArray)
}

//  capturing user clicks

const ctop = document.querySelector('#ctop');

ctop.addEventListener('click', function () {
    console.log("You clicked ctop");
})

