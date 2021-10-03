console.log("[Code Challenge 1.js]");

const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.88;
const johnMass = 85;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log("Mark BMI: ", markBMI);
console.log("John BMI: ", johnBMI);
console.log("Is Mark BMI higher than Johns? ", markHigherBMI);
