console.log("[Script.js]");
/* Lesson 1 - Variables and Values
let js = "amazing";
if (js === "amazing") {
  alert("JS is fun");
}

console.log(20 + 15 + 42);
*/

/* Lesson 2 - Data Types
let myNumber = 4;
let myFloat = 4.5;
let myString = "Hola";
let myBool = false;
let myUndef;

console.log("Type of myNumber", typeof myNumber);
console.log("Type of myFloat", typeof myFloat);
console.log("Type of myString", typeof myString);
console.log("Type of myBool", typeof myBool);
console.log("Type of myUndef", typeof myUndef);

myString = 4;

console.log("Type of myString", typeof myString);
*/

/* Lesson 4 - Basic Operators
//Math Operators
const firstName = "Diego";
const lastName = "Cifuentes";

console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5; //x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100

console.log(x);
*/

/* Lesson 5 - Strings and Template Literals
const firstName = "Diego";
const job = "developer";
const birthYear = 1994;

const age = 2021 - birthYear;

const salute = "I'm " + firstName + ", a " + age + " years old " + job;
const templateSalute = `I'm ${firstName}, a ${age} years old ${job}`;

console.log(templateSalute);
*/

/* Lesson 7 - Type Conversion and Type Coercion
//Type Conversion
let inputYear = "1991";
let numberYear = "1990";
inputYear = Number(inputYear);
numberYear = String(numberYear);

console.log(inputYear + 18);
console.log(numberYear);

//Type Coercion
//Here, JS changes the number to String
console.log("I'm " + 23 + " years old");

//Here, JS changes the Strings to numbers because of the minus operator
console.log("23" - "10" - 3);

//Here, JS changes the number to String and appends all of the Strings together
console.log("23" + "10" + 3);
*/
