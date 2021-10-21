'use strict';

//Extracting the main components from the DOM and storing them in variables so they will be easier to handle in the future
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');
const player1Section = document.querySelector('.player--0');
const player2Section = document.querySelector('.player--1');

//Here we use getElementByID instead of querySelector because we are looking for these components by ID instead of class
const labelScorePlayer1 = document.getElementById('score--0');
const labelScorePlayer2 = document.getElementById('score--1');
const labelCurrentPlayer1 = document.getElementById('current--0');
const labelCurrentPlayer2 = document.getElementById('current--1');

//Setting the initial state of the game
let isActivePlayer1 = true;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currentPlayer1 = 0;
let currentPlayer2 = 0;
let diceShown = false;

//Showing to the user the initial state of the game
labelScorePlayer1.textContent = scorePlayer1;
labelScorePlayer2.textContent = scorePlayer2;
diceImage.classList.add('hidden');

const genRdmNum = function () {
    return Math.trunc(Math.random() * 6) + 1;
};

const changeActiveUser = function () {
    if (isActivePlayer1) {
        currentPlayer1 = 0;
        labelCurrentPlayer1.textContent = currentPlayer1;
    } else {
        currentPlayer2 = 0;
        labelCurrentPlayer2.textContent = currentPlayer2;
    }

    isActivePlayer1 = !isActivePlayer1;

    if (isActivePlayer1) {
        player1Section.classList.add('player--active');
        player2Section.classList.remove('player--active');
    } else {
        player1Section.classList.remove('player--active');
        player2Section.classList.add('player--active');
    }
};

const storeScoreWhenHold = function () {
    if (isActivePlayer1) {
        scorePlayer1 += currentPlayer1;
        labelScorePlayer1.textContent = scorePlayer1;
    } else {
        scorePlayer2 += currentPlayer2;
        labelScorePlayer2.textContent = scorePlayer2;
    }
};

const restartGame = function () {
    isActivePlayer1 = true;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    currentPlayer1 = 0;
    currentPlayer2 = 0;
    diceShown = false;

    labelScorePlayer1.textContent = scorePlayer1;
    labelScorePlayer2.textContent = scorePlayer2;
    labelCurrentPlayer1.textContent = 0;
    labelCurrentPlayer2.textContent = 0;

    diceImage.classList.add('hidden');
};

rollDiceBtn.addEventListener('click', function () {
    let dice = genRdmNum();
    diceImage.src = `dice-${dice}.png`;

    if (!diceShown) {
        diceImage.classList.remove('hidden');
        diceShown = true;
    }

    if (dice === 1) {
        changeActiveUser();
        return;
    }

    if (isActivePlayer1) {
        currentPlayer1 += dice;
        labelCurrentPlayer1.textContent = currentPlayer1;
    } else {
        currentPlayer2 += dice;
        labelCurrentPlayer2.textContent = currentPlayer2;
    }
});

holdBtn.addEventListener('click', function () {
    storeScoreWhenHold();
    changeActiveUser();
});

newGameBtn.addEventListener('click', function () {
    restartGame();
});
