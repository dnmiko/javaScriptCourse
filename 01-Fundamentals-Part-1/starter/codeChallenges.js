console.log("[Code Challenge 1]");

const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.88;
const johnMass = 85;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log("Mark BMI: ", markBMI);
console.log("John BMI: ", johnBMI);
//console.log("Is Mark BMI higher than Johns? ", markHigherBMI);

console.log("[Code Challenge 2]");
let decision;

if (markHigherBMI) {
  decision = `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`;
} else {
  decision = `Jhon's BMI (${johnBMI}) is higher than Mark's (${markBMI})`;
}

console.log(decision);
