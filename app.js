const rps = ['rock', 'paper', 'scissor'];

let computerPlay = function () {
    let random = Math.floor(Math.random() * 3);
    return rps[random];
}
let cpuScore = 0;
let playerScore = 0;
let roundsPlayed = 0;
let startGame = prompt('Press enter to start!')


// console.log(playRound(playerSelection, computerSelection))
// let playerSelection = prompt('Rock, paper, scissor, enter one!');
// let computerSelection = computerPlay();

// if (playerSelection.toLowerCase() === (rps[0] || rps[1] || rps[2])) {
//     console.log(playRound(playerSelection, computerSelection))
//     console.log('hello')
// } else {
//     playerSelection = prompt('Please enter a valid choice!')
// }
let playRound = function (playerSelection, computerSelection) {
            if (playerSelection === rps[0] && computerSelection === rps[1]) {
                cpuScore += 1;
                roundsPlayed += 1;
                return 'You lose! Paper beats Rock!'
            } else if (playerSelection === rps[0] && computerSelection === rps[2]) {
                playerScore += 1;
                roundsPlayed += 1;
                return 'You win! Rock beats Scissor!';
            } else if (playerSelection === rps[1] && computerSelection === rps[0]) {
                playerScore += 1;
                roundsPlayed += 1;
                return 'You win! Paper beats Rock!'
            } else if (playerSelection === rps[1] && computerSelection === rps[2]) {
                cpuScore += 1;
                roundsPlayed += 1;
                return 'You lose! Scissor beats Paper!'

            } else if (playerSelection === rps[2] && computerSelection === rps[0]) {
                cpuScore += 1;
                roundsPlayed += 1;
                return 'You lose! Rock beats Scissor!';

            } else if (playerSelection === rps[2] && computerSelection === rps[1]) {
                playerScore += 1;
                roundsPlayed += 1;
                return 'You win! Scissor beats Paper!';

            } else {
                roundsPlayed += 1;
                return 'It\'s a Tie!';
            }
        }


let game = function () {
    while (roundsPlayed !== 5) {
        let playerSelection = prompt('Rock, paper, scissor, enter one!');
        let computerSelection = computerPlay();
        if (playerSelection.toLowerCase() === rps[0] ||
            playerSelection.toLowerCase() === rps[1] ||
            playerSelection.toLowerCase() === rps[2]) {
            console.log(playRound(playerSelection, computerSelection))
        } else {
            alert('Please enter a valid choice!')
        }
        console.log(`Round ${roundsPlayed}: Playerscore is ${playerScore}, CPUScore is ${cpuScore}`)
    }
    if (playerScore < cpuScore) {
        console.log('You have lost! ')
    } else if (playerScore > cpuScore) {
        console.log('You are the winner, congratulations!')
    } else {
        console.log(`It's a tie, you are evenly matched!`)
    }
}

game()


