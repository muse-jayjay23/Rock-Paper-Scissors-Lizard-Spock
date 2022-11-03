// Initialising all the elements of the html page as variables in JS at top of the page. Help load times.

// scores for user and comp
const userScore = 0;
const computerScore = 0;
// show this back to the page
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
// retrieve other elements from html
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result-notification");
// user choices
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
