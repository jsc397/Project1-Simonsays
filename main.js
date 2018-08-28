//  Variables
let startButton = document.querySelector("#startbutton");
let resetButton = document.querySelector(".reset");
let topCircle = document.querySelector("#ctop");
let rightCircle = document.querySelector("#cright");
let bottomCircle = document.querySelector("#cbottom");
let leftCircle = document.querySelector("#cleft");
let clicks = document.querySelectorAll("div.circle");
let userClicks = [];

// To start game, push Start button to generate random sequence
let possibleColorArray = [topCircle, rightCircle, bottomCircle, leftCircle];

topCircle.addEventListener("click", function() {
  captureClicks("gray");
});

function startGame() {
  let answerArray = [];
  for (i = 0; i < possibleColorArray.length; i++) {
    answerArray.push(
      possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
    );
  }
  console.log(answerArray);
  return answerArray;
}

//  capturing user clicks
// need to know which one is clicked
function captureClicks(color) {
  userClicks.push(color);
  console.log(userClicks);

  // use this logic for the other userclicks
}

//   let clicks = (document.querySelectorAll(".circle").onclick = function(e) {
//     alert("click");
//   });
//   console.log(clicks);
// }

/*
Next steps pseudocode:
Instead of alert('clicked') I will need to write code that registers which button was clicked
if click == topCircle.value {
  alert('top circle is clicked')
} else if {
  click == rightCircle.value {
    alert('right circle is clicked')
  } else if {
    click == bottomCircle.value {
      alert('bottom circle is clicked)
    } else if {
      click == leftCircle.value {
        alert ('left circle is clicked')
      }
      else {
        alert('nothing selected')
      }
    }
  }
}
-- research if .value is the correct method to match the value of the string.
*/
