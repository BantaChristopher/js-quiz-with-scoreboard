// todo timer function

var timerEl = document.getElementById('countdown');

function countdown() {
  var timeLeft = 76;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "0";
    }

  }, 1175);
}

// todo something to register when start quiz is pressed
// todo a function to run when start quiz is pressed
// todo start couting down

var body = document.body;
var startEl = document.getElementById('gameStart');
var mainEl = document.createElement('main');
var mainRemove = document.getElementById("mainRemove");
var h1El = document.createElement("h1");
var headerEl = document.createElement("header");
var p1El = document.createElement("p");
var p2El = document.createElement("p");
var p3El = document.createElement("p");
var p4El = document.createElement("p");
var questionList = ["When creating an element with JavaScript, which of these is the correct syntax?", "This is question 2:", "This is question 3:", "This is question 4:"];
var p1Answers = ["1. document.createElement['Element']", "1.", "1.", "1."]
var p2Answers = ["2. documentCreate.Element('Element')", "2.", "2.", "2."]
var p3Answers = ["3. document.createElement('Element')", "3.", "3.", "3."]
var p4Answers = ["4. createDocumentType.Element['Element']", "4.", "4.", "4."]

function playGame () {
    var counter = 0
    headerEl.textContent = questionList[counter];
    p1El.textContent = p1Answers[counter];
    p2El.textContent = p2Answers[counter];
    p3El.textContent = p3Answers[counter];
    p4El.textContent = p4Answers[counter];
    body.appendChild(mainEl);
    mainEl.appendChild(headerEl);
    mainEl.appendChild(p1El);
    mainEl.appendChild(p2El);
    mainEl.appendChild(p3El);
    mainEl.appendChild(p4El);
    mainEl.className = "questions";
    headerEl.setAttribute("style", "align-self:start; text-align:left; font-size: 25px");

    var pTags = document.querySelectorAll("p");
    for (var i = 0; i < pTags.length; i++) {
      pTags[i].setAttribute("style", "align-self:start")
      pTags[i].id = "click"
    };

    clickEl = document.getElementById('click');
    clickEl.addEventListener("click", function() {
      if (counter < questionList.length - 1) {
        counter++
        headerEl.textContent = questionList[counter];
        p1El.textContent = p1Answers[counter];
        p2El.textContent = p2Answers[counter];
        p3El.textContent = p3Answers[counter];
        p4El.textContent = p4Answers[counter];
      } else if (counter = questionList.length) {
        headerEl.textContent = "Thanks for playing!"
      }
    })
  }

startEl.addEventListener("click", function() {
  mainRemove.remove();
    countdown();
    playGame();
})

// todo insert question into header(style to the left) and answers when quiz is started/hide or remove h1
// todo check to see if answer is correct
// todo after answer display correct or wrong and move to next question
// todo after questions record time to a highscore, probably as an array
// todo display scoreboard
// todo 
// todo 
// todo 
// todo 