Rock-paper-scissors
Playing a game of rps against a computer in the console
There is no user interface at this moment, it will play in the console.

We want input from the user in the form of text, and through a prompt.
The output first has to show the moves the cpu and the user made and which won. 
Then that output should be repeated five times and display a message saying who won.

A function needs to be created for the cpu to determine its output
of rock paper or scissors. This function needs to randomize between
the three options.

A function needs to be created for the user, that includes the prompt and checks and makes sure the user enters a valid value and then returns that value.

Then the two return values, from the cpu and the player, need to be compared to determine and return the winner.

To play a best of five:
create variable to hold the number of times played
create variables for user and cpu score
put the other code inside this function of game of five
add points to score of cpu and player if they win
loop over a playround function that plays one round, until five rounds are played

ADD User Interface:
use buttons for the rps options
select element for number of times played with options
reset button for resetting the game
display player and cpuscore and change score based on round winner 

button(for every rps option) addeventlistener when clicked to :
check cpu and player selection and who won,
change cpu or playerscore,
add text element on the page saying who won the round
add in function that checks whether the game's over and displays message with the result and disables the rps buttons