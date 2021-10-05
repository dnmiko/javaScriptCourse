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

 */

//Arrow Function
const calcAgeArrow = (birthYear) => {
  return 2021 - birthYear;
};

console.log(calcAgeArrow(1994));
