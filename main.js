//  Variables
let startButton = document.querySelector('#startbutton')
let resetButton = document.querySelector('.reset')
let topCircle = document.querySelector('#ctop') 
let rightCircle = document.querySelector('#cright') 
let bottomCircle = document.querySelector('#cbottom')
let leftCircle = document.querySelector('#cleft') 

// To start game, push Start button to generate random sequence
let possibleColorArray = ["gray", "sgreen", "dblue", "white"];

function startGame () {
    var answerArray = [];
  for (i = 0; i < possibleColorArray.length; i++) {
    answerArray.push(possibleColorArray[Math.floor(Math.random() * possibleColorArray.length)]
)}
console.log(answerArray)
}

//  capturing user clicks
NodeList.prototype.addEventListener = function (class_name, callback) {
  for (var i = 0; i < this.length; i++) {
    this[i].addEventListener(class_name, callback);
  }
};

document.querySelectorAll(".circle").addEventListener("click", function () {
  alert('clicked');
});

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