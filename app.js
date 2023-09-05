let playerScore = 0;
let computerScore = 0;

rock_btn = document.querySelector('#rock_btn');
paper_btn = document.querySelector('#paper_btn');
scissors_btn = document.querySelector('#scissors_btn');
buttons = document.querySelectorAll('button');
what_hand_msg = document.querySelector('h2');

score_msg = document.querySelector('#score_msg');
player_score_counter = document.querySelector('#player_score_counter');
computer_score_counter = document.querySelector('#computer_score_counter');

rock_btn.addEventListener('click', function () {
    playRound('rock', getComputerChoice())
}
);
paper_btn.addEventListener('click', function () {
    playRound('paper', getComputerChoice())
});
scissors_btn.addEventListener('click', function () {
    playRound('scissors', getComputerChoice())
})


function getComputerChoice() {
    compChoices = ['rock', 'paper', 'scissors']
    randomItem = compChoices[Math.floor(Math.random() * compChoices.length)];
    return randomItem;
}

function updateScoreCounter() {
    player_score_counter.textContent = playerScore;
    computer_score_counter.textContent = computerScore;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        score_msg.textContent = `Tie! you both chose ${playerSelection}`
        updateScoreCounter();
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1;
            updateScoreCounter();
            score_msg.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
            checkScore();
        }
        if (computerSelection === 'scissors') {
            playerScore += 1;
            updateScoreCounter();
            score_msg.textContent = `You win! ${playerSelection} beats ${computerSelection}`
            checkScore();
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore += 1;
            updateScoreCounter();
            score_msg.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
            checkScore();
        }
        if (computerSelection === 'rock') {
            playerScore += 1;
            updateScoreCounter();
            score_msg.textContent = `You win! ${playerSelection} beats ${computerSelection}`
            checkScore();
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1;
            updateScoreCounter();
            score_msg.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
            checkScore();
        }
        if (computerSelection === 'paper') {
            playerScore += 1;
            updateScoreCounter();
            score_msg.textContent = `You win! ${playerSelection} beats ${computerSelection}`
            checkScore();
        }
    }
}

function checkScore() {
    if (playerScore === 5) {
        score_msg.textContent = 'YOU WIN THE GAME! Congratulations!'
        buttons.forEach(button => button.disabled = true)
    }
    else if (computerScore === 5) {
        score_msg.textContent = 'Sorry, you lost the game! :('
        buttons.forEach(button => button.disabled = true)
    }
}


setTimeout(function () {
    what_hand_msg.textContent = "What hand would you like to play?"
}, 2500)



// playGame();




