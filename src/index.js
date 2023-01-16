"use strict";

// Declaration of Constants
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
const btnRoll = document.getElementById("roll");
const btnHold = document.getElementById("hold");
const btnContainer = document.getElementById("btn-container");
//Dice
const diceContainer = document.getElementById("dice-container");
const sideOfTheDice = document.getElementById("sideOfTheDice");

//Declaration of variables
let scores, currentScore, activePlayer, playing;

//--------------------------------------------------------

//function to start a new game
function newGame() {

  //Declaration of variables
  activePlayer = 0;
  scores = [0, 0];
  currentScore = 0;
  playing = true;

  //function to determine which of the two players will start first and displays the "playing field" appropriately
  function firstPlayer() {
    let firstPlayer = 0;
    const randomPlayer = Math.floor(Math.random() * 10 + 1);
    console.log(randomPlayer);

    if (randomPlayer <= 5) {
      return (firstPlayer = 0);
    } else {
      return (firstPlayer = 1);
    }
  }

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
  } else {
    //class changes for player 1
    player1.classList.remove("hidden");

    //class changes for player 2
    player2.classList.remove("hidden");

    //changing the display of the game buttons
    btnContainer.classList.remove("hidden");
  }
  
  overallScoreP1.textContent = 0;
  overallScoreP2.textContent = 0;
  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;
};
newGame();

//-------------------------------------------------------

//function to switch the active player
function switchPlayer() {

    //Current reset
    const playerChange = document.getElementById(`currentScore--${activePlayer}`).textContent = 0;
    currentScore = 0;

    //class changes for all players
    if (activePlayer === 0) {
        
    player1.classList.add("active-player-bg");
    player1Name.classList.add("active-player-bold");
    player1Circle.classList.remove("hidden");
    player2.classList.remove("active-player-bg");
    player2Name.classList.remove("active-player-bold");
    player2Circle.classList.add("hidden");
    } else {

    player1.classList.remove("active-player-bg");
    player1Name.classList.remove("active-player-bold");
    player1Circle.classList.add("hidden");
    player2.classList.add("active-player-bg");
    player2Name.classList.add("active-player-bold");
    player2Circle.classList.remove("hidden"); 
    }
};

//--------------------------------------------------------