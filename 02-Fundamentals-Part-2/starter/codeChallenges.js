"use strict";

console.log("[Code Challenges.js]");

/* Code challenge 1 - Functions

 */

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const koalasAvg = calcAverage(23, 34, 27);
const dolphinsAvg = calcAverage(85, 54, 41);

const checkWinner = (koalasAvg, dolphinsAvg) => {
  if (koalasAvg >= 2 * dolphinsAvg) {
    return `Koalas are the winners (${koalasAvg} vs ${dolphinsAvg})`;
  } else if (dolphinsAvg >= 2 * koalasAvg) {
    return `Dolphins are the winners (${dolphinsAvg} vs ${koalasAvg})`;
  } else {
    return `No one won because none of the teams surpased by twice teh other team score (Dolphins: ${dolphinsAvg} vs Koalas: ${koalasAvg})`;
  }
};

console.log(checkWinner(koalasAvg, dolphinsAvg));
