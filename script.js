const buttons = document.querySelectorAll('button');
const displayRound = document.querySelector('h1');
const scoreDisplay = document.querySelector('#score');


function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);

    switch(choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissor";
    }
}

function playRound(userChoice) {
    let compChoice = getComputerChoice();
    
    if (userChoice === compChoice){
      displayRound.textContent = "It's a draw!";
      return 0;
    } 
    else if(
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
     ){
      displayRound.textContent = "You win! 🎉";
      return 1;
    }
    else {
      displayRound.textContent = "You lose! 😢";
      return -1;
    }
  }
  
  let scoreHuman = 0, scoreComputer = 0;
  const winningScore = 5;
  
  function updateScore(result) {
    if(result === 1){
      scoreHuman++;
    }
    else if (result === -1){
      scoreComputer++;
    }
    scoreDisplay.textContent = `Score: Human ${scoreHuman} - ${scoreComputer} Computer`;
    
    checkWinner();
  }
  
  function checkWinner() {
      if (scoreHuman === winningScore) {
        displayRound.textContent = "🎉 Congratulations! You won the game! 🎉";
        endGame();
      } else if (scoreComputer === winningScore) {
        displayRound.textContent = "😢 The computer wins! Better luck next time! 😢";
        endGame();
      }
  }
  
  function endGame() {
      buttons.forEach(button => button.disabled = true); 
  }

function playGame() {
    console.log("Play Game!!!");
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        let userChoice = button.textContent.toLowerCase();
        let result = playRound(userChoice);
        updateScore(result);
        console.log(`You clicked: ${userChoice}`);
      });
    })
  }

  playGame();