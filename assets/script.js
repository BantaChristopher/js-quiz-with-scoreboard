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
var questionList = ["This is question 1:", "This is qfffffffffffffffffffffffffffffuestion 2:", "This is question 3:", "This is question 4:",];


function playGame () {
    headerEl.textContent = questionList[0];
    body.appendChild(mainEl);
    mainEl.appendChild(headerEl);
    mainEl.className = "questions";
    headerEl.setAttribute("style", "text-align: left; font-size: 25px") 
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