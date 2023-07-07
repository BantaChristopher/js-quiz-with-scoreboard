//global variables that all functions need to see
var timerEl = document.getElementById('countdown');
var timeLeft = 76;
var counter = 0;
var cancel = 0;
var click1 = false;
var click2 = false;
var click3 = false;
var click4 = false;
var highscores = [];

//global variables to create/delete elements on the page
var body = document.body;
var startEl = document.getElementById('gameStart');
var mainEl = document.createElement('main');
var mainRemove = document.getElementById("mainRemove");
var h1El = document.createElement("h1");
var headerEl = document.createElement("header");
var sectionEl = document.createElement("section");
var labelEl = document.createElement("label");
var inputEl = document.createElement("input");
var h2El = document.createElement("h2");
var p1El = document.createElement("p");
var p2El = document.createElement("p");
var p3El = document.createElement("p");
var p4El = document.createElement("p");
var p5El = document.createElement("p");

//This is the timer variable 
function countdown() {  
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft
    
    //This will make it stop counting at the end of the game so we can record the users score.
    if(cancel === 1) {
      clearInterval(timeInterval);
    }
    
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "0";
      endGame();
      p5El.addEventListener("click", function() {
        resetVariables();
      })
    }

  }, 1175);
}

//This function removes the section element showing wheather you got the answer right or wrong after 2 seconnds.
function removeSection() {
  var timeOnScreen = timeLeft;
  var timeToDissapear = timeOnScreen - 2;
  
  var timeInterval2 = setInterval(function() {
    timeOnScreen--;
    if(timeOnScreen == timeToDissapear) {
      clearInterval(timeInterval2);
      sectionEl.remove();
    }
  }, 1175);
}

//Full question and answer list
var questionList = ["When creating an element with JavaScript, which of these is the correct syntax?", "Whats the correct syntax to link your JavaScript file to your HTML?",  "Whats the correct way to make an affect happen whilst hovering over an item using CSS?",  "When fetching an ID of an element using JavaScript, which of these is the correct syntax?",  "Which is the correct way to write a comment in JavaScript?", "Filler", "Filler",  "Filler",  "Filler",  "Filler",  ];
var p1Answers = ["document.createElement['Element']", "<script>script.js</script>", "element { hover: on }", "document.getElementById('')", "{# ... #}", "Filler", "Filler", "Filler", "Filler", "Filler", ]
var p2Answers = ["documentCreate.Element('Element')", "<script href='script.js'></script>", "element::hover { effect }", "document.grabElementByIdName('')", "<!--- .... ---!>", "Filler", "Filler", "Filler", "Filler", "Filler", ]
var p3Answers = ["document.createElement('Element')", "<script link='script.js'></script>", "element:hover { effect }", "document.getElementWithId('')", "// ....", "Filler", "Filler", "Filler", "Filler", "Filler", ] 
var p4Answers = ["createDocumentType.Element['Element']", "<script src='script.js'></script>", "hover:element { effect }", "document.getElementByIdName('')", "\\ ...", "Filler", "Filler", "Filler", "Filler", "Filler", ]

//Function to go to the next question and answer in the above arrays,
function nextQuestion () {
  counter++
  headerEl.textContent = questionList[counter];
  p1El.textContent = "1. " + p1Answers[counter];
  p2El.textContent = "2. " + p2Answers[counter];
  p3El.textContent = "3. " + p3Answers[counter];
  p4El.textContent = "4. " + p4Answers[counter];
  resetAnswerValues();
}

//shows after all questions have been answered and presents the use the ability to replay the game
function endGame () {
  cancel++
  p1El.remove()
  p2El.remove()
  p3El.remove()
  p4El.remove()
  headerEl.setAttribute("style", "align-self: center; text-align:center; font-size: 25px");
  headerEl.textContent = "Thanks for playing!"
  mainEl.append(h2El);
  //this prevents a negative score from showing up
  if (timeLeft <= 0) {
    timeLeft = 0;
    headerEl.textContent = "Out of Time!";
    mainEl.append(p5El);
    p5El.textContent = "Play Again?";
    p5El.setAttribute("style", "align-self:center");
  };
  h2El.textContent = "Your score: " + (timeLeft);
  if (timeLeft > 0) {
    labelEl.htmlFor = "initials";
    labelEl.textContent = "Enter your Initials: ";
    inputEl.id = "initials";
    mainEl.append(labelEl);
    labelEl.append(inputEl);
    mainEl.append(p5El);
    p5El.textContent = "Submit";
    p5El.setAttribute("style", "align-self:center");
  };
}

