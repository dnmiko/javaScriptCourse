"use strict";

console.log("[Script.js]");

/* Lesson 1 - Strict mode 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //Strict mode lifts an error because this variable does not exist
if (hasDriversLicense) console.log("I can drive");
*/

/* Lesson 2 - Functions
function logger() {
  console.log("My name is Diego");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice containing ${apples} apples and ${oranges} oranges`;
  return juice;
}

const orangeJuice = fruitProcessor(0, 6);
const fruitJuice = fruitProcessor(3, 4);

console.log(orangeJuice);
console.log(fruitJuice);
*/

/* Lesson 3 - Function Declaration and Function Expression
//Function Declaration
function calcAgeDeclaration(birthYear) {
  return 2021 - birthYear;
}

//Function Expression
const calcAgeExpression = function (birthYear) {
  return 2021 - birthYear;
};

console.log(calcAgeDeclaration(1994));
console.log(calcAgeExpression(1994));
*/

/* Lesson 4 - Arrow Functions
//Arrow Function
const calcAgeArrow = (birthYear) => {
  return 2021 - birthYear;
};

console.log(calcAgeArrow(1994));
 */

/* Lesson 5 - Arrays
const friends = ["Alfredo", "Muchi", "Fofilonga"];

const years = new Array(1994, 1997, 1990);

//Extract the element from an specific position
console.log(`The first element of the friends array is ${friends[0]}`);

//Get the lenght of a given array
console.log(`The lenght of the friends array is ${friends.length}`);

//Extract the last element of an array
console.log(
  `The last element of the years array is ${years[years.length - 1]}`
);

//Mutate the array in an specific position
friends[0] = "Karina";
console.log(friends);
*/

/* Lesson 6 - Array methods
const friends = ["Alfredo", "Muchi", "Fofilonga"];
//The push method does return the length of the new array
const newLength = friends.push("Pepe");
console.log(friends);

//The unshift method adds element to the beginning of the method
friends.unshift("Sara");
console.log(friends);

//The pop method removes the last element of the array
friends.pop();
friends.pop();
console.log(friends);

//The shift method removes the first element of the array
friends.shift();
console.log(friends);

//The indexOf method returns the index of a given element if found
const position = friends.indexOf("Muchi");
console.log(position);

//The includes method return true or false whether the element we look for exists in the Array
const contained = friends.includes("Alfredo");
console.log(contained);
 */

const diego = {
  firstName: "Diego",
  lastName: "Cifuentes",
  age: 27,
  job: "Developer",
  friends: ["Alfredo", "Muchi", "Fofilonga"],
};

//Extract information
const interestedIn = prompt("What do you want know about Diego?");

if (diego[interestedIn]) {
  console.log(diego[interestedIn]);
} else {
  console.log("There is no property with that name");
}

//Add information
diego.location = "Mexico";
diego["favourite Game"] = "League Of Legends";

console.log(diego);
