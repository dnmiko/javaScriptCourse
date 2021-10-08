'use strict';

/* //Extract the text from one specific paragraph by class
document.querySelector('.message').textContent;

//Set the text of a paragraph
document.querySelector('.message').textContent = 'Correct number!!!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 100;
console.log(document.querySelector('.guess').value); */
const rdmNum = Math.trunc(Math.random() * 19 + 1);
let score = 20;
let highScore = 0;
let winner = false;
document.querySelector('.score').textContent = score;
console.log(`Random number ${rdmNum}`);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (score === 0 || winner) return;

    if (!guess || guess > 20 || guess < 1) {
        document.querySelector(
            '.message'
        ).textContent = `Please enter a value between 1 and 20`;
        return;
    }

    if (guess > rdmNum) {
        document.querySelector('.message').textContent = `Too high!`;
        score--;
    } else if (guess < rdmNum) {
        document.querySelector('.message').textContent = `Too low!`;
        score--;
    } else {
        document.querySelector(
            '.message'
        ).textContent = `You guessed correctly!`;
        highScore = score;
        document.querySelector('body').style.backgroundColor = '#1bb55e';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = rdmNum;
        document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.score').textContent = score;

    if (score === 0) {
        document.querySelector('.message').textContent = `You lost :(`;
        return;
    }
});
