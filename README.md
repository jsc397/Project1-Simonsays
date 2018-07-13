# Project-Simonsays
For my first project as a Web Development Immersive student at General Assembly, I decided to recreate the classic memory Game.

## Game Objectives
Earn points to beat Simon! 
* User needs to push the start button to initiate a random sequence of lights. 
* Circles on the screen will light up a random sequence
* User clicks the circles to repeat the exact sequence of the flashing lights.
* If the User sequence matches the computer-generated sequence, 'Congratulations!' You've earned 10 points!
* Get to 100 points to win and end the game

##Learning Objectives
My goal for this first project is to gain a deeper understanding of for loops and array methods. For loops and array methods are the cornerstones to understanding JavaScript and therefore I chose this project specifice because I wanted more practice with for loops and array methods.
* Have at least 1 for loop
* Have at least 1 example of pushing results of a for loop into an empty array.
* Have at lesat 1 Higher-Order Function 

## Technologies Used
* HTML
* CSS
* JavaScript
* JS Vanilla

## Approach taken
Since I wanted this project to practice for loops, arrays, and functions, I thought the best approach would be the Functional Approach. This way,not only would I gain more practice and exposure to scope as well, but I would be able to best see how functions operate and run. I thought that troubleshooting errors with the Functional Approach may potentially help me visualize the whole functions process.

## Logic
Pseudocode Approach:
1. User clicks the startButton to start the game
2. COMPUTER DOES:
    * Start game ->
     on click, the circles light up. I need write a code that:
     a) Has the buttons flash a random sequence and have something flash in JS
     b) Then have another variable called userInput and store the user's clicked array into userInput array.
     c) Then check if answerArray is equal to userInputArray.
     d) If equal, increase score, if not, spit another random array
     e) click of this button, reset the score
## Unsolved Problems
* I successfully wrote code to start the game and spit out a random array.
* I successfully got the computer to capture the user clicks
* Still need to write conditional logic that checks the two arrays
* Still need to write code that lights up the Circles.

## Proud Learning moment
```javascript
var answerArray = [];
let possibleColorArray = ["gray", "sgreen", "dblue", "white"];

function startGame () {
  for (i = 0; i < possibleColorArray.length; i++) {
    answerArray.push(possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
)}
}
