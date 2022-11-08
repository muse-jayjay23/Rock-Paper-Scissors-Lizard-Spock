
# Rock, Paper Scissors, Lizard, Spock

![The overall view of the web page](/assets/images/Project%202%20page%20image.png "The overall view of the web page")

The website is based on the rock, paper, scissors, lizard, spock game made famous in the Big Bang Theory. The site will target people who know/love the game or the show as well as anyone who enjoys playing online chance-based games. The site is styled with this in mind, using appropriate fonts and colours as well as an updated score board that will pique the interest of the target audience.

## Features

###	Header

![Header of the website](/assets/images/Header.png "Header of the website")

The website features a header at the top of the page. This header displays the title of the site/game and is using the ‘share tech’ google font as well as vintage gamer type colours that fit well with the content of the site as well as being very visible.

### Scoreboard

![scoreboard for the game](/assets/images/scoreboard.png "scoreboard for the game")

The first item underneath the header is a score board. The div includes two more divs that display the user and computer names as well as span elements that update and display the score of the game as this continues. I went for a minimal style here, something akin to a pong game scoreboard as I felt that this was appropriate for the site content. Colours are designed to contrast against each other to easily see the score.

###	Result Header

![result header](/assets/images/result%20notification.png "result header")

Underneath the scoreboard is a message banner. The default text entices the user to play the game, but after this displays the results of the matching up between the user and computer choices once the user selects an option. This is done using backticks and ${} brackets as in the module content on the website. I used a lighter font colour here to contrast the darker background better and use a h2 tag to make the writing nice and large. 

### User Choices

![user choices](/assets/images/user%20choices.png "user choices")

Then, below this, we have the user’s options in the game. Each option uses an image representing rock, paper, scissors etc. I chose these images as the pastel colours fit well with the overall colour scheme of the website and the pseudo function animation upon hover adds to the level of feedback to the user. The separate colours of the options also help the user differentiate between the buttons. 

### Action Message

![action message](/assets/images/action%20message.png "action message")

Underneath this is a simple action message. This is designed to border the choices a little better rather than having a bit of empty space. The message is also designed to focus the user on choosing an option in the game.

### Footer

![footer](/assets/images/footer.png "footer")

At the bottom of the page is the footer. The aim of this game is to help people with no understanding of the game to be able to play. I had the idea to do this after watching the example project video on the course website. Again the colours used are consistent and provide good contrast between the background colour and the text.

### Features Left to Implement

I would like to implement a point where the user is either congratulated or commiserated for winning or losing once either the user or computer get to a certain score.

## Testing

### Layout and Design

The html and css were relatively straightforward on this project. I first checked that the files were correctly linked in the header using a simple background colour css rule. I then considered what I wanted the page to look like and put the basic skeleton in place using mainly divs and a couple of spans for the scoreboard.

I set the basic parameters like margin to 0 in a css rule to negate any browser interference. I tried to use as many % sizing’s as I could to help with the responsiveness of the website. Most of the alignment was done using text align however some was trial and error such as the score board divs which needed a few tweaks to get in a good enough position. 

I kept font sizes relevant to the importance of the element to help the user focus on what is important.

I made the images and their respective divs smaller on smaller screens to provide a better experience for people using handheld devices.

I used media queries to allow for elements to change on different sized screens.

### Javascript and Functions

For the javascript I relied mainly on the console.log function to test whether my functions were working as intended. I did this for all of my functions before fleshing out the actual function, using dev tools in chrome to check the log each time. 

I got the elements from the html file using the getElementBy… process and varied it correctly dependent on the type of file I was targeting. I did this at the top of the js file as during a bit of research I found that this can help with page load times. 

The functions mainly use techniques found in the online course tutorials such as the array of options and using the Math.random function to randomise a computer choice for the game. 

I used a switch statement instead of an if/else if statement as I felt this would become very large considering the amount of options in the game. 

After the function and its outcome had been tested using the console in chrome, I would check the link back to the html by running the http.server in gitpod and make sure that it was updating as intended. 

There were a few moments of trial and error with the functions, all of which involved incorrect code and a long time staring at my laptop screen trying to find the issue. For instance, I had wired up the switch statement and its options wrong, meaning that the computer was basically never winning. This was checked through a console.log function and the console in chrome and corrected.  

I also decided to start with the basic rock paper scissors game and expand it to include the extra options. I felt this helped me understand the basic concepts without too many things going on which made the expansion of the game easier. 

Running through the code through the validators also brought up a few small errors that were corrected as indicated in my git commits.

## Validating

![Responsive design tested](/assets/images/responsiveness.png "responsive design tested")

### Validating 

Html – This was done using the w3 vaildator. No issues found.

![Html vaolidator](/assets/images/HTML%20w3%20validator.png "html validator")

CSS - This was done using the w3 vaildator. No issues found.

![css validator](/assets/images/w3%20CSS%20validator.png "css validator")

Javascript – This was done through jshint. No issue found just some warnings regarding older versions of js.

### Unfixed Bugs

I have not found any unfixed bugs through my testing as of yet.

### Deployment

The page was deployed to github pages. The steps to deploy it were – 

Go to the github repository’s settings
Click the pages section on the left hand side
Click to branch from the root file
Click save and wait for the deployed link to show up

## Credits

### Content

I watched a couple of tutorial videos on building the js for a rock paper scissors game. These are https://www.youtube.com/watch?v=jaVNP3nIAv0&list=FL0ayZuIJFeHrPTVpxVq8XXA&index=1 and https://www.youtube.com/watch?v=RwFeg0cEZvQ 

I used these as a basis and expanded the game to the lizard spock form. 

### Media

The photos for the user choice icons were taken from the big bang theory open source website here - https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock 










