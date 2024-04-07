"use strict";


const checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let guess = document.querySelector(".guess");
const body = document.querySelector('body');
const number = document.querySelector('.number');


let secretNumber;

//functions
const generateSecretNumber = function () { 
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
}
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}
generateSecretNumber();

checkBtn.addEventListener("click", function () {  
  // when there is no input
  if (!guess.value) {
    displayMessage("⛔ No number!");
  } 

  // when player wins
  else if (guess.value == secretNumber) {   
    displayMessage("🎉 Correct Number!");
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    // highscore implementation
    let highscore = document.querySelector(".highscore");
    if (score.textContent > highscore.textContent) {
      highscore.textContent = score.textContent;
    }
  }
  else if (guess.value !== secretNumber) {
    if (score.textContent > 1) {
      displayMessage(guess.value > secretNumber ? "📈 Too high!" : "📉 Too Low!");
      score.textContent--;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      score.textContent = 0;
    }
  }
  /*
  // when guess is too high 
  else if (guess > secretNumber) {
    if (score.textContent > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score.textContent--;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      score.textContent = 0;
    }
  } 
  // when guess is too low
  else if (guess < secretNumber) {
    if (score.textContent > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score.textContent--;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      score.textContent = 0;
    }
  }*/

});


// Play Again 
const playAgain = document.querySelector(".again");
playAgain.addEventListener("click", function () {  
  displayMessage("Start guessing...");
  score.textContent = 20;
  number.textContent = "?";
  guess.value = "";
  body.style.backgroundColor = 'rgb(0, 0, 0)';
  number.style.width = '15rem';
  generateSecretNumber();
});