//This function resets all variables to make the game playable again.
function resetVariables() {
  cancel = 0;
  counter = 0;
  timeLeft = 76;
  removeLater.remove();
  h2El.remove();
  p5El.remove();
  labelEl.remove();
  playGame();
  countdown();
}

//resets the question booleans to check question answers after each question
function resetAnswerValues() {
  click1 = false;
  click2 = false;
  click3 = false;
  click4 = false;
}

function correctAnswer() {
  //Checks answers for questions 1-4 using logic
  if (counter === 0 && click3 == true) {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Correct!";
  } else if (counter === 1 && click4 == true) {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Correct!";
  } else if (counter === 2 && click3 == true) {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Correct!";
  } else if (counter === 3 && click1 == true) {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Correct!";
  } else if (counter === 4 && click3 == true) {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Correct!";
  } else if (counter === 5 && click3 == true) {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Correct!";
  } else if (counter === 6 && click3 == true) {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Correct!";
  } else if (counter === 7 && click3 == true) {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Correct!";
  } else if (counter === 8 && click3 == true) {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Correct!";
  } else if (counter === 9 && click3 == true) {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Correct!";
  } else {
    body.appendChild(sectionEl);
    sectionEl.id = "input-answer";
    sectionEl.textContent = "Wrong!";
    timeLeft = timeLeft - 10;
    return timeLeft;
  }
}

function init() {
  var storedHighscores = JSON.parse(localStorage.getItem("Highscores"));
  
  if (storedHighscores != null) {
      highscores = storedHighscores;
      console.log(highscores)
  }
};

function playGame () {
    //Adds the initial set of questions and answers
    headerEl.textContent = questionList[counter];
    p1El.textContent = "1. " + p1Answers[counter];
    p2El.textContent = "2. " + p2Answers[counter];
    p3El.textContent = "3. " + p3Answers[counter];
    p4El.textContent = "4. " + p4Answers[counter];
    
    body.appendChild(mainEl);
    mainEl.appendChild(headerEl);
    mainEl.appendChild(p1El);
    mainEl.appendChild(p2El);
    mainEl.appendChild(p3El);
    mainEl.appendChild(p4El);
    
    //Styles newly added elements
    mainEl.className = "questions";
    mainEl.id = "removeLater"
    headerEl.setAttribute("style", "align-self:start; text-align:left; font-size: 25px");
    var removeLater = document.getElementById("removeLater")

    //Loops and assigns css to all p tags
    var pTags = document.querySelectorAll("p");
    for (var i = 0; i < pTags.length; i++) {
      pTags[i].setAttribute("style", "align-self:start")
    };
    
  }
  
//ids to listen for clicks on answers
p1El.id = "click1";
p2El.id = "click2";
p3El.id = "click3";
p4El.id = "click4";    
  
p5El.addEventListener("click", function() {
    var initialsInput = document.getElementById("initials").value;
    var userScore = {
      Score: timeLeft,
      Initials: initialsInput,
    };
    init()

    highscores.push(userScore);
    
    localStorage.setItem("Highscores", JSON.stringify(highscores));
    window.location.href="highscores.html";
})


//Listens for a click and inserts new questions/answers. Also watches for there to be no new questions.

p1El.addEventListener("click", function() {
    if (counter < questionList.length - 1) {
      click1 = true;
      correctAnswer();
      removeSection();
      nextQuestion();
    } else if (counter = questionList.length - 1) {
      click1 = true;
      correctAnswer();
      removeSection();
      endGame();
    }
})
p2El.addEventListener("click", function() {
    if (counter < questionList.length - 1) {
      click2 = true;
      correctAnswer();
      removeSection();
      nextQuestion();
    } else if (counter = questionList.length - 1) {
      click2 = true;
      correctAnswer();
      removeSection();
      endGame();
    }
})
p3El.addEventListener("click", function() {
    if (counter < questionList.length - 1) {
      click3 = true;
      correctAnswer();
      removeSection();
      nextQuestion();
    } else if (counter = questionList.length - 1) {
      click3 = true;
      correctAnswer();
      removeSection();
      endGame();
    }
})
p4El.addEventListener("click", function() {
    if (counter < questionList.length - 1) {
      click4 = true;
      correctAnswer();
      removeSection();
      nextQuestion();
    } else if (counter = questionList.length - 1) {
      click4 = true;
      correctAnswer();
      removeSection();
      endGame();
    }
})

// This removes the starting page and activates the game to start running.
startEl.addEventListener("click", function() {
  mainRemove.remove();
  playGame();
  countdown();
})

// init();

// todo after questions record time to a highscore, probably as an array
// todo display scoreboard