var highscoreList = document.getElementById("highscore-list");
var highscoreLength = highscores.length
var highscores = [];

function renderHighscores() {
    console.log(highscores)
    for (var i = 0; i < highscores.length ; i++) {
        var highscore = highscores[i];
        
        var li = document.createElement("li");
        li.textContent = highscore.Initials + " with a time of " + highscore.Score + " seconds!";
        highscoreList.appendChild(li);  
    }
}

function init() {
    var storedHighscores = JSON.parse(localStorage.getItem("Highscores"));
    
    if (storedHighscores != null) {
        highscores = storedHighscores;
    }
    renderHighscores()
};

init()