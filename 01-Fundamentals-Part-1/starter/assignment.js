console.log("[Assignment.js]");
let country = "Mexico";
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

console.log(messageToPrint);
