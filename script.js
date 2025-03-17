const buttons = document.querySelectorAll('button');
const displayRound = document.querySelector('h1');
const scoreDisplay = document.querySelector('#score');
const restartBtn = document.querySelector('#restart');

let scoreHuman = 0, scoreComputer = 0;
const winningScore = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function updateDisplay(message) {
    displayRound.textContent = message;
}

function playRound(userChoice) {
    let compChoice = getComputerChoice();
    
    if (userChoice === compChoice) {
        updateDisplay(`It's a draw! (Computer chose ${compChoice})`);
        return 0;
    } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        updateDisplay(`You win! 🎉 (Computer chose ${compChoice})`);
        return 1;
    } else {
        updateDisplay(`You lose! 😢 (Computer chose ${compChoice})`);
        return -1;
    }
}

function updateScore(result) {
    if (result === 1) scoreHuman++;
    if (result === -1) scoreComputer++;

    scoreDisplay.textContent = `Score: Human ${scoreHuman} - ${scoreComputer} Computer`;
    checkWinner();
}

function checkWinner() {
    if (scoreHuman === winningScore) {
        updateDisplay("🎉 Congratulations! You won the game! 🎉");
        endGame();
    } else if (scoreComputer === winningScore) {
        updateDisplay("😢 The computer wins! Better luck next time! 😢");
        endGame();
    }
}

function endGame() {
    buttons.forEach(button => button.disabled = true);
    restartBtn.style.display = "block"; // Show Restart button
    restartBtn.disabled = false;
}

function resetGame() {
    scoreHuman = 0;
    scoreComputer = 0;
    updateDisplay("Let's Play Rock-Paper-Scissors!");
    scoreDisplay.textContent = `Score: Human 0 - 0 Computer`;
    buttons.forEach(button => button.disabled = false);
    restartBtn.style.display = "none"; // Hide Restart button
}

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let userChoice = button.textContent.toLowerCase();
        let result = playRound(userChoice);
        updateScore(result);
        console.log(`You clicked: ${userChoice}`);
    });
});

restartBtn.addEventListener("click", resetGame);
