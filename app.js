const rps = ['rock', 'paper', 'scissor'];

let computerPlay = function () {
    let random = Math.floor(Math.random() * 3);
    return rps[random];
}

let playerSelection = '';
let cpuScore = document.querySelector('.cpuScore');
let playerScore = document.querySelector('.pScore');
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorBtn = document.querySelector('.scissorBtn');
const resetBtn = document.querySelector('.resetBtn');
let computerSelection;
let roundsPlayed = 0;
const roundResults = document.querySelector('.roundResults');
let cpuScoreCount = 0;
let playerScoreCount = 0;
let playTo = document.querySelector('#playto');

let playRound = function (playerSelection, computerSelection) {
    while (roundResults.firstChild) {
        roundResults.removeChild(roundResults.lastChild);
    }
    let roundResult = document.createElement('p');
            if (playerSelection === rps[0] && computerSelection === rps[1]) {
                cpuScoreCount += 1;
                roundsPlayed += 1;
                roundResult.innerText = 'You lose! Paper beats Rock!';
            } else if (playerSelection === rps[0] && computerSelection === rps[2]) {
                playerScoreCount += 1;
                roundsPlayed += 1;
                roundResult.innerText = 'You win! Rock beats Scissor!';
            } else if (playerSelection === rps[1] && computerSelection === rps[0]) {
                playerScoreCount += 1;
                roundsPlayed += 1;
                roundResult.innerText = 'You win! Paper beats Rock!'
            } else if (playerSelection === rps[1] && computerSelection === rps[2]) {
                cpuScoreCount += 1;
                roundsPlayed += 1;
                roundResult.innerText = 'You lose! Scissor beats Paper!'
            } else if (playerSelection === rps[2] && computerSelection === rps[0]) {
                cpuScoreCount += 1;
                roundsPlayed += 1;
                roundResult.innerText = 'You lose! Rock beats Scissor!';
            } else if (playerSelection === rps[2] && computerSelection === rps[1]) {
                playerScoreCount += 1;
                roundsPlayed += 1;
                roundResult.innerText = 'You win! Scissor beats Paper!';
            } else {
                roundResult.innerText = 'It\'s a Tie!';
            }
            roundResults.append(roundResult);
            cpuScore.textContent = cpuScoreCount; 
            playerScore.textContent = playerScoreCount;
}

let gameEnd = () => {
    const endMessage = document.createElement('p');
    if (playerScoreCount > cpuScoreCount) {
        endMessage.textContent = 'You have won, Congratulations! Click the reset button to play again.';
    } else if (playerScoreCount < cpuScoreCount) {
        endMessage.textContent = 'You have lost! Care to try again? Just press the reset button!'
    } else {
        endMessage.textContent = 'It\s a tie! Play again by pressing the reset button!';
    }
    roundResults.append(endMessage);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
}

rockBtn.addEventListener('click', (e) => {
    computerSelection = computerPlay();
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    if (playerScoreCount == playTo.value || cpuScoreCount === playTo.value) {
        gameEnd();
    }
})
paperBtn.addEventListener('click', (e) => {
    computerSelection = computerPlay();
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    if (playerScoreCount == playTo.value || cpuScoreCount === playTo.value) {
        gameEnd();
    }
})
scissorBtn.addEventListener('click', (e) => {
    computerSelection = computerPlay();
    playerSelection = 'scissor';
    playRound(playerSelection, computerSelection);
    if (playerScoreCount == playTo.value || cpuScoreCount === playTo.value) {
        gameEnd();
    }
})

// To remove all text elements appended to the roundResults div,
// I've used a while loop to keep removing the last child element
// while there still is a child element
resetBtn.addEventListener('click', () => {
    playerScoreCount = 0;
    playerScore.textContent = 0;
    cpuScoreCount = 0;
    cpuScore.textContent = 0;
    roundsPlayed = 0;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorBtn.disabled = false;
    while (roundResults.firstChild) {
            roundResults.removeChild(roundResults.lastChild);
        }
    
})



 





