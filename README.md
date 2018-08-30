# Project-Simonsays

I recreated the classic memory game 'Simon' for my first project at General Assembly's Web Development Immersive program.

## Game Objectives

Remember the sequence!

- User will push the Start button to initiate a random sequence of lights.
- Circles on the screen will light up a random sequence
- User clicks the circles to repeat the exact sequence.
- If the User sequence matches the computer-generated sequence, 'Congratulations!'
- Move to the next set
- Click Stop to end the game

## Learning Objectives

My goal for this first project is to better understand for loops, array methods, and functions, especially how these work in tandem to create 'automated' processes. For loops and array methods are cornerstones in understanding JavaScript and therefore I chose Simon to practice for loops and array methods.

### Learning Objectives

- Have at least 1 for loop
- Have at least 1 example of pushing results of a for loop into an empty array.
- Have at lesat 1 Higher-Order Function

## Technologies Used

- HTML
- CSS
- Vanilla JavaScript
- GH Pages to deploy

## Approach taken

Since I wanted to practice for loops, arrays, and functions, I thought the best approach would be the Functional Approach. This way, I can really see how the computer interprets functions as instructions and gain more practice and exposure to scope. I also believed thought that troubleshooting errors with the Functional Approach would help me visualize the whole process.

## Logic

**Pseudocode Approach:**

1. User clicks on Start to begin the game
2. Add on clicks to all buttons and circles to capture user input
3. On start() -> the circles light up in a random sequence.
   a. On click, randomize array.
   b. Save the random array as answer array to compare User Input against
   c. Have circles flash the random sequence : use DOM to manipulate JS to flash
4. Capture User Input
   a. Create variable for user input.
   b. Store user's clicks and push them into user input array to compare.
5. Compare answer array with user array:
   a. Check if answerArray is equal to userInputArray.
   b. If equal alert Congratulations message and move to next random array
   c. If not equal, alert incorrect and generate another random array
6. Stop game
   a. On click() of Stop, reset and stop the game

## Unsolved Problems

- High-level the game functions but I would like to add a scoring scheme
- I still need to re-factor some code and organize
- Eventually I would like the game to have different levels of difficulty.

## Proud Learning moment

```javascript
var answerArray = [];
let userClicks = [];
let possibleColorArray = ["gray", "green", "blue", "white"];

function startGame() {
  for (i = 0; i < possibleColorArray.length; i++) {
    answerArray.push(
      possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
    );
  }
}
```
