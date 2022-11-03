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

/**
 * This will take the users choice when clicked so it can be compared against the computers choice
 */
function game(userChoice) {
}

/**
 * This will create an array of choices for the computer, from which it will randomly pick using the Math object and fucntions floor and random
 */
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}
console.log(getComputerChoice());

/**
 * event listeners for the choice buttons
 **/
function main() {
    rockDiv.addEventListener('click', function() {
        game("rock");
    })

    paperDiv.addEventListener('click', function() {
        game("paper");
    })

    scissorsDiv.addEventListener('click', function() {
        game("scissors");
    })
}
main();
