console.log("[Assignment.js]");
/* let country = "Mexico";
let continent = "America";
let population = 126014024;
let isIsland = false;

console.log("Country: ", country);
console.log("Continent: ", continent);
console.log("Population: ", population);
console.log("Is island: ", isIsland);

console.log("Type of country: ", typeof country);
console.log("Type of continent: ", typeof continent);
console.log("Type of population: ", typeof population);
console.log("Type of is island: ", typeof isIsland);

const halfPopulation = population / 2;
const moreThanFinland = population > 6000000;
const moreThanAverage = population > 33000000;
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak Spanish";

console.log("Half the population of my country: ", halfPopulation);
console.log("The population of my country + 1: ", population + 1);
console.log(
  "Does my country have more population than Finland? ",
  moreThanFinland
);
console.log(
  "Does my country have more population than average? ",
  moreThanAverage
);
console.log(description);

const descriptionWithTemplate = `${country} is in ${continent}, and its ${population} people speak Spanish`;

console.log(descriptionWithTemplate);

let messageToPrint;

if (population > 33000000) {
  messageToPrint = `${country}'s population is above average`;
} else {
  let differenceFromAverage = 33000000 - population;
  messageToPrint = `${country}'s population is ${differenceFromAverage} below average`;
}

console.log(messageToPrint); */

const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;

const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 106;

const dolphinAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const koalaAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

console.log("Dolphins Avg Score: ", dolphinAvg);
console.log("Koalas Avg Score: ", koalaAvg);

let result;

if (dolphinAvg > koalaAvg && dolphinAvg >= 100) {
  result = `Dolphins are the winners!`;
} else if (koalaAvg > dolphinAvg && koalaAvg >= 100) {
  result = `Koalas are the winners!`;
} else if (dolphinAvg >= 100 && koalaAvg >= 100) {
  result = `There is a draw`;
} else {
  result = `No one won because the score is lower than 100`;
}

console.log(result);
