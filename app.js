let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    compChoices = ['rock', 'paper', 'scissors']
    randomItem = compChoices[Math.floor(Math.random()*compChoices.length)];
    return randomItem;
}   

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! you both chose ${playerSelection}`
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}`
        }
        if (computerSelection === 'scissors') {
            playerScore += 1;
            return `You win! ${playerSelection} beats ${computerSelection}`
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}`
        } 
        if (computerSelection === 'rock') {
            playerScore += 1;
            return `You win! ${playerSelection} beats ${computerSelection}`
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}`
        }
        if (computerSelection === 'paper') {
            playerScore += 1;
            return `You win! ${playerSelection} beats ${computerSelection}`
        }
    }
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = (prompt('What hand do you want to play?')).toLowerCase();
        console.log(playRound(playerSelection, getComputerChoice()))
        console.log('Current score:');
        console.log(`Player: ${playerScore} Computer ${computerScore}`);
    }
    if (playerScore === 5) {
        console.log('You win! Congratulations');
    }
    else if (computerScore === 5) {
        console.log('Sorry, you lose!');
    }
}

console.log('Welcome to Rock, Paper, Scissors!');
console.log("Let's play to 5!")
game();




