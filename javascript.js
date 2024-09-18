// Function for computer to choose either rock, paper, or scissors
function getCompChoice() {
    let x = Math.random() * 100;
    if (x <= 33) {
        return "rock";
    } else if (x <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to get human choice using prompt
function getHumanChoice() {
    let person = prompt("Rock, Paper or Scissors??").toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    
    while (!validChoices.includes(person)) {
        alert('WRONG INPUT!! ENTER EITHER ROCK, PAPER OR SCISSORS!!');
        person = prompt("Rock, Paper or Scissors??").toLowerCase();
    }
    
    return person;
}

// Function to play a single round and return the result
function playRound() {
    const compChoice = getCompChoice();
    const humanChoice = getHumanChoice();
    let result = '';

    console.log('COMP: ', compChoice); // Log computer's choice
    console.log('HUMAN: ', humanChoice); // Log human's choice

    if (humanChoice === compChoice) {
        result = 'DRAW';
        alert('Draw!!');
    } else if (
        (humanChoice === 'rock' && compChoice === 'scissors') ||
        (humanChoice === 'paper' && compChoice === 'rock') ||
        (humanChoice === 'scissors' && compChoice === 'paper')
    ) {
        result = 'WIN';
        alert('You Won!!');
    } else {
        result = 'LOSS';
        alert('You Lost!!');
    }

    return result;
}

// Initialize player scores
let wins = 0;
let losses = 0;

// Play the game for a total of 5 rounds
for (let i = 0; i < 5; i++) {
    const result = playRound();
    if (result === 'WIN') {
        wins++;
    } else if (result === 'LOSS') {
        losses++;
    } else if (result==='DRAW') {
        i--;
    }
    console.log('WINS: ', wins); // Log the current number of wins
    console.log('LOSES: ', losses); // Log the current number of losses
}

// Display final scores
console.log('WINS: ', wins);
console.log('LOSES: ', losses);
if (wins>losses) {
    console.log('CONGRATS! YOU HAVE WON!');
} else {
    console.log('YOU LOST! TRY AGAIN NEXT TIME!')
}
