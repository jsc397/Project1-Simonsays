// when you click the startButton it starts the game
// COMPUTER DOES:
/* Start game means, on click the circles I need write a code that:
     1) Have the buttons flash a random sequence
       --find out how to make a random sequence and have something flash in JS */
let startButton = document.querySelector('#startbutton')

// USER DOES: after the random sequence flashes, then player needs to input the same sequence. 
/* This means I need to write code that checks a logic with an if statement. If the user input === computer's sequence then generates a new sequence & increase score*/

/*This also means I need to code on click for the buttons to recognize user input so something like on click light up. If user input === computer sequence then just new sequence, but no score raise. */

let redCircle = document.querySelector('.test1')
let yellowCircle = document.querySelector('.test2')
let greenCircle = document.querySelector('.test3')
let blueCircle = document.querySelector('.test3')

// on click of this button, reset the score
let resetButton = document.querySelector('.reset')

// ask about transform-translate to shake the color buttons

/* two options.... I can have a color array... that */


let answerArray = "";
let colorArray = ["red", "yellow", "green", "blue"]
for (i = 0; i < colorArray.length; i++) {
    answerArray += colorArray
}

// put the answers for the random array into answer array
// then have another variable called userInput and store the user's clicked array into userInput array.
// then check if answer array is equal to userInputArray.
// If not,.....we'lll think about that one later