var highscoreList = document.getElementById("highscore-list");
var highscoreLength = highscores.length
var highscores = [];
var reset = document.getElementById("resetScores");
var menu = document.getElementById("mainMenu");

//places highscores on screen
function renderHighscores() {
    for (var i = 0; i < highscores.length ; i++) {
        var highscore = highscores[i];
        
        var li = document.createElement("li");
        li.textContent = highscore.Initials + " with a time of " + highscore.Score + " seconds!";
        highscoreList.appendChild(li);  
    }
}

//grabs highscores from localStorage then runs the command to put highscores on stream
function init() {
    var storedHighscores = JSON.parse(localStorage.getItem("Highscores"));
    
    if (storedHighscores != null) {
        highscores = storedHighscores;
    }
    renderHighscores()
};

//clears local storage for highscores and 
reset.addEventListener("click", function() {
    localStorage.clear("Highscores");
    window.location.href="highscores.html";
})

//takes user to main menu
menu.addEventListener("click", function() {
    window.location.href="index.html";
})

init()