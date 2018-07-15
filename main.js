
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
let circles = document.querySelectorAll('.circle')
let cicleArray = Array.from(circles).forEach(addListener)
// function addListener() {

// }

// function eventListener {

// }

// Array.from(NodeList);
// console.log(circles)

// let myArray = Array.from(nl)
//  NodeList.prototype.addEventListener = function (class_name, callback) {
//     for (var i = 0; i < this.length; i++) {
//         this[i].addEventListener(class_name, callback);
//     }
// };

// document.querySelectorAll("circle").addEventListener("click", function () {
//     alert('clicked');
// });



