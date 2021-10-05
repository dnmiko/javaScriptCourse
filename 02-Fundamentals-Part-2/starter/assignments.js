"use strict";

console.log("[Assignments.js]");

/* Assignment No 1 - Functions
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
};

console.log(describeCountry("Mexico", "12 million", "Ciudad de Mexico"));
console.log(describeCountry("USA", "7 million", "Washington"));
console.log(describeCountry("Colombia", "10 million", "Bogota"));
*/

/* Assignment No 2 - Function Declaration and Function Expression
//Function declaration
function declarationPercentageOfWorld(populationInMillions) {
  return populationInMillions * (100 / 7900);
}

let mexicoPercentage = declarationPercentageOfWorld(1200);
let usaPercentage = declarationPercentageOfWorld(700);
let colombiaPercentage = declarationPercentageOfWorld(1000);

mexicoPercentage = mexicoPercentage.toFixed();
usaPercentage = usaPercentage.toFixed();
colombiaPercentage = colombiaPercentage.toFixed();

console.log(
  `The mexican population represents the ${mexicoPercentage}% of the worlds population`
);
console.log(
  `The american population represents the ${usaPercentage}% of the worlds population`
);
console.log(
  `The colombian population represents the ${colombiaPercentage}% of the worlds population`
);

//Function Expression
const expressionPercentageOfWorld = function (populationInMillions) {
  return populationInMillions * (100 / 7900);
};

let mexicoPercentage2 = declarationPercentageOfWorld(1200);
let usaPercentage2 = declarationPercentageOfWorld(700);
let colombiaPercentage2 = declarationPercentageOfWorld(1000);

mexicoPercentage2 = mexicoPercentage2.toFixed();
usaPercentage2 = usaPercentage2.toFixed();
colombiaPercentage2 = colombiaPercentage2.toFixed();

console.log(
  `The mexican population represents the ${mexicoPercentage2}% of the worlds population`
);
console.log(
  `The american population represents the ${usaPercentage2}% of the worlds population`
);
console.log(
  `The colombian population represents the ${colombiaPercentage2}% of the worlds population`
);
*/

/* Assignment No 3 - Arrow Functions
//Arrow Function
const arrowPercentageOfWorld = (populationInMillions) => {
  return populationInMillions * (100 / 7900);
};

let mexicoPercentage3 = arrowPercentageOfWorld(1200);
let usaPercentage3 = arrowPercentageOfWorld(700);
let colombiaPercentage3 = arrowPercentageOfWorld(1000);

mexicoPercentage3 = mexicoPercentage3.toFixed();
usaPercentage3 = usaPercentage3.toFixed();
colombiaPercentage3 = colombiaPercentage3.toFixed();

console.log(
  `The mexican population represents the ${mexicoPercentage3}% of the worlds population`
);
console.log(
  `The american population represents the ${usaPercentage3}% of the worlds population`
);
console.log(
  `The colombian population represents the ${colombiaPercentage3}% of the worlds population`
);
 */
