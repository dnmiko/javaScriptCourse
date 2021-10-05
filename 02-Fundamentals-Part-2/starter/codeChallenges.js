"use strict";

console.log("[Code Challenges.js]");

/* Code challenge 1 - Functions
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
 */

/* Code challenge 2 - Arrays
const calcTip = function (bill) {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

const bills = [125, 555, 44];
const tips = [];
const total = [];
let tip;

bills.forEach((bill) => {
  tip = calcTip(bill);
  tips.push(tip);
  total.push(bill + tip);
});

console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total);
*/

/* Code Challenge 3 - Objects

*/
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 85,
  height: 1.88,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`Marks BMI (${mark.bmi}) is higher than Johns (${john.bmi})`);
} else {
  console.log(`Johns BMI (${john.bmi}) is higher than Marks (${mark.bmi})`);
}
