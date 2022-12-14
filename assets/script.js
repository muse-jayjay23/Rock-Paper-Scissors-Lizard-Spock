// Initialising all the elements of the html page as variables in JS at top of the page. Help load times.

// scores for user and comp
let userScore = 0;
let computerScore = 0;
// show this back to the page
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
// retrieve other elements from html
const resultH2 = document.querySelector(".result-notification > h2");
// user choices
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const lizardDiv = document.getElementById("lizard");
const spockDiv = document.getElementById("spock");


/**
 * This will create an array of choices for the computer, from which it will randomly pick using the Math object and fucntions floor and random
 */
 function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

/**
 * Seperate functions for the win, lose draw options of the game, setting what will happen for each
 */
function win(user, comp) {
// Increments user score
    userScore++;
// Updates the score span element
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
// Displays to the result div h2 element the feedback of the result when we win.
    resultH2.innerHTML = `${user} beats ${comp} , well done, you win!`;
}
function lose(user, comp) {
// Increments user score
    computerScore++;
// Updates the score span element
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
// Displays to the result div h2 element the feedback of the result when we lose.
    resultH2.innerHTML = `${comp} beats ${user} , oh no!, you lose!`;
}
function draw(user, comp) {
// Displays to the result div h2 element the feedback of the result when we win.
    resultH2.innerHTML = `${user} cancels out ${comp} , it's a draw...`;
}

/**
 * This will take the users choice when clicked so it can be compared against the computers choice using a switch 
 */
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
// cases where user wins
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
        case "rocklizard":
        case "lizardspock":
        case "spockscissors":
        case "scissorslizard":
        case "lizardpaper":
        case "paperspock":
        case "spockrock":
            win(userChoice, computerChoice);
            break;
// cases where user loses
        case "rockpaper":
        case "rockspock":
        case "scissorsrock":
        case "scissorsspock":
        case "paperscissors":
        case "paperlizard":
        case "lizardrock":
        case "lizardscissors":
        case "spockpaper":
        case "spocklizard":
            lose(userChoice, computerChoice);
            break;
// cases where there is a draw
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
        case "lizardlizard":
        case "spockspock":
            draw(userChoice, computerChoice);
            break;
    }
}
/**
 * event listeners for the choice buttons
 **/
function main() {
    rockDiv.addEventListener('click', function() {
        game("rock");
    });
    paperDiv.addEventListener('click', function() {
        game("paper");
    });
    scissorsDiv.addEventListener('click', function() {
        game("scissors");
    });
    lizardDiv.addEventListener('click', function() {
        game("lizard");
    });
    spockDiv.addEventListener('click', function() {
        game("spock");
    }); 
}
main();