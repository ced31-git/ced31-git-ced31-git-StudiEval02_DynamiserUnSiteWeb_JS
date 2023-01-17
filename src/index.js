"use strict";

// Declaration of Constants
//Game section
const game = document.querySelector(".container-game");
//For Player 1
const player1 = document.getElementById("player--0");
const player1Name = document.getElementById("playerName--0");
const player1Circle = document.getElementById("r-circle");
const overallScoreP1 = document.getElementById("score--0");
const currentScoreP1 = document.getElementById("currentScore--0");

//For Player 2
const player2 = document.getElementById("player--1");
const player2Name = document.getElementById("playerName--1");
const player2Circle = document.getElementById("l-circle");
const overallScoreP2 = document.getElementById("score--1");
const currentScoreP2 = document.getElementById("currentScore--1");

// For toggle, dice & win section
//Toggle
const btnNew = document.getElementById("newGame");
const txtNew = document.getElementById("newGameTxt");
const btnRoll = document.getElementById("roll");
const btnHold = document.getElementById("hold");
const btnContainer = document.getElementById("btn-container");
//Dice
const diceContainer = document.getElementById("dice-container");
const sideOfTheDice = document.getElementById("sideOfTheDice");
//Win section
const win = document.querySelector(".container-win");
const txtWin = document.querySelector(".txt-win");

//Declaration of variables
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//--------------------------------------------------------
//function to determine which of the two players will start first and displays the "playing field" appropriately
  function firstPlayer() {
    const randomPlayer = Math.floor(Math.random() * 10 + 1);

    if (randomPlayer <= 5) {
      return (activePlayer = 0);
    } else {
      return (activePlayer = 1);
    }
  }
  //------------------------------------------------------
//function to start a new game
btnNew.addEventListener("click", function newGame() {
  
  //activePlayer is equal to the condition of the random number firstPlayer
  activePlayer = firstPlayer();

  //Condition if active player is strictly equal to 0 then ... or else ...
  if (activePlayer === 0) {
    //class changes for player 1
    player1.classList.remove("hidden");
    player1.classList.add("active-player-bg");
    player1Name.classList.add("active-player-bold");
    player1Circle.classList.remove("hidden");

    //class changes for player 2
    player2.classList.remove("hidden");
    player2.classList.remove("active-player-bg");
    player2Name.classList.remove("active-player-bold");
    player2Circle.classList.add("hidden");

    //changing the display of the game buttons
    btnContainer.classList.remove("hidden");

    //class change for dice container
    diceContainer.classList.remove("hidden");
  } else {
    //class changes for player 1
    player1.classList.remove("hidden");

    //class changes for player 2
    player2.classList.remove("hidden");

    //changing the display of the game buttons
    btnContainer.classList.remove("hidden");

    //class change for dice container
    diceContainer.classList.remove("hidden");
  }

  overallScoreP1.textContent = 0;
  overallScoreP2.textContent = 0;
  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;
});

//-------------------------------------------------------

//function to switch the active player
function switchPlayer() {
  //Current reset
  document.getElementById(`currentScore--${activePlayer}`).textContent = 0;
  currentScore = 0;

  //class changes for all players
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("active-player-bg");
  player1Name.classList.toggle("active-player-bold");
  player1Circle.classList.toggle("hidden");
  player2.classList.toggle("active-player-bg");
  player2Name.classList.toggle("active-player-bold");
  player2Circle.classList.toggle("hidden");
}

//--------------------------------------------------------
//function to roll the die on mouse click
btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    sideOfTheDice.src = `./pictures/dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`currentScore--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//--------------------------------------------------------
//function to save the score of the round on mouse click
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      win.classList.remove("hidden");
      game.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});
